import React from 'react'

//images
import setting from '../../../assets/images/settings.png'
import authorization from '../../../assets/images/password.png'
import program from '../../../assets/images/program.png'

//styled-components
import {
    Container,
    Block,
    Image,
    Name,
    Descriptions,
    Blocks
} from './Description.styled'
import Instruction from './BlocksDescriprion/Instruction'

function Description() {
    return (
        <>
            <Container>
                <Blocks>
                    <Block>
                        <Image src={setting} />
                        <Name>Инструкция</Name>
                        <Descriptions>Перейти к инструкции</Descriptions>
                    </Block>
                    <Block>
                        <Image src={authorization} />
                        <Name>Авторизация</Name>
                        <Descriptions>Перейти к авторизации</Descriptions>
                    </Block>
                    <Block>
                        <Image src={program} />
                        <Name>Программы</Name>
                        <Descriptions>Перейти к программам</Descriptions>
                    </Block>
                </Blocks>


            </Container>
            <Instruction/>
        </>
    )
}

export default Description
