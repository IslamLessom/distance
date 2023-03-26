
import styled from 'styled-components';
import { deviceMax, device } from '../../../../assets/adaptation/device-width'

export const Container = styled.div`
    background: #2c2e5e;
    width: 100vw;
    height: 100vh;
    padding-bottom: 100px;
    @media ${deviceMax.laptop} {
        height: 100%; 
    }
`
export const Title = styled.h1`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap');
    font-family: 'Montserrat',sans-serif;
    text-align: center;
    margin: 0;
    color: white;
    font-size: 50px;
    padding-top: 80px;
    padding-bottom: 80px;
`
export const BlockContent = styled.div`
    width: 90%;
    height: 50%;
    background: white;
    margin-left: auto;
    margin-right: auto;
    border-radius: 10px;
`

export const TextContainer = styled.div`
    background: #5F94FF;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
`

export const Text = styled.h1`  
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');
    font-family: 'Montserrat', sans-serif;
    text-align: center; 
    color: white;
    font-size: 35px;
    padding: 10px;
`
export const Description = styled.p`
    text-align: center;
    font-size: 40px;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    color: #01244E;
    padding-bottom: 50px;
`
