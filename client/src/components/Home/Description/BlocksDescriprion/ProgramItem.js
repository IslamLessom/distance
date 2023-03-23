
import React, { useContext, useState } from 'react'
import { Context } from '../../../../index';

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
    const { user } = useContext(Context)
    const navigate = useNavigate()

    return (
        <>
            {user.isAuth ?
                <ContainerText key={program.id} onClick={() => navigate(PROGRAMS_ROUTE + '/' + program.id)} >
                    <Images src={program.images} />
                    <div style={{ paddingLeft: '25px' }}>
                        <DateCreate>Создано {program.date.split('T', 1)}</DateCreate>
                        <DescriptionProgram>{program.description}</DescriptionProgram>
                        {program.active === 'Закрыта' ?
                            <ActiveProgram style={{ background: '#E8407C' }}>{program.active}</ActiveProgram>
                            :
                            <ActiveProgram>{program.active}</ActiveProgram>
                        }
                    </div>

                </ContainerText>
                :
                <ContainerText key={program.id}>
                    <Images src={program.images} />
                    <div style={{ paddingLeft: '25px' }}>
                        <DateCreate>Создано {program.date.split('T', 1)}</DateCreate>
                        <DescriptionProgram>{program.description}</DescriptionProgram>
                        {program.active === 'Закрыто' ?
                            <ActiveProgram style={{ background: '#E8407C' }}>{program.active}</ActiveProgram>
                            :
                            <ActiveProgram>{program.active}</ActiveProgram>
                        }
                    </div>
                </ContainerText>
            }
        </>


    )
}

export default ProgramItem
