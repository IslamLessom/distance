
import React from 'react'

//route
import { useNavigate } from 'react-router-dom';
import { LOGIN_ROUTE } from '../../utils/consts';

//styled-components
import {
  Container,
  LeftContainer,
  NameBigText,
  NameSmallText,
  Description,
  Button,
  RightContainer,
} from './Preview.styled';

function Preview() {
  const navigate = useNavigate()
  return (
    <Container>
      <LeftContainer>
        <NameBigText>Дистанционное обучение</NameBigText>
        <NameSmallText>учись там , где удобно</NameSmallText>
        <Description>
          Здесь вы сможете пройти курсы повышения квалификации ,
          а также выполнять задания от ваших преподавателей .
          Каждому пользователю , кто учится или проходит курсы повышения
          квалификации , будут выдавать пароли и логины .
          Если вы не являетесь студентами КППК , то доступ будет ограничен
        </Description>
        <Button onClick={() => navigate(LOGIN_ROUTE)}>ОБУЧАТЬСЯ</Button>
      </LeftContainer>
      <RightContainer>
      </RightContainer>
    </Container>
  )
}

export default Preview
