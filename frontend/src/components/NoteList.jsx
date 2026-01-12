'use client';
import React from "react";
import { useState, useEffect } from "react";

import SingleNote from "./SingleNote";
import styles from "../styles/Notes.module.css";
import { getAll } from "@/lib/noteService";

const NoteList = () => {
 
    const [notes, setNotes] = useState([]);

    useEffect(() => { 
        const fetchNotes = async () => {
            const notes = await getAll();
            setNotes(notes);
        }
        fetchNotes();
    },[]);
   

  return (
    <div className={styles.notesContainer} >
      {notes.map((note) => (  
        <SingleNote key={note.id} note={note} />
      ))}
    </div>
  );
} 
      
 
export default NoteList;