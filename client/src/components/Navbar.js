import React from 'react'

//styled-components
import { Header, Logo, LogoImages, LogoText, Button } from './Navbar.styled';
import { GlobalStyle } from '../GlobalStyles';
//images-logo
import logo from '../assets/images/logo.png'

function Navbar() {
  return (
    <Header>
      <GlobalStyle />
      <Logo>
        <LogoImages src={logo} />
        <LogoText>КППК - КИЗЛЯР</LogoText>
      </Logo>
      <Button>ВОЙТИ</Button>
    </Header>
  )
}

export default Navbar
