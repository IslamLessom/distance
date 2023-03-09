import React, { useState, useContext } from 'react'

//components
import { registration } from './../http/userApi';
import { Context } from './../index';
//mob-x
import { observer } from 'mobx-react-lite';

//route
import { NavLink } from 'react-router-dom'

//styled-components
import {
    Container,
    AuthBlock,
    Tittle,
    ContainerInput,
    Input,
    Select,
    Button,
    InputImages
} from './CreateUser.styled'


const CreateUser = observer(() => {
    const { user } = useContext(Context)

    //user-state
    const [name, setName] = useState()
    const [first_name, setFirst_name] = useState()
    const [father_name, setFather_name] = useState()
    const [group, setGroup] = useState()
    const [schedule, setSchedule] = useState()
    const [list_teacher, setList_teacher] = useState()
    const [images, setImages] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [role, setRole] = useState()

    const signIn = async () => {
        let data
        data = await registration(name, first_name, father_name, group, schedule, list_teacher, images, email, password, role)
        user.setIsAuth(true)
    }

    return (
        <Container>
            <AuthBlock>
                <Tittle>Добавить ученика в систему</Tittle>
                <ContainerInput>
                    <Input
                        type='text'
                        placeholder='Фамилия'
                        onChange={e => setFirst_name(e.target.value)}
                    />
                    <Input
                        type='text'
                        placeholder='Имя'
                        onChange={e => setName(e.target.value)}
                    />
                    <Input
                        type='text'
                        placeholder='Отчество'
                        onChange={e => setFather_name(e.target.value)}
                    />
                    <Select onChange={e => setGroup(e.target.value)}>
                        <option disabled>Выберите группу</option>
                        <option value='3-ИСиП-4'>3-ИСиП-4</option>
                        <option value='4-ИСиП-3'>4-ИСиП-3</option>
                        <option value='5-ИСиП-2'>5-ИСиП-2</option>
                        <option value='6-ИСиП-1'>6-ИСиП-1</option>
                    </Select>
                    <Input
                        type='text'
                        placeholder='Фото URL'
                        onChange={e => setImages(e.target.value)}
                    />
                    <Input
                        type='text'
                        placeholder='Список учителей'
                        onChange={e => setList_teacher(e.target.value)}
                    />
                    <Input
                        type='text'
                        placeholder='Рассписание занятий'
                        onChange={e => setSchedule(e.target.value)}
                    />
                    <Input
                        type='text'
                        placeholder='Почта'
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Input
                        type='password'
                        placeholder='Пароль'
                        onChange={e => setPassword(e.target.value)}
                    />
                    <Select onChange={e => setRole(e.target.value)}>
                        <option disabled>Выберите роль</option>
                        <option value='USER'>USER</option>
                        <option value='ADMIN'>ADMIN</option>
                    </Select>
                </ContainerInput>

                <Button onClick={signIn}><NavLink style={{ textDecoration: 'none', color: 'black' }}>СОЗДАТЬ</NavLink></Button>
            </AuthBlock>
        </Container>
    )
})

export default CreateUser
