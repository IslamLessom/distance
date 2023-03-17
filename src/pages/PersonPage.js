import React, { useState, useEffect, useContext } from 'react'

//mob-x
import { observer } from 'mobx-react-lite';

//components
import { check } from '../http/userAPI';

//context
import { Context } from './../index';

//route
import { NavLink } from 'react-router-dom';
import { CREATE_PROGRAM_ROUTE, TEACHER_ROUTE } from '../utils/consts';

//styledComponents
import {
  Profile,
  ProfileContainer,
  ProfileInfo,
  UserImage,
  UserTextInfo,
  UserText,
  InformationPanel,
  Title,
  InformationButton,
  ButtonContainer,
  AdminPanel
} from './PersonPage.styled'

const PersonPage = observer(() => {
  const [loading, setLoading] = useState(true)
  const [state, setState] = useState()
  const { user } = useContext(Context)
  //user-state
  const [name, setName] = useState()
  const [first_name, setFirst_name] = useState()
  const [father_name, setFather_name] = useState()
  const [group, setGroup] = useState()
  const [schedule, setSchedule] = useState()
  const [list_teacher, setList_teacher] = useState()
  const [images, setImages] = useState(null)
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [role, setRole] = useState()

  //check
  let getData = new Promise(function (resolve, reject) {
    let data = check(name, first_name, father_name, group, schedule, list_teacher, images, email, password, role)
    resolve(data)
  })

  useEffect(() => {
    getData.then(function (value) {
      setState(value)
    })
    check().then(data => {
      user.setUser(true)
      user.setIsAuth(true)
    }).finally(() => setLoading(false))
  }, [])

  if (loading) {
    return <h1 style={
      {
        textAlign: 'center',
        marginTop: '100px',
        fontSize: '40px'
      }
    }>Загрузка....</h1>
  }

  return (
    <Profile>
      <ProfileContainer>
        <ProfileInfo>
          {
            <>
              <UserImage src={state.images} />
              <UserText>
                <UserTextInfo>{state.first_name} {state.name} {state.father_name}</UserTextInfo>
                <UserTextInfo>Статус - {state.group}</UserTextInfo>
              </UserText>
            </>
          }

        </ProfileInfo>
        <InformationPanel>
          <Title>Информация</Title>
          <ButtonContainer>
            <InformationButton><NavLink style={{ textDecoration: 'none', color: '#274568' }} to={state.schedule}>Расписание занятий</NavLink></InformationButton>
            <InformationButton>Новости</InformationButton>
            <InformationButton><NavLink style={{ textDecoration: 'none', color: '#274568' }} to={state.list_teacher}>Преподаватели</NavLink></InformationButton>
          </ButtonContainer>
        </InformationPanel>
        {
          state.role === 'ADMIN' ?
            <>
              <AdminPanel>
                <Title>Админ панель</Title>
                <ButtonContainer>
                  <InformationButton><NavLink style={{ textDecoration: 'none', color: '#274568' }} to={CREATE_PROGRAM_ROUTE}>Добавить программу</NavLink></InformationButton>
                  <InformationButton><NavLink style={{ textDecoration: 'none', color: '#274568' }} to={TEACHER_ROUTE}>Добавить ученика</NavLink></InformationButton>
                  <InformationButton>Все ученики</InformationButton>
                </ButtonContainer>
              </AdminPanel>
            </>
            :
            <></>
        }
      </ProfileContainer>
    </Profile>
  )
})

export default PersonPage
