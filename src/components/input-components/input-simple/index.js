import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { InputField } from './input-field'
import { breakpoint, borderRadius, lgrey } from '../../../styles/theme'

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    height: 80px;
    border-radius: ${borderRadius};
    box-shadow: 0px 10px 20px ${lgrey};

    @media (min-width: ${breakpoint}) {
        height: 90px;
    }
`

export const InputSimple = ({
        type,
        name,
        label,
        text,
        setFieldValue,
    }) => 
        <Wrapper>
            <InputField
                type={type}
                name={name}
                label={label}
                text={text}
                setFieldValue={setFieldValue}
            />
        </Wrapper>

InputSimple.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string, 
    label: PropTypes.string, 
    text: PropTypes.string, 
    setFieldValue: PropTypes.func, 
}
