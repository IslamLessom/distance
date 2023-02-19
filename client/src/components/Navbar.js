import React, { useContext } from 'react'
import { Context } from '..';
//react-router
import { NavLink } from 'react-router-dom';
import { ADMIN_ROUTE, HOME_ROUTE, LOGIN_ROUTE } from '../utils/consts';

//styled-components
import {
  Header,
  Logo,
  LogoImages,
  LogoText,
  Button
} from './Navbar.styled';
import { GlobalStyle } from '../GlobalStyles';

//images-logo
import logo from '../assets/images/logo.png'


function Navbar() {
  const { user } = useContext(Context)
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
            <NavLink style={{ textDecoration: 'none', color: 'black' }} to={ADMIN_ROUTE}>
              <Button>Админ</Button>
            </NavLink>
            <NavLink style={{ textDecoration: 'none', color: 'black' }} to={LOGIN_ROUTE}>
              <Button>ВОЙТИ</Button>
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
}

export default Navbar
