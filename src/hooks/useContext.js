import React, { createContext, useState } from 'react'

export const Context = createContext(null)

export const Provider = props => {
  const [isAuth, setIsAuth] = useState(false)
  const value = {
    isAuth,
    activeAuth: () => {
      setIsAuth(true)
    }
  }

  return (
    <Context.Provider value={value}>
      {props.children}
    </Context.Provider>
  )
}
