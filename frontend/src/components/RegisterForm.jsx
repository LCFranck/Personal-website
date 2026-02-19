"use client"
//could probably be combined with LogInForm.jsx
import { useState, useEffect } from 'react'
import { loginService } from '../lib/loginService'
//import noteService from '../services/notes.js'
import { useAuth } from '../context/AuthContext.jsx'
import styles from '../styles/Form.module.css'
import { register } from '../lib/userService.jsx'

const RegisterForm = () => {
  const { login,user } = useAuth()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const [name, setName] = useState('');
  const [visWarning, setVisWarning] = useState(false);




  const handleRegister = async (event) => {
    event.preventDefault();
    setVisWarning(true)
    if (password !== passwordRepeat) {
      console.log('passwords do not match');
      return;
    }
    try {
      const userData = await register({
        username, name, password
      });

      const loginData = await loginService({username, password});
      login(loginData)
      console.log('successful login')

      setUsername('');
      setPassword('');
      setPasswordRepeat('');
      setName('');
      console.log('successful registration and login');

    } catch (error) {
      console.log('registration failed', error);
    }
  }

  return (
    <div className={styles.inputContainer}>
      {!user &&
        <form onSubmit={handleRegister}>
          <div>
            <label htmlFor="username">Username</label>
            <input className={styles.input}
              id="username"
              type="text"
              value={username}
              name="Username"
              onChange={({ target }) => setUsername(target.value)}
            />
          </div>
          <div>
            <label htmlFor="name">Name</label>

            <input className={styles.input}
              id="name"

              type="text"
              value={name}
              name="name"
              onChange={({ target }) => setName(target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>

            <input className={styles.input}
              type="password"
              id="password"
              value={password}
              name="Password"
              onChange={({ target }) => setPassword(target.value)}
            />
          </div>
          <div>
            <label htmlFor="repeatPassword">Repeat password</label>
            <input className={styles.input}
              type="password"
              id="repeatPassword"
              value={passwordRepeat}
              name="Password Repeat"
              onChange={({ target }) => setPasswordRepeat(target.value)}
            />
          </div>
          {visWarning && <p className={styles.tempWarning}> the backend might not be running yet, might take a while but you will be logged in if username and passwords are vaild.</p>}

          <button type="submit" className={styles.button}>Register</button>
        </form>}
    </div>
  )

}



export default RegisterForm;
