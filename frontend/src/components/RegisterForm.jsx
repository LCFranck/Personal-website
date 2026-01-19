"use client"
//could probably be combined with LogInForm.jsx
import { useState, useEffect } from 'react'
import { loginService } from '../lib/loginService.jsx'
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




  const handleRegister = async (event) => {
    event.preventDefault();
    if (password !== passwordRepeat) {
      console.log('passwords do not match');
      return;
    }
    try {
      const userData = await register({
        username, name, password
      });

      const loginData = await loginService.login({username, password});
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
            Username
            <input className={styles.input}
              type="text"
              value={username}
              name="Username"
              onChange={({ target }) => setUsername(target.value)}
            />
          </div>
          <div>
            name
            <input className={styles.input}
              type="text"
              value={name}
              name="name"
              onChange={({ target }) => setName(target.value)}
            />
          </div>
          <div>
            Password
            <input className={styles.input}
              type="password"
              value={password}
              name="Password"
              onChange={({ target }) => setPassword(target.value)}
            />
          </div>
          <div>
            Password
            <input className={styles.input}
              type="password"
              value={passwordRepeat}
              name="Password Repeat"
              onChange={({ target }) => setPasswordRepeat(target.value)}
            />
          </div>
          <button type="submit" className={styles.button}>Register</button>

        </form>}
    </div>
  )

}



export default RegisterForm;
