"use client"
import { createContext, useContext, useEffect, useState } from "react"
//import { noteService } from "../lib/noteService"
import { getAll, create, update, remove, setToken } from "@/lib/noteService";


const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const KEY = "loggedAppUser"
  const [user, setUser] = useState(null)

  useEffect(() => {
    const storedUser = window.localStorage.getItem(KEY)
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser)
      setTimeout(() => { //timeout to satisfy lint
        setUser(parsedUser)
        setToken(parsedUser.token)
      }, 0)
    }
  }, [])


  const login = (userData) => {
    if (!userData?.token) {
      throw new Error("No token received");
    }

    window.localStorage.setItem(KEY, JSON.stringify(userData));
    setToken(userData.token);
    setUser(userData);
  };
  const logout = () => {
    window.localStorage.removeItem(KEY)
    setToken(null)
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
