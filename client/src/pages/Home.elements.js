import styled from 'styled-components'

export const Container = styled.div`
    background: #2C2E5E;
    height: 100%;
    display: grid;
    grid-template-columns: 50% 50%;
`

export const LeftContainer = styled.div`
   width: 100%;
   margin-left: 50px;
   margin-top: 100px;
`

export const NameBigText = styled.h1`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@800&display=swap');
    color: white;
    font-size: 60px;
    font-family: 'Montserrat', sans-serif;
`

export const NameSmallText = styled.h2`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap');
    color: #32CD95;
    margin-top: -30px;
    font-size: 50px;
    font-family: 'Montserrat', sans-serif;
`

export const Description = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap');
    color: white; 
    font-size: 25px;
    font-family: 'Montserrat', sans-serif;
    width: 90%;
`

export const Button = styled.button`

`

export const RightContainer = styled.div`
   
`


export const Images = styled.img`
    width: 80%;
`