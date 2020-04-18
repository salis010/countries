import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Wrapper } from './common'


const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 95%;

    @media (min-width: 40rem) {
        width: 80%;
    }

    @media (min-width: 60rem) {
        width: 50%;
    }
`

const H2 = styled.h1`
    font-size: 1.8rem;

    @media (min-width: 60rem) {
        font-size: 2.4rem;
    }
`

export const Question = ({ questionNumber, children }) => 
    <Wrapper>
        <ContentWrapper>
            <H2>Question {questionNumber}</H2>
            {children}
        </ContentWrapper>
    </Wrapper>
    
Question.propTypes = {
    questionNumber: PropTypes.number,
}
