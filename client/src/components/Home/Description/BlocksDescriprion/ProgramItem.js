import React from 'react'

//router-dom
import { useNavigate } from 'react-router-dom';
import { PROGRAMS_ROUTE } from '../../../../utils/consts';

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
    const navigate = useNavigate()
    return (
        <ContainerText key={program.id} onClick={() => navigate(PROGRAMS_ROUTE + '/' + program.id)}>
            <Images src={programImg} />
            <DateCreate>Создано {program.date}</DateCreate>
            <DescriptionProgram>{program.name}</DescriptionProgram>
            <ActiveProgram>{program.active}</ActiveProgram>
        </ContainerText>
    )
}

export default ProgramItem
