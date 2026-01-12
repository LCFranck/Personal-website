  "use client";
import React from "react";
 // import Image from "next/image";
  
import styles from "../styles/Notes.module.css";

const SingleNote = ({note}) => {
   



  return(
    <div className={styles.noteCard}> 
        <p>Title: {note.title} </p>
        <p> Author: {note.author}</p>
        content:
        <p className={styles.contentBox}> {note.content} </p>
    </div>
    
  )}

export default  SingleNote;