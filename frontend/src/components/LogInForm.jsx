"use client"

import { useState, useEffect } from 'react'
import loginService from '../lib/loginService'
import noteService from '../lib/noteService'
import styles from "../styles/Form.module.css";

const LogInForm = () => {
  const KEY = 'loggedAppUser' //local storage key
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(() => { //sets initial state from local storage or null if no local storage
    const loggedUserJSON = window.localStorage.getItem(KEY);
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      return user;
    }
    return null;
  });


// Updates noteService token when user state changes (e.g. on login/logout)
  useEffect(() => {
    if (user) {
      noteService.setToken(user.token);
    }
  }, [user]);


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
    } catch (exception) {
      console.log('wrong credentials')
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
