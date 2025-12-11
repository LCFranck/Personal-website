
const baseUrl = "http://localhost:3001/api/notes";//ändra detta till korrekta URL:n för din backend


let token = null;

export function setToken(newToken) {
  token = `Bearer ${newToken}`;
}

// CREATE
export async function create(newObject) {
  const res = await fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: token }),
    },
    body: JSON.stringify(newObject),
  });

  if (!res.ok) {
    throw new Error("Failed to create note");
  }

  return res.json();
}

// GET ALL
export async function getAll() {
  const res = await fetch(baseUrl, {
    method: "GET",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch notes");
  }

  return res.json();
}

// UPDATE
export async function update(id, newObject) {
  const res = await fetch(`${baseUrl}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: token }),
    },
    body: JSON.stringify(newObject),
  });

  if (!res.ok) {
    throw new Error("Failed to update note");
  }

  return res.json();
}

// DELETE
export async function remove(id) {
  const res = await fetch(`${baseUrl}/${id}`, {
    method: "DELETE",
    headers: {
      ...(token && { Authorization: token }),
    },
  });

  if (!res.ok) {
    throw new Error("Failed to delete note");
  }

  return res.json();
}

export default { getAll, setToken, create, update, remove };
