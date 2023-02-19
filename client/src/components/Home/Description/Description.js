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

//router-dom
import {
    INSTRUCTION_ROUTE,
    PROGRAMS_ROUTE,
    SETTING_AUTH_ROUTE
} from '../../../utils/consts'

import { useNavigate } from 'react-router-dom';

function Description() {
    const navigate = useNavigate()
    return (
        <>
            <Container>
                <Blocks>
                    <Block onClick={() => navigate(INSTRUCTION_ROUTE)}>
                        <Image src={setting} />
                        <Name>Инструкция</Name>
                        <Descriptions>Перейти к инструкции</Descriptions>
                    </Block>
                    <Block onClick={() => navigate(SETTING_AUTH_ROUTE)}>
                        <Image src={authorization} />
                        <Name>Авторизация</Name>
                        <Descriptions>Перейти к авторизации</Descriptions>
                    </Block>
                    <Block onClick={() => navigate(PROGRAMS_ROUTE)}>
                        <Image src={program} />
                        <Name>Программы</Name>
                        <Descriptions>Перейти к программам</Descriptions>
                    </Block>
                </Blocks>
            </Container>
        </>
    )
}

export default Description
