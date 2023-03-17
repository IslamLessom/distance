import React, { useContext, useState } from 'react'

//context
import { Context } from '..';

//observer
import { observer } from 'mobx-react-lite';

//route
import { NavLink } from 'react-router-dom'
import { HOME_AUTH_ROUTE } from './../utils/consts';

//styled-components
import {
  Container,
  Form,
  ImagesInput,
  Input,
  Select,
  Title,
  Option,
  ButtonContainer,
  ButtonExit,
  ButtonAdd
} from './ProgramCreate.styled'

//components
import { createPrograms } from './../http/userAPI';

const ProgramCreate = observer(() => {
  const { program } = useContext(Context)

  const [images, setImages] = useState()
  const [date, setDate] = useState()
  const [description, setDescription] = useState()
  const [active, setActive] = useState()

  const [info, setInfo] = useState([])

  const [document, setDocument] = useState()
  const [telegram, setTelegram] = useState()
  const [schedule, setSchedule] = useState()
  const [work, setWork] = useState()

  const addProgram = async () => {
    let data
    data = await createPrograms(images, date, description, active, info[{ document, telegram, schedule, work }])
    console.log(data)
  }

  return (
    <Container>
      <Title>Создать программу</Title>
      <Form>
        <Input value={images} onChange={(e) => setImages(e.target.value)} placeholder="Введите ulr фотографии" type='text' />
        <Input value={description} onChange={(e) => setDescription(e.target.value)} placeholder='Введите название программы' />
        <Input value={date} onChange={(e) => setDate(e.target.value)} type='date' placeholder='Введите дату создания' />
        <Select value={active} onChange={(e) => setActive(e.target.value)} >
          <Option disabled>Выберите действительность программы</Option>
          <Option value='Активна'>Активна</Option>
          <Option value='Закрыта'>Закрыта</Option>
        </Select>
        <Input value={document} onChange={(e) => setDocument(e.target.value)} placeholder="Введите ссылку на документы для зачисления" type='text' />
        <Input value={telegram} onChange={(e) => setTelegram(e.target.value)} placeholder='Введите ссылку на телеграм' />
        <Input value={schedule} onChange={(e) => setSchedule(e.target.value)} type='text' placeholder='Введите ссылку на расписание' />
        <Input value={work} onChange={(e) => setWork(e.target.value)} type='text' placeholder='Введите ссылку на задания' />
      </Form>
      <ButtonContainer>
        <ButtonExit><NavLink style={{ textDecoration: 'none', color: 'white' }} to={HOME_AUTH_ROUTE}>Выйти</NavLink></ButtonExit>
        <ButtonAdd onClick={addProgram}><NavLink style={{ textDecoration: 'none', color: 'white' }} to='#'>Добавить</NavLink></ButtonAdd>
      </ButtonContainer>
    </Container>
  )
})

export default ProgramCreate
