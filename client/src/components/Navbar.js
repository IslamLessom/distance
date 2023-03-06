import React, {useState, useContext } from 'react'

//components
import { Context } from '..';

//mob-x
import { observer } from 'mobx-react-lite';

//react-router
import { NavLink } from 'react-router-dom';
import { HOME_ROUTE, LOGIN_ROUTE, TEACHER_ROUTE } from '../utils/consts';

//styled-components
import {
  Header,
  Logo,
  LogoImages,
  LogoText,
  Button,
  ButtonAdmin
} from './Navbar.styled';
import { GlobalStyle } from '../GlobalStyles';

//images-logo
import logo from '../assets/images/logo.png'

const  Navbar = observer(() => {
  const { user } = useContext(Context)
  
  const logOut = () => {
    user.setUser({})
    user.setIsAuth(false)
  }
  return (
    <Header>
      <GlobalStyle />
      <NavLink style={{ textDecoration: 'none', color: 'black' }} to={HOME_ROUTE}>
        <Logo>
          <LogoImages src={logo} />
          <LogoText>КППК - КИЗЛЯР</LogoText>
        </Logo>
      </NavLink>
      <div>
        {user.isAuth ?
          <>
            <NavLink style={{ textDecoration: 'none', color: 'black' }} to={TEACHER_ROUTE}>
              <ButtonAdmin>ДОБАВИТЬ УЧЕНИКА</ButtonAdmin>
            </NavLink>
            <NavLink style={{ textDecoration: 'none', color: 'black' }} to={HOME_ROUTE}>
              <Button onClick={() => logOut()}>ВЫЙТИ</Button>
            </NavLink>
          </>
          :
          <NavLink style={{ textDecoration: 'none', color: 'black' }} to={LOGIN_ROUTE}>
            <Button>ВОЙТИ</Button>
          </NavLink>
        }
      </div>
    </Header>
  )
})

export default Navbar
