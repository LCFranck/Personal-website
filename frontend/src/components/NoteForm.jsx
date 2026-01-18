"use client";
import React from 'react';  
import {useAuth} from '../context/AuthContext';
import styles from '../styles/Form.module.css'
import noteService from '../lib/noteService.jsx'
import { useState } from 'react';

const NoteForm = ({setNotes }) => {
    const {user} = useAuth();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState(''); 

      const handleCreateNote = async (event) => {
        event.preventDefault()
        const author = user.username;
    
        try {
          const newNote = await noteService.create({
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
    <div>
      {user &&
        <form onSubmit={handleCreateNote}>
          <div>
            Title
            <input className={styles.input}
              type="text"
              value={title}
              name="Title"
              onChange={({ target }) => setTitle(target.value)}
            />
          </div>
          <div>
            Content
            <input className={styles.input}
              data-testid='content'
              type="text"
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

