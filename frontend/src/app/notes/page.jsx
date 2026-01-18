"use client";
//import GameStats from "../../components/GameStats";
import MainBox from '../../components/MainBox'
import styles from '../../styles/Profile.module.css'
import Link from "next/link";
import NoteList from "../../components/NoteList";
import { useAuth } from "@/context/AuthContext";  
import NoteForm from "@/components/NoteForm";
//TODO chnage the button to either be login or create new note
const page = () =>{
  const { user } = useAuth();
  return (
    <div>
      <MainBox>
        <h1>Welcome to my note section!</h1>
        {!user && <Link href="/profile" className={styles.button}>
          <span>Login to create!</span>
        </Link>}
        {user && <NoteForm />}
        <NoteList></NoteList>
      </MainBox>
    </div>

  );
}
export default page
