import React from 'react'
import useFormUser from '../../hooks/useFormUser'
import { Form, Button, Input } from './styles'
import { MdPets } from 'react-icons/md'
import useRegister from '../../hooks/userRegister'
export const UserForm = ({ onSubmit, title }) => {
  const initialState = {
    email: '',
    password: ''
  }
  const [state, onChange] = useFormUser(initialState)
  const { email, password } = state
  const { registerMutation } = useRegister()
  const handleSubmit = ({ email, password }) => {
    const input = { email, password }
    const variables = { input }
    registerMutation({ variables })
      .then(onSubmit())
  }
  return (
    <Form onSubmit={handleSubmit({ email, password })}>
      <MdPets zise='50px' />
      <Input placeholder='Email' {...email} name='email' value={email} onChange={onChange} />
      <Input placeholder='Password' type='password' {...password} name='password' value={password} onChange={onChange} />
      <Button type='submit'>{title}</Button>
    </Form>
  )
}
