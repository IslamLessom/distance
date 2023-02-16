import React from 'react'

//images
import programImg from '../../../../assets/images/program-one.png'

//styled-components
import {
    Images,
    DateCreate,
    DescriptionProgram,
    ActiveProgram,
    ContainerText
} from './Programs.style'

const ProgramItem = ({ program }) => {
    return (
        <ContainerText key={program.id}>
            <Images src={programImg} />
            <DateCreate>Создано {program.date}</DateCreate>
            <DescriptionProgram>{program.name}</DescriptionProgram>
            <ActiveProgram>{program.active}</ActiveProgram>
        </ContainerText>
    )
}

export default ProgramItem
