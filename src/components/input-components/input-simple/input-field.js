import React from 'react'
import { PropTypes } from 'prop-types'
import { Wrapper, Label, Input } from '../common'

export const InputField = ({ 
        type,
        label, 
        text, 
        setFieldValue, 
    }) => {
    
    const handleChange = event => setFieldValue(event.target.value)
    
    return (
        <Wrapper>
            <Label>{label}</Label>
            <Input 
                name={label.toLowerCase()}
                type={type}
                value={text}                
                onChange={handleChange}
            /> 
        </Wrapper>
    )
}

InputField.propTypes = {
    type: PropTypes.string,
    label: PropTypes.string, 
    text: PropTypes.string, 
    setFieldValue: PropTypes.func.isRequired, 
}
