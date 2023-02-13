import styled from "styled-components";

export const Container = styled.div`
    background: #2C2E5E;
    width: 100%;
    height: 500px;
`

export const Block = styled.div`
    background: white;
    width: 75%;
    height: 100%;
    border-radius: 8px;
    padding: 15px;
    cursor: pointer;
`

export const Blocks = styled.div`
    display: grid;
    grid-template-columns: 30% 30% 30%;
    justify-content: center;
`

export const Image = styled.img`
    width: 185px;
    text-align: center;
`

export const Name = styled.h1`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');

font-size: 30px;
font-family: 'Montserrat', sans-serif;
`

export const Descriptions = styled.p`
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

font-family: 'Montserrat', sans-serif;
font-size: 25px;
margin: 0px;
`

