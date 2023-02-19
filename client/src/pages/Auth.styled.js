import styled from 'styled-components';

export const Container = styled.div`
    text-align: center;
    background: #2C2E5E;
    width: 60%;
    margin-left: auto;
    margin-right: auto;
    height: 450px;
    border-radius: 10px;
    position: relative;
    margin-top: 50px;
`
export const AuthBlock = styled.div`
    width: 100%;
    padding-top: 50px;
`
export const Tittle = styled.h1`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap');
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    color: white;
`
export const ContainerInput = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
`
export const Login = styled.input`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap');
    font-family: 'Montserrat', sans-serif;
    
    text-align: left;
    font-size: 15px;
    height: 40px;
    border-radius: 10px;
    border: none;
    margin-bottom: 30px;
    padding-left: 15px;
    color: #01244E;
`
export const Password = styled.input`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap');
    font-family: 'Montserrat', sans-serif;
    
    text-align: left;
    font-size: 15px;
    height: 40px;
    border-radius: 10px;
    border: none;
    padding-left: 15px;
    color: #01244E;
`
export const Button = styled.button`
    position: absolute;
    top:80%;
    left:50%;
    transform:translate(-50%, -50%);
    border: none;
    width: 150px;
    height: 35px;
    border-radius: 10px;
    font-size: 25px;
    color: #01244E;
    cursor: pointer;
`