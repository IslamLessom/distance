import styled from "styled-components";

import { device } from "../../../../assets/adaptation/device-width";

export const Container = styled.div`
    background: #2C2E5E;
    padding-bottom: 100px;
`

export const Title = styled.h1`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap');
    font-family: 'Montserrat', sans-serif;

    text-align: center;
    margin: 0;
    color: white;
    font-size: 50px;
    padding-top: 80px;
    padding-bottom: 80px;
`

export const ProgramBlocks = styled.div`
    width: 80%;
    margin-right: auto;
    margin-left: auto;
    cursor: pointer;
    
    display: grid;
    grid-template-columns: 33% 33% 33%;

    @media ${device.mobileS} {
        grid-template-columns: 100%;
        justify-content: center;
    }

    @media ${device.mobileLL} {
        grid-template-columns: 50% 50%;
        justify-content: center;
    }

    @media ${device.laptop} {
        grid-template-columns: 33% 33% 33%;
        justify-content: center;
    }
`
export const Program = styled.div`
    background: white;
    border-radius: 8px;
    margin: 10px;
`

export const Images = styled.img`
    width: 100%;
`

export const ContainerText = styled.div`
    padding-left: 15px;
`

export const DateCreate = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
    font-family: 'Montserrat', sans-serif;

    font-size: 20px;
`
export const DescriptionProgram = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');
    font-family: 'Montserrat', sans-serif;
    width: 85%;
    font-size: 17px;
`
export const ActiveProgram = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');
    font-family: 'Montserrat', sans-serif;

    background: #5F94FF;
    width: 80px;
    text-align: center;
    padding: 7px;
    border-radius: 8px;
    color: white;
`