"use client";
import React from 'react';
import styles from "../styles/Profile.module.css";
import { useState, useEffect } from "react";
// import noteService from '../lib/noteService';
import FlipPhoneImage from './FlipPhoneImage';
import { useAuth } from '../context/AuthContext';
const Profile = () => {
  const { user, logout } = useAuth();
  const { registervisible, setRegistervisible } = useState(false);
  //TODO add usecontext!!!!! and also everythoing else


  const handleLogout = async (event) => {
    event.preventDefault()
    logout()
    console.log('logged out')
  }
  return (
    <div>  {user && <div>
      <h1>{user.username} logged in  </h1>
      <button onClick={handleLogout} className={styles.button}>Logout </button>
    </div>}
    <FlipPhoneImage />
    </div>

  );
};

export default Profile;
