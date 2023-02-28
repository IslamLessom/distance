import React, { useState } from 'react'

//components
import { login } from './../http/userApi';

//route
import { NavLink } from 'react-router-dom'
import { HOME_AUTH_ROUTE } from '../utils/consts'

//styled-components
import {
  Container,
  AuthBlock,
  Tittle,
  ContainerInput,
  Login,
  Password,
  Button
} from './Auth.styled'

function Auth() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const signIn = async () => {
    const response = await login (email, password)
    console.log(response)
  }
  return (
    <Container>
      <AuthBlock>
        <Tittle>ВОЙТИ</Tittle>
        <ContainerInput>
          <Login
            type='text'
            placeholder='ВВЕДИТЕ СВОЙ ЛОГИН'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Password
            type='password'
            placeholder='ВВЕДИТЕ СВОЙ ПАРОЛЬ'
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </ContainerInput>
        <NavLink>
          <Button onClick={signIn}>ВОЙТИ</Button>
        </NavLink>
      </AuthBlock>
    </Container>
  )
}

export default Auth
