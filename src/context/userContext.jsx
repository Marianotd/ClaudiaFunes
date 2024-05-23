import React, { useState, createContext } from 'react'

const userContext = createContext()

export default function userContextProvider({ children }) {
    const [user, setUser] = useState({})

  return (
    <div>userContext</div>
  )
}
