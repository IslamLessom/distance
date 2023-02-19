import React from 'react'

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
  return (
    <Container>
      <AuthBlock>
        <Tittle>ВОЙТИ</Tittle>
        <ContainerInput>
          <Login type='text' placeholder='ВВЕДИТЕ СВОЙ ЛОГИН' />
          <Password type='password' placeholder='ВВЕДИТЕ СВОЙ ПАРОЛЬ' />
        </ContainerInput>
        <NavLink to={HOME_AUTH_ROUTE}><Button>ВОЙТИ</Button></NavLink>
      </AuthBlock>
    </Container>
  )
}

export default Auth
