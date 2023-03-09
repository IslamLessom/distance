import styled from 'styled-components';

export const Container = styled.div`
    text-align: center;
    background: #2C2E5E;
    width: 60%;
    margin-left: auto;
    margin-right: auto;
    height: 90%;
    border-radius: 10px;
    position: relative;
    margin-top: 30px;
    margin-bottom: 80px;
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
    margin-top: 30px;
    height: 780px;
`
export const Input = styled.input`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap');
    font-family: 'Montserrat', sans-serif;
    
    text-align: left;
    font-size: 22px;
    height: 40px;
    border-radius: 10px;
    border: none;
    margin-bottom: 30px;
    padding-left: 15px;
    color: #01244E;
`

export const InputImages = styled.input`
    ::-webkit-file-upload-button {
        visibility: hidden;
    }

    ::before  {
        content: 'Выберите фото';
        display: inline-block;
        background: white;
        margin-bottom: 30px;
        border-radius: 3px;
        padding: 5px 8px;
        outline: none;
        white-space: nowrap;
        -webkit-user-select: none;
        cursor: pointer;
        text-shadow: 1px 1px #fff;
        font-weight: 700;
        font-size: 14pt;
        color: #01244E;
    }

    :hover::before {
        border-color: black;
    }

    :active::before {
        background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9)
    }
`
export const Select = styled.select`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap');
    font-family: 'Montserrat', sans-serif;
    
    text-align: left;   
    font-size: 22px;
    height: 40px;
    border-radius: 10px;
    border: none;
    margin-bottom: 30px;
    padding-left: 15px;
    color: #01244E;
`

export const Button = styled.button`
    position: absolute;
    bottom: 0;
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