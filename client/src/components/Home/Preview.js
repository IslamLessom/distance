import React from 'react'

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
  return (
    <Container>
      <LeftContainer>
        <NameBigText>Дистанционное обучение</NameBigText>
        <NameSmallText>учись - там где удобно</NameSmallText>
        <Description>
          Здесь вы сможете пройти курсы повыщения квалификации ,
          а так-же выполнять задания от ващих преподавателей .
          Каждому пользователю кто учится или проходит курсы повыщения
          квалификации будут выдавать пароли и логины .
          Если вы не являетесь учениками КППК , то доступ будет ограничен
        </Description>
        <Button>ОБУЧАТЬСЯ</Button>
      </LeftContainer>
      <RightContainer>
      </RightContainer>
    </Container>
  )
}

export default Preview