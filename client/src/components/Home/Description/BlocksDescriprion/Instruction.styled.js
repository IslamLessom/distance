import styled from "styled-components";
import { device, deviceMax } from "../../../../assets/adaptation/device-width";

export const Container = styled.div`
    background: #2C2E5E;;
    width: 100%;
    height: 100%;
    padding-bottom: 100px;
`

export const NameText = styled.h1`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap');
    font-family: 'Montserrat', sans-serif;

    font-size: 50px;
    margin: 0;
    color: white;
    text-align: center;
    padding-top: 80px;
`
export const NameDescription = styled.h2`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap');
    font-family: 'Montserrat', sans-serif;

    font-size: 30px;
    color: white;
    text-align: center;
    
`
export const InstructionBlocks = styled.div`
    width: 80%;
    margin-left: auto;
    margin-right: auto;
`
export const Instructions = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    @media ${device.laptop} {}
`

export const ContainerNumber = styled.div`
   
`

export const NumberInstruction = styled.h1`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');
    font-family: 'Montserrat', sans-serif;
    font-size: 55px;
    color: #01244E ; 
    background: white;
    border-radius: 100%;
    height: 100px;
    width: 100px;
    display: flex;
    align-content: center;
    flex-wrap: wrap;
    text-align: center;
    justify-content: space-around;
    
    border: #5F94FF 7px solid;
    margin: 0;
    margin-top: 17px;

    @media ${device.laptop} {
        position: absolute;
    }
`

export const DescriptionInstruction = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap');
    
    font-family: 'Montserrat',sans-serif;
    font-size: 25px;
    background: white;
    width: 90%;
    margin-left: 54px;
    height: 100%;
    padding-left: 70px;
    border-top: 4px #5f94ff solid;
    border-bottom: 4px #5f94ff solid;
    padding-top: 4px;
    padding-bottom: 5px;
    color: #01244E;
    @media ${device.laptop} {
        height: 85px;
    }

    @media ${deviceMax.laptop} {
        margin-left: 0;
        padding-left: 0;
        padding-top: 0;
        width: 80%;
        padding: 10px;
        z-index: 1;
        margin-top: 5px;
    }
`

export const NumberContainer = styled.div`
    @media ${deviceMax.laptop} {
        width: 100%;
        display: flex;
        justify-content: center;
        z-index: 2;
    }
`

export const DescriptionContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
` 