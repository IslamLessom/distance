import React, { useContext } from 'react'
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

const Programs = observer(() => {
    const { program } = useContext(Context)

    return (
        <Container>
            <Title>Программы обучения</Title>
            <ProgramBlocks>
                {program.programs.map(program =>
                    <Program>
                        <ProgramItem key={program.id} program={program} />
                    </Program>
                )}
            </ProgramBlocks>
        </Container>
    )
})

export default Programs


