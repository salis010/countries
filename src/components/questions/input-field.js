import React, { useState } from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'
import { breakpoint, lgrey, dgrey, fieldHMargin } from '../../styles/theme'
import { fieldStatus } from '../../constants'


const Wrapper = styled.div`
    display: flex;
    flex-grow: 1;
    align-items: center;
    padding: 10px;

    @media (min-width: ${breakpoint}) {
        padding: ${fieldHMargin};
    }
`

const Label = styled.label`
    font-size: 1.2em;    
    color: ${lgrey};    

    @media (min-width: ${breakpoint}) {
        font-size: 1.6em;    
    }
`

const Input = styled.input`
    width: 100%;
    margin-left: 10px;
    text-indent: 10px;
    font-size: 1em;
    color: ${dgrey};    
    border-top: none;
    border-right: none;
    border-bottom: none;
    border-left: 1px solid ${lgrey};
    
    &:focus {
        outline: none;
    }

    @media (min-width: ${breakpoint}) {
        font-size: 1.6em;    
    }
`

export const InputField = ({ name, label, text, validator, setFormValue, isFormValid, setFormValid, checkFormValidity }) => {
    
    const handleChange = event => {
        const status = fieldStatus.beingEdited
        const isValid = validator(event.target.value)

        setFormValue({ 
            value: event.target.value,
            status: status,
            isValid: isValid,        
        })

        setFormValid(checkFormValidity())
    }

    const handleBlur = event => {
        const status = fieldStatus.userLeftField
        const isValid = validator(event.target.value)

        setFormValue({ 
            value: event.target.value, 
            status: status, 
            isValid: isValid, 
        })        

        setFormValid(checkFormValidity())
    }
    
    return (
        <Wrapper>
            <Label>{label}</Label>
            <Input 
                name={name}
                value={text}
                type='text'
                onChange={handleChange}
                onBlur={handleBlur}
            /> 
        </Wrapper>
    )
}

InputField.propTypes = {
    data: PropTypes.shape({
        isValid: PropTypes.bool.isRequired
    }),
    setFormValues: PropTypes.func,
    validator: PropTypes.func,
}
