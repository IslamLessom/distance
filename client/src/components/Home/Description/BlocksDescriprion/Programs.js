import React, { useContext, useEffect } from 'react'
import { Context } from '../../../..'

//mobx
import { observer } from 'mobx-react-lite'

//styled-components
import {
    Container,
    ProgramBlocks,
    Program,
    Title,
} from './Programs.style'
import ProgramItem from './ProgramItem'
import { fetchPrograms } from '../../../../http/programAPI'
import { NavLink } from 'react-router-dom'
import { CREATE_PROGRAM_ROUTE } from '../../../../utils/consts'

const Programs = observer(() => {
    const { program } = useContext(Context)
    
    useEffect(() => {
        fetchPrograms().then(data => program.setPrograms(data.rows))
    }, [])

    console.log(program.programs)
    return (
        <Container>
            <Title>Программы обучения</Title>
            <ProgramBlocks>
                
                {program.programs.map(program =>
                    <Program key={program.id}>
                        <ProgramItem key={program.id} program={program} />
                    </Program>
                )}
            </ProgramBlocks>
        </Container>
    )
})

export default Programs


