import React from 'react'

//styled-components
import {
  Actibe,
  Button,
  Container,
  Date,
  Description,
  DocumentCource,
  Telegram,
  Image,
  ContainerText,
  InfoBlock,
  ProgramBlock,
  Time,
  Work,
  Title,
  ContainerTextInfo
} from './ProgramPage.styled'

//images
import img from '../assets/images/program-one.png'

function ProgramPage() {
  const program = {
    id: 1,
    name: '“Общее образование в СПО: вариативные модели реализации”(25-ПК)',
    date: '02.02.2023',
    active: 'АКТИВНО',
    telegram: 'https://t.me/kppk11',
    documents: 'https://cloud.mail.ru/public/G5uC/YfccgkRNJ',
    works: 'https://cloud.mail.ru/public/jTbq/PqWB7JkvL',
    sledding: 'http://feosurdo.ru/load/obrazovatelnyj_process/raspisanie_zanjatij_doshkolnogo_otdelenija/3-1-0-64',
    contact: ''
  }
  return (
    <Container>
      <ProgramBlock>
        <Image src={img} />
        <ContainerText>
          <Date>Создано {program.date}</Date>
          <Description>{program.name}</Description>
          <Actibe>{program.active}</Actibe>
        </ContainerText>
      </ProgramBlock>
      
      <InfoBlock>
        <Title>Информация</Title>
        <ContainerTextInfo>
          <DocumentCource href={program.documents}>Документы на зачесление на курс</DocumentCource>
          <Telegram href={program.telegram}>Ссылка на чат в Telegram</Telegram>
          <Time href={program.sledding}>Расписание занятий</Time>
          <Work href={program.works}>Задания</Work>
          <Button href=''>Отправить задания</Button>
        </ContainerTextInfo>
      </InfoBlock>
    </Container>
  )
}

export default ProgramPage
