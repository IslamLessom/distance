import styled from 'styled-components'
import bac from '../assets/images/slideimage03.png'
import { device } from '../assets/adaptation/device-width'

export const Container = styled.div`
    background: #2C2E5E;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 50% 50%;
   
    @media ${device.mobileS} {
        grid-template-columns: 100%; 
    }

    @media ${device.mobileM} {
        grid-template-columns: 100%; 
    }

    @media ${device.mobileL} {
        grid-template-columns: 100%; 
    }

    @media ${device.laptop} {
        grid-template-columns: 35% 65%;
        height: 951px;
    }
`

export const LeftContainer = styled.div`
   width: 100%;
   margin-left: 50px;
   margin-top: 50px;

   @media ${device.mobileS} {
        width: 80%;
        margin-left: 18px;
        margin-top: 20px;
    }

    @media ${device.mobileM} {
        width: 80%;
        margin-left: 18px;
        margin-top: 20px;
    }

    @media ${device.mobileL} {
        width: 80%;
        margin-left: 18px;
        margin-top: 20px;
    }

    @media ${device.laptop} {
        width: 90%;
        margin-left: 74px;
        margin-top: 65px;
    }

    @media ${device.laptopL} {
        width: 100%;
        margin-left: 182px;
        margin-top: 130px;
    }

    @media ${device.desktop} {
        width: 100%;
        margin-left: 82px;
        margin-top: 23px;
    }
`

export const NameBigText = styled.h1`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@800&display=swap');
    color: white;
    font-size: 60px;
    font-family: 'Montserrat', sans-serif;

    @media ${device.mobileS} {
        font-size: 35px;
    }

    @media ${device.mobileM} {
        font-size: 40px;
    }

    @media ${device.mobileL} {
        font-size: 47px;
    }

    @media ${device.laptopL} {
        font-size: 67px;
    }
`

export const NameSmallText = styled.h2`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap');
    color: #32CD95;
    margin-top: -30px;
    font-size: 50px;
    font-family: 'Montserrat', sans-serif;

    @media ${device.mobileS} {
        font-size: 35px;
        margin-top: -20px;
    }


    @media ${device.mobileM} {
        font-size: 35px;
        margin-top: -20px;
    }

    @media ${device.mobileL} {
        font-size: 40px;
        margin-top: -20px;
    }

    @media ${device.laptopL} {
        font-size: 57px;
    }
`

export const Description = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap');
    color: white; 
    font-size: 25px;
    font-family: 'Montserrat', sans-serif;
    width: 90%;

    @media ${device.mobileS} {
        width: 100%;
    }

    @media ${device.mobileM} {
        width: 100%;
    }

    @media ${device.mobileL} {
        width: 100%;
        font-size: 27px;
    }

    @media ${device.laptopL} {
        font-size: 37px;
    }
`

export const Button = styled.button`
    border: none;
    margin-bottom: 80px;
    width: 230px;
    height: 58px;
    background: #32CD95;
    color: white;
    font-size: 24px;
    border-radius: 8px;
    cursor: pointer;

    @media ${device.mobileS} {
       width: 273px;
    }

    @media ${device.mobileM} {
       width: 335px;
    }

    @media ${device.mobileL} {
       width: 335px;
    }

    @media ${device.laptopL} {
        font-size: 37px;
        width: 435px;
    }
`

export const RightContainer = styled.div` 
    width: 80%;
    margin-left: 80px;  
    background-image: url(${bac});
    background-repeat: no-repeat;

    @media ${device.mobileS} {
        background-image: none;
        width: 0%;
    }

    @media ${device.mobileM} {
        background-image: none;
        width: 0%;
    }

    @media ${device.mobileL} {
        background-image: none;
        width: 0%;
    }

    @media ${device.laptop} {
        background-image: url(${bac});
        width: 100%;
        margin-left: 0;
        background-position: center;
        margin-top: -279px;
        background-size: 659px;
    }

    @media ${device.desktop} {
        background-image: url(${bac});
        width: 100%;
        margin-left: 0;
        background-position: center;
        margin-top: -268px;
        background-size: 673px;
    }

    @media ${device.desktopL} {
        background-image: url(${bac});
        width: 100%;
        margin-left: 0;
        background-position: center;
        margin-top: -137px;
        background-size: 800px;
    }

`