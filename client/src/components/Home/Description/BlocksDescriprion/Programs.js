import React from 'react'

//images
import program from '../../../../assets/images/program-one.png'

//styled-components
import {
    Container,
    ProgramBlocks,
    Program,
    Images,
    DateCreate,
    DescriptionProgram,
    ActiveProgram,
    Title,
    ContainerText
} from './Programs.style'

function Programs() {
    return (
        <Container>
            <Title>Программы обучения</Title>
            <ProgramBlocks>
                <Program>
                    <Images src={program} />
                    <ContainerText>
                        <DateCreate>Создано 02.02.2023</DateCreate>
                        <DescriptionProgram>“Общее образование в СПО: вариативные модели реализации”(25-ПК)</DescriptionProgram>
                        <ActiveProgram>АКТИВНО</ActiveProgram>
                    </ContainerText>
                </Program>

                <Program>
                    <Images src={program} />
                    <ContainerText>
                        <DateCreate>Создано 02.02.2023</DateCreate>
                        <DescriptionProgram>“Общее образование в СПО: вариативные модели реализации”(25-ПК)</DescriptionProgram>
                        <ActiveProgram>АКТИВНО</ActiveProgram>
                    </ContainerText>
                </Program>

                <Program>
                    <Images src={program} />
                    <ContainerText>
                        <DateCreate>Создано 02.02.2023</DateCreate>
                        <DescriptionProgram>“Общее образование в СПО: вариативные модели реализации”(25-ПК)</DescriptionProgram>
                        <ActiveProgram>АКТИВНО</ActiveProgram>
                    </ContainerText>
                </Program>

                <Program>
                    <Images src={program} />
                    <ContainerText>
                        <DateCreate>Создано 02.02.2023</DateCreate>
                        <DescriptionProgram>“Общее образование в СПО: вариативные модели реализации”(25-ПК)</DescriptionProgram>
                        <ActiveProgram>АКТИВНО</ActiveProgram>
                    </ContainerText>
                </Program>

                <Program>
                    <Images src={program} />
                    <ContainerText>
                        <DateCreate>Создано 02.02.2023</DateCreate>
                        <DescriptionProgram>“Общее образование в СПО: вариативные модели реализации”(25-ПК)</DescriptionProgram>
                        <ActiveProgram>АКТИВНО</ActiveProgram>
                    </ContainerText>
                </Program>

                <Program>
                    <Images src={program} />
                    <ContainerText>
                        <DateCreate>Создано 02.02.2023</DateCreate>
                        <DescriptionProgram>“Общее образование в СПО: вариативные модели реализации”(25-ПК)</DescriptionProgram>
                        <ActiveProgram>АКТИВНО</ActiveProgram>
                    </ContainerText>
                </Program>
            </ProgramBlocks>
        </Container>
    )
}

export default Programs


