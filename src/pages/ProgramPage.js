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

  console.log(program)

  useEffect(() => {
    fetchOnePrograms(id).then(data => setProgram(data))
  }, [])
  return (
    <Container>
      <ProgramBlock>
        <Image src={program.images} />
        <ContainerText>
          <Date>Создано {program.date}</Date>
          <Description>{program.description}</Description>
          {program.active === 'Закрыта' ?
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
