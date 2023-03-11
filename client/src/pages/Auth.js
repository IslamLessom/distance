import React, { useState, useContext } from 'react'

//components
import { login } from '../http/userAPI';
import { Context } from './../index';
//mob-x
import { observer } from 'mobx-react-lite';

//route
import { NavLink, useNavigate } from 'react-router-dom'
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

const Auth = observer(() => {
  const navigate = useNavigate()
  const { user } = useContext(Context)
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const signIn = async () => {
    try {
      let data
      data = await login(email, password)
      user.setUser(user)
      user.setIsAuth(true)
      navigate(HOME_AUTH_ROUTE)
    } catch (e) {
      alert('Ошибка авторизации')
    }
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
})

export default Auth
