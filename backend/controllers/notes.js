const jwt = require("jsonwebtoken");
const notesRouter = require("express").Router();
const Note = require("../models/note");
const { userExtractor } = require("../utils/middleware");

notesRouter.get("/:id", async (request, response) => {
  const note = await Note.findById(request.params.id);
  if (note) {
    response.json(note);
  } else {
    response.status(404).end();
  }
});

notesRouter.get("/", async (request, response) => {
  const notes = await Note.find({}).populate("user", { username: 1, name: 1 });
  response.json(notes);
});

notesRouter.post("/", userExtractor, async (request, response) => {
  const body = request.body;
  const user = request.user;

  if (!user) {
    return response.status(400).json({ error: "UserId missing or not valid" });
  }

  const note = new Note({
    title: body.title,
    author: body.author,
    likes: body.likes,
    content: body.content,
    user: user._id,
  });

  const savedNote = await note.save();
  user.notes = user.notes.concat(savedNote._id);
  await user.save();

  response.status(201).json(savedNote);
});

notesRouter.delete("/:id", userExtractor, async (request, response) => {
  const note = await Note.findById(request.params.id);
  const decodedToken = await jwt.verify(request.token, process.env.SECRET);
  const user = request.user;

  console.log("note user:" + note.user.toString());
  console.log("user user:" + user._id.toString());

  if (!decodedToken.id) {
    return response.status(401).json({ error: "token missing or invalid" });
  }

  if (note.user.toString() !== user._id.toString()) {
    return response.status(400).json({ error: "Invalid user!" });
  }

  await Note.findByIdAndDelete(request.params.id);
  response.status(204).end();
});

notesRouter.put("/:id", async (request, response, next) => {
  const { title, author, content, likes } = request.body;

  try {
    const note = await Note.findById(request.params.id);
    ((note.title = title),
      (note.author = author),
      (note.content = content),
      (note.likes = likes));

    const updatedNote = await note.save();
    await response.json(updatedNote);
    return updatedNote;
  } catch (error) {
    next(error);
  }
});

module.exports = notesRouter;
