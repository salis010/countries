import React from 'react'
import PropTypes from 'prop-types'
import { Field } from './field'
import { InputField } from './input-field'

export const Input = ({
        type,
        fieldStatus,
        isValid,
        errorMessage,
        name,
        label,
        text,
        validator,
        setFieldValue,
        isFormValid,
    }) => 
        <Field
            fieldStatus={fieldStatus}
            isValid={isValid}
            errorMessage={errorMessage}
        >
            <InputField
                type={type}
                name={name}
                label={label}
                text={text}
                validator={validator}
                setFieldValue={setFieldValue}
                isFormValid={isFormValid}
            />
        </Field>

Input.propTypes = {
    type: PropTypes.string,
    setFormValues: PropTypes.func,
    name: PropTypes.string, 
    label: PropTypes.string, 
    text: PropTypes.string, 
    validator: PropTypes.func, 
    setFieldValue: PropTypes.func, 
    errorMessage: PropTypes.string,
    fieldStatus: PropTypes.number,
    isValid: PropTypes.bool,
}
