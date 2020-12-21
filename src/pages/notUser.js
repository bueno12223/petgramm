import React from 'react'
import { UserForm } from '../components/userForm'
export const NotUser = ({ activeAuth }) => (
  <>
    <UserForm title='Registrarse' onSubmit={activeAuth} />
    <UserForm title='Iniciar sesión' onSubmit={activeAuth} />
  </>
)
