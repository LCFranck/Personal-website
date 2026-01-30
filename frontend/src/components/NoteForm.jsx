"use client";
import React from 'react';
import {useAuth} from '../context/AuthContext';
import styles from '../styles/Form.module.css'
import { create } from "@/lib/noteService";

import { useState } from 'react';

const NoteForm = ({setNotes }) => {
  const {user} = useAuth();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');


  const handleCreateNote = async (event) => {
    event.preventDefault()
    const author = user.username;

    try {
      const newNote = await create({
        title, content, author
      })

      console.log('Note created successfully:', newNote);
      setNotes(prev => prev.concat(newNote))
      setTitle('')
      setContent('')

    } catch (error) {
      //todoo add error notification
      console.log('something went wrong when creating note', error)
    }
  }


  return (
    <div >
      {user &&
        <form onSubmit={handleCreateNote} className={styles.inputContainer}>

          <div>
            <label htmlFor="title">Title</label>

            <input className={styles.input}
              type="text"
              id="title"
              value={title}
              name="Title"
              onChange={({ target }) => setTitle(target.value)}
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="content">Content</label>
            <textarea className={styles.resizeInput}
              data-testid='content'
              id='content'
              value={content}
              name="Content"
              onChange={({ target }) => setContent(target.value)}
            />
          </div>
          <button type="submit" className={styles.button}>Create Note</button>
        </form>}
    </div>
  )

}

export default NoteForm

