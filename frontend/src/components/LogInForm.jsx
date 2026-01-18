"use client"

import { useState, useEffect } from 'react'
import { useAuth } from "../context/AuthContext"
import loginService from '../lib/loginService'
import noteService from '../lib/noteService'
import styles from "../styles/Form.module.css";

const LogInForm = () => {

  const { user, login, logout } = useAuth()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    if (user) {
      noteService.setToken(user.token);
    }
  }, [user]);




  const handleLogin = async (event) => {
    event.preventDefault()

    try {
      const userData = await loginService.login({
        username, password,
      })

      login(userData)
      setUsername('')
      setPassword('')
      console.log('successful login')
    } catch (error) {
      //todoo add error notification
      console.log('wrong credentials', error)
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
    
    </div>
  )

}

export default LogInForm
