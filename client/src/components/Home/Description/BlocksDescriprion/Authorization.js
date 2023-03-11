import React from 'react'

//styled-components
import {
    Container,
    Title,
    BlockContent,
    TextContainer,
    Text,
    Description
} from './Authorization.styled'

function Authorization() {
    return (
        <Container>
            <Title>Авторизация</Title>
            <BlockContent>
                <TextContainer>
                    <Text>ЧТО ДЕЛАТЬ ?</Text>
                </TextContainer>
                <Description>Что бы начать пользоваться сайтом вам нужно обратиться к куратору ващего курса. Куратор выдаст логин и пароль</Description>
            </BlockContent>
        </Container>
    )
}

export default Authorization
