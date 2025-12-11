"use client"

import { useState, useEffect } from 'react'
import loginService from '../lib/loginService'
import noteService from '../lib/noteService'
import styles from "../styles/Form.module.css";

const LogInForm = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
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
      setUsername('')
      setPassword('')

  }
  const handleLogin = async (event) => {
    event.preventDefault()

    try {
      const user = await loginService.login({
        username, password,
      })
      window.localStorage.setItem(
        KEY, JSON.stringify(user)
      )
      noteService.setToken(user.token)
      setUser(user)
      setUsername('')
      setPassword('')
      console.log('successful login')
      console.log(user)
     /*  setNotifType('success')
      setNotification(` Welcome ${user.name}`)
      setTimeout(() => {setNotification(null)}, 5000) */
    } catch (exception) {
        console.log('wrong credentials')
      //setErrorMessage('wrong credentials')
     /*  setNotifType('error')
      setNotification(` Wrong username or password!`)
      setTimeout(() => {setNotification(null)}, 5000) */

    }
  }


  return (
    <div>
        {!user && 
        <form onSubmit={handleLogin}>
        <div>
            Username
            <input className={styles.input}
            data-testid='username'
            type="text"
            value={username}
            name="Username"
            onChange={({ target }) => setUsername(target.value)}
            />
        </div>
        <div>
            Password
            <input className={styles.input}
            data-testid='password'
            type="password"
            value={password}
            name="Password"
            onChange={({ target }) => setPassword(target.value)}
            />
        </div>
        <button type="submit" className={styles.button}>Login</button>
        
        </form>}
        {user && <div>
        <h1>{user.username} logged in  </h1>
            <button onClick={handleLogout} className={styles.button}>Logout </button>
           </div>}
    </div>
  )

}

export default LogInForm