import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const NavBar = ({ numberOfQuestions }) => {

    const items = []

    for(let i = 0; i < numberOfQuestions; i++) {
        items.push(
            <Link 
                key={i}
                to={`/question${i + 1}`}>
                    Question {i + 1}
            </Link>
        )
    }

    return (
        <nav>
            {items}
        </nav>
    )
}