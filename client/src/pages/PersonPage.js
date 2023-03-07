import React from 'react'

//image
import user from '../assets/images/user_test.jfif'

//route
import { NavLink } from 'react-router-dom';
import { TEACHER_ROUTE } from '../utils/consts';
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

function PersonPage() {
  return (
    <Profile>
      <ProfileContainer>
        <ProfileInfo>
          <UserImage src={user} />
          <UserText>
            <UserTextInfo>Ислам Гасанов</UserTextInfo>
            <UserTextInfo>Статус - Студент</UserTextInfo>
            <UserTextInfo>Группа - 4-ИСиП-3</UserTextInfo>
            <UserTextInfo>Куратор - Узлипат К.М</UserTextInfo>
          </UserText>
        </ProfileInfo>
        <InformationPanel>
          <Title>Информация</Title>
          <ButtonContainer>
            <InformationButton>Расписание занятий</InformationButton>
            <InformationButton>Новости</InformationButton>
            <InformationButton>Преподаватели</InformationButton>
          </ButtonContainer>
        </InformationPanel>
        <AdminPanel>
          <Title>Админ панель</Title>
          <ButtonContainer>
            <InformationButton>Добавить программу</InformationButton>
            <InformationButton><NavLink  style={{ textDecoration: 'none', color: '#274568' }} to={TEACHER_ROUTE}>Добавить ученика</NavLink></InformationButton>
            <InformationButton>Все ученики</InformationButton>
          </ButtonContainer>
        </AdminPanel>
      </ProfileContainer>
    </Profile>
  )
}

export default PersonPage
