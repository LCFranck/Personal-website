'use client';
import React from "react";
import { useState, useEffect } from "react";

import SingleNote from "./SingleNote";
import styles from "../styles/Notes.module.css";
import { getAll } from "../lib/noteService";
import loader from "../styles/Loader.module.css"

import { useAuth } from "../context/AuthContext";

const NoteList = ({ notes }) => {

  if (!notes || notes.length === 0) {
    return <div className={styles.loading}>
      <span className={loader.loader}></span>
      <p>  Starting render backend, might take a while...</p>
    </div>

  }
  return (
    <div className={styles.notesList}>
      {notes.reverse().map(note => (
        <SingleNote key={note.id} note={note} />
      ))}
    </div>
  )
}


export default NoteList;
