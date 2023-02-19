import React from 'react'

//styled-components
import {
    Components,
    Footers,
    PhoneContainer,
    Title,
    Number,
    Logo,
    LogoImg,
    LogoName,
    Contact,
    Telegram,
    Vk,
    YouTube,
    Instagram,
} from './Footer.styled'

//images-logo
import logo from '../assets/images/logo.png'
import telegram from '../assets/images/telegram.png'
import vk from '../assets/images/vk.avif'
import instagram from '../assets/images/instagram.jpg'
import youtube from '../assets/images/youtube.png'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <Components>
            <Footers>
                <PhoneContainer>
                    <Title>Тех. поддержка</Title>
                    <Number> +7 (999) 777-77</Number>
                </PhoneContainer>
                <Logo>
                    <LogoImg src={logo} />
                    <LogoName>КППК - КИЗЛЯР</LogoName>
                </Logo>
                <Contact>
                    <Link to='https://t.me/kppk11'><Telegram src={telegram} /></Link>
                    <Vk src={vk} />
                    <YouTube src={youtube} />
                    <Instagram src={instagram} />
                </Contact>
            </Footers>
        </Components>
    )
}

export default Footer
