import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const H2 = styled.h1`
    font-size: 2.4rem;
`

export const Question = ({ questionNumber, children }) => 
    <Wrapper>
        <H2>Question {questionNumber}</H2>
        {children}
    </Wrapper>
    