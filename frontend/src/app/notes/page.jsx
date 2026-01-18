"use client"

import { useEffect, useState } from "react"
import MainBox from "../../components/MainBox"
import styles from "../../styles/Profile.module.css"
import Link from "next/link"

import NoteList from "../../components/NoteList"
import NoteForm from "../../components/NoteForm"
import noteService from "@/lib/noteService"
import { useAuth } from "@/context/AuthContext"

const Page = () => {
  const { user } = useAuth()
  const [notes, setNotes] = useState([])

 useEffect(() => {
    const fetchNotes = async () => {
      try {
        const data = await noteService.getAll()
        setNotes(data)
      } catch (err) {
        console.error("failed to fetch notes", err)
      }
    }

    fetchNotes()
  }, []) 


  return (
    <div>
      <MainBox>
        <h1>Welcome to my note section!</h1>

        {!user && (
          <Link href="/profile" className={styles.button}>
            <span>Login to create!</span>
          </Link>
        )}

        {user && <NoteForm setNotes={setNotes} />}
        <NoteList notes={notes} />
      </MainBox>
    </div>
  )
}

export default Page
