import React from 'react'
import { PropTypes } from 'prop-types'
import { fieldStatus } from '../../../constants'
import { Wrapper, Label, Input } from '../common'


export const InputField = ({ 
        type,
        name, 
        label, 
        text, 
        validator, 
        setFieldValue, 
    }) => {
    
    const handleChange = event => {
        const status = fieldStatus.beingEdited
        const isValid = validator(event.target.value)

        setFieldValue({ 
            value: event.target.value,
            status: status,
            isValid: isValid,        
        })

    }

    const handleBlur = event => {
        const status = fieldStatus.userLeftField
        const isValid = validator(event.target.value)

        setFieldValue({ 
            value: event.target.value, 
            status: status, 
            isValid: isValid, 
        })        

    }
    
    return (
        <Wrapper>
            <Label>{label}</Label>
            <Input 
                type={type}
                name={name}
                value={text}                
                onChange={handleChange}
                onBlur={handleBlur}
            /> 
        </Wrapper>
    )
}

InputField.propTypes = {
    type: PropTypes.string,
    setFormValues: PropTypes.func,
    validator: PropTypes.func,
    name: PropTypes.string, 
    label: PropTypes.string, 
    text: PropTypes.string, 
    validator: PropTypes.func, 
    setFieldValue: PropTypes.func, 
}
