import React, { useState, useContext } from 'react'

//components
import { login, registration } from './../http/userApi';
import { Context } from './../index';
//mob-x
import { observer } from 'mobx-react-lite';

//route
import { NavLink, useNavigate } from 'react-router-dom'
import { HOME_AUTH_ROUTE } from '../utils/consts'

//styled-components
import {
    Container,
    AuthBlock,
    Tittle,
    ContainerInput,
    Input,
    Button
} from './CreateUser.styled'


const CreateUser = observer(() => {
    const navigate = useNavigate()
    const { user } = useContext(Context)

    //user-state
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const signIn = async () => {
        try {
            let data
            data = await registration( email, password)
            user.setUser(user)
            user.setIsAuth(true)
        } catch (e) {
            alert('Ошибка')
        }
    }

    return (
        <Container>
            <AuthBlock>
                <Tittle>Добавить ученика в систему</Tittle>
                <ContainerInput>
                    
                    <Input
                        type='text'
                        placeholder='Почта'
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Input
                        type='text'
                        placeholder='Пароль'
                        onChange={e => setPassword(e.target.value)}
                    />
                    
                </ContainerInput>

                <Button onClick={signIn}><NavLink style={{ textDecoration: 'none', color: 'black' }}>СОЗДАТЬ</NavLink></Button>
            </AuthBlock>
        </Container>
    )
})

export default CreateUser
