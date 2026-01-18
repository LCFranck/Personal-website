'use client';
import React from "react";
import { useState, useEffect } from "react";

import SingleNote from "./SingleNote";
import styles from "../styles/Notes.module.css";
import { getAll } from "../lib/noteService";

import { useAuth } from "../context/AuthContext";

const NoteList = ({ notes }) => {
  return (
    <div>
      {notes.map(note => (
        <SingleNote key={note.id} note={note} />
      ))}
    </div>
  )
}


export default NoteList;
