import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
`

export const Form = styled.form`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1rem;

    @media (min-width: 60rem) {
        grid-gap: 2rem;
        margin-top: 2rem;
    }
`

export const Button = styled.button`
    font-size: 1.4rem;
    font-weight: 800;
    width: 100%;
    height: 3rem;
    color: white;
    background-color: ${props => props.disabled ? 'RGB(180, 180, 180)' : '#67315f'};
    border: none;
    border-radius: 60rem;
    outline: none;
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};

    @media (min-width: 60rem) {
        grid-gap: 2rem;
        height: 5rem;
        margin-top: 2rem;
    }
`
