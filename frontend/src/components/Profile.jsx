 "use client";
import React from 'react';
import styles from "../styles/Profile.module.css";
import { useState, useEffect } from "react";
import noteService from '@/lib/noteService';
const Profile = () => {
     const [user, setUser] = useState(null)
    
        const KEY = 'loggedAppUser'
    
        useEffect(() => {
            const loggedUserJSON = window.localStorage.getItem(KEY)
            if (loggedUserJSON) {
            const user = JSON.parse(loggedUserJSON)
            setUser(user)
            noteService.setToken(user.token)
            }
        }, [])
    
      const handleLogout = async (event) => {
        event.preventDefault()
    
        window.localStorage.removeItem(KEY)
        noteService.setToken(null)
          setUser(null)
         
    
      }
  return (


  <div>  {user && <div>
        <h1>{user.username} logged in  </h1>
            <button onClick={handleLogout} className={styles.button}>Logout </button>
           </div>}</div>

  );
};

export default Profile; 