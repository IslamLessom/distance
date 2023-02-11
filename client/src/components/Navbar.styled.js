import styled from "styled-components"

export const Header = styled.header`
    display: flex;
    background: white;
    justify-content: space-between;
    align-items: center;
    height: 87px;

    @media (max-width: 375px) {
        flex-direction: column;
        height: 150px;
        margin-bottom: 15px;
        align-items: flex-start;
    }
`
export const Logo = styled.div`
    display: flex;
`

export const LogoImages = styled.img`
    width: 80px;
    padding: 15px 20px;
`

export const LogoText = styled.h2`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');

    width: 100px;
    padding-top: 4px;
    font-family: 'Montserrat', sans-serif;
`

export const Button = styled.button`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap');
    height: 38px;
    margin-right: 20px;
    width: 120px;
    border-radius: 8px;
    border: none;
    background: #5F94FF;
    color: white;
    font-size: 20px;
    font-family: 'Montserrat', sans-serif;
    cursor: pointer;

    @media (max-width: 375px) {
        margin-left: 25px;
        width: 87%;
    }
`

