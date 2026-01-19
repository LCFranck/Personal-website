"use client"

import GameStats from "@/components/GameStats";
import MainBox from "@/components/MainBox";
import { useState, useEffect } from "react";
import LogInform from "@/components/LogInForm";
import noteService from "@/lib/noteService";
import Profile from "@/components/Profile";
import RegisterForm from "@/components/RegisterForm";
import { useAuth } from "@/context/AuthContext";
import styles from '../../styles/Profile.module.css';


const ProfilePage = () =>{

  const { user } = useAuth();

  const [registervisible, setRegistervisible] = useState(false);
  //const [loginvisible, setLoginvisible] = useState(false);

  return (
    <div>
      <MainBox>
        {user && <Profile /> }
        {!user && !registervisible &&
          <div >
            <LogInform />
            <button onClick={() => setRegistervisible(true)} className={styles.button}>Go to Register</button>
          </div>
        }
        {!user && registervisible &&
          <div style={{ marginTop: '10px' }}>
            <RegisterForm />
            <button onClick={() => setRegistervisible(false)} className={styles.button}>Go to Login</button>
          </div>
        }
      </MainBox>

    </div>

  );
}
export default ProfilePage

