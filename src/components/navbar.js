import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Header = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #e51574;
`

const Nav = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    @media (min-width: 40rem) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (min-width: 60rem) {
        grid-template-columns: repeat(6, 1fr);
    }
`

const HeaderLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10rem;
    height: 3rem;
    font-weight: 800;
    color: white;
    text-decoration: none;

    &:hover {        
        background-color: #67315f;
        text-decoration: none;
    }

    &:focus, &:visited, &:link, &:active {
        text-decoration: none;
    }

    @media (min-width: 60rem) {
        grid-template-columns: repeat(6, 1fr);
        height: 6rem;
    }
`


export const NavBar = ({ numberOfQuestions }) => {

    const items = []

    for(let i = 0; i < numberOfQuestions; i++) {
        items.push(
            <HeaderLink 
                key={i}
                to={`/question${i + 1}`}>
                    QUESTION {i + 1}
            </HeaderLink>
        )
    }

    return (
        <Header>
            <Nav>
                {items}
            </Nav>
        </Header>   
    )
}

NavBar.propTypes = {
    numberOfQuestions: PropTypes.number.isRequired,
}
