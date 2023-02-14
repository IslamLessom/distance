import React from 'react'

//styled-components
import {
  Container,
  NameText,
  NameDescription,
  Instructions,
  InstructionBlocks,
  NumberInstruction,
  DescriptionInstruction,
  NumberContainer,
  DescriptionContainer
} from './Instruction.styled'

function Instruction() {
  return (
    <Container>
      <NameText>Интструкция к обучению</NameText>
      <NameDescription>То как вам следует действовать</NameDescription>
      <InstructionBlocks>
        <Instructions>
          <NumberContainer>
            <NumberInstruction>1</NumberInstruction>
          </NumberContainer>
          <DescriptionContainer>
            <DescriptionInstruction>Для того что бы принимать активное участие в дистанционном обучении , вам следует обратиться к своему куратору и попросить о том что бы он вам выдал доступ к сайту </DescriptionInstruction>
          </DescriptionContainer>
        </Instructions>
        <Instructions>
          <NumberContainer>
            <NumberInstruction>2</NumberInstruction>
          </NumberContainer>
          <DescriptionContainer>
            <DescriptionInstruction>Как выполняются задания . На сайте есть специально отведенная страница , где преподаватель публикует задания на день , вам лишь нужно скачать и выполнять </DescriptionInstruction>
          </DescriptionContainer>
        </Instructions>
        <Instructions>
          <NumberContainer>
            <NumberInstruction>3</NumberInstruction>
          </NumberContainer>
          <DescriptionContainer>
            <DescriptionInstruction>После выполнения заданий вам нужно отправить их преподавателю на определенной странице на сайте</DescriptionInstruction>
          </DescriptionContainer>
        </Instructions>
        <Instructions>
          <NumberContainer>
            <NumberInstruction>4</NumberInstruction>
          </NumberContainer>
          <DescriptionContainer>
            <DescriptionInstruction>Если у вас возникнут проблемы обращайтесь по номеру указанному в тех.поддержке </DescriptionInstruction>
          </DescriptionContainer>
        </Instructions>

      </InstructionBlocks>
    </Container>
  )
}

export default Instruction
