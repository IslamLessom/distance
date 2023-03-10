import React, { useState, useEffect } from 'react'

//react-router
import { useParams } from 'react-router-dom'

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

//components
import { fetchOnePrograms } from '../http/programAPI'

function ProgramPage() {
  const [program, setProgram] = useState({ info: [] })
  const { id } = useParams()

  useEffect(() => {
    fetchOnePrograms(id).then(data => setProgram(data))
  }, [])
  console.log(program)
  return (
    <Container>
      <ProgramBlock>
        <Image src={process.env.REACT_APP_API_URL + program.images} />
        <ContainerText>
          <Date>Создано {program.date.split('T')[0]}</Date>
          <Description>{program.description}</Description>
          {program.active === 'Закрыто' ?
            <Actibe style={{ background: '#E8407C' }}>{program.active}</Actibe>
            :
            <Actibe>{program.active}</Actibe>
          }

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
