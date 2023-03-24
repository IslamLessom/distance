import styled from "styled-components";
import { deviceMax, device } from '../assets/adaptation/device-width'

export const Components = styled.div`
    position: relative;
    padding-top: 160px;

    @media ${deviceMax.laptop} {
        padding-top: 400px;
    }
    
`
export const Footers = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    display: grid;
    grid-template-columns: 33% 33% 34%;
    align-items: end;
    padding-bottom: 10px;

    @media ${deviceMax.laptop} {
        grid-template-columns: 100%;  
    }
       
`
export const PhoneContainer = styled.div`
    text-align: center;
    font-size: 20px;
`
export const Title = styled.p`
    font-size: 26px;
`
export const Number = styled.p`
    margin-top: -15px;
    font-size: 24px;
`
export const Logo = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
`
export const LogoImg = styled.img`
    width: 110px;
`
export const LogoName = styled.h1`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');
    font-family: 'Montserrat', sans-serif;
    font-size: 30px;
    width: 30%;
    margin-left: 7px;
`
export const Contact = styled.div`
    text-align: center;
    margin-bottom: 20px;
`
export const Telegram = styled.img`
    width: 50px;
    margin: 5px;
`
export const Vk = styled.img`
    width: 50px;
    margin: 5px;
`
export const YouTube = styled.img`
    width: 70px;
    margin: 5px;
`
export const Instagram = styled.img`
    width: 50px;
    margin: 5px;
`