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

const ProgramCreate = observer(() => {
  const { program } = useContext(Context)
  const [images, setImages] = useState(null)
  const [name, setName] = useState('')
  const [date, setDate] = useState()
  const [active, setActive] = useState()
  const [document, setDocument] = useState()
  const [telegram, setTelegram] = useState()
  const [schedule, setSchedule] = useState()
  const [work, setWork] = useState()
  const [info, setInfo] = useState([])

  const changeInfo = (key, value, number) => {
    setInfo(info.map(i => i.number === number ? { ...i, [key]: value } : i))
  }

  const selectFile = e => {
    setImages(e.target.files[0])
  }

  const addProgram = () => {
    const formData = new FormData()
    formData.append('images', images)
    formData.append('description', name)
    formData.append('date', date)
    formData.append('active', active)
    formData.append('document', document)
    formData.append('telegram', telegram)
    formData.append('schedule', schedule)
    formData.append('work', work)
    console.log(formData)
  }



  return (
    <Container>
      <Title>Создать программу</Title>
      <Form>
        <ImagesInput onChange={selectFile} type='file' />
        <Input onChange={(e) => setName(e.target.value)} value={name} placeholder='Введите название программы' />
        <Input onChange={(e) => setDate(e.target.value)} value={date} type='date' placeholder='Введите дату создания' />
        <Select onChange={(e) => setActive(e.target.value)} value={active} >
          <Option disabled>Выберите действительность программы</Option>
          <Option value='Активна'>Активна</Option>
          <Option value='Закрыта'>Закрыта</Option>
        </Select>
        <Input onChange={(e) => changeInfo('document', e.target.value)} value={document} type='text' placeholder='Введите ссылку на список документов для зачисление на курс ' />
        <Input onChange={(e) => changeInfo('telegram', e.target.value)} value={telegram} type='text' placeholder='Введите ссылку на телеграмм канал' />
        <Input onChange={(e) => changeInfo('schedule', e.target.value)} value={schedule} type='text' placeholder='Введите ссылку на рассписание занятий' />
        <Input onChange={(e) => changeInfo('work', e.target.value)} value={work} type='text' placeholder='Введите ссылку на задания' />
      </Form>
      <ButtonContainer>
        <ButtonExit><NavLink style={{ textDecoration: 'none', color: 'white' }} to={HOME_AUTH_ROUTE}>Выйти</NavLink></ButtonExit>
        <ButtonAdd onClick={addProgram}><NavLink style={{ textDecoration: 'none', color: 'white' }} to='#'>Добавить</NavLink></ButtonAdd>
      </ButtonContainer>
    </Container>
  )
})

export default ProgramCreate
