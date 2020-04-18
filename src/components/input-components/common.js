import styled from 'styled-components'
import { breakpoint, lgrey, dgrey, fieldHMargin } from '../../styles/theme'

export const Wrapper = styled.div`
    display: flex;
    flex-grow: 1;
    align-items: center;
    padding: 10px;

    @media (min-width: ${breakpoint}) {
        padding: 0 ${fieldHMargin};
    }
`

export const Label = styled.label`
    font-size: 1.2em;    
    color: ${lgrey};    

    @media (min-width: ${breakpoint}) {
        font-size: 1.6em;    
    }
`

export const Input = styled.input`
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
