import React from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'
import { breakpoint, borderRadius, lgrey, errorColor, fieldHMargin } from '../../../styles/theme'
import { fieldStatus as field } from '../../../constants'
import edit from '../../../images/edit.png'
import check from '../../../images/check.png'
import wrong from '../../../images/wrong.png'

const images = [edit, wrong, check]

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    border-radius: ${borderRadius};
    box-shadow: 0px 10px 20px ${lgrey};
    height: 75px;
    
    @media (min-width: ${breakpoint}) {
        height: 90px;
    }
`

const ErrorWrapper = styled.div`
    position: absolute;
    left: 0;
    bottom: 10px;
    margin-left: 10px;

    @media (min-width: ${breakpoint}) {
        margin-left: ${fieldHMargin};
    }
`

const ImageWrapper = styled.div`
    width: 16px;
    height: 16px;
    position: absolute;
    right: 16px;
    bottom: 16px;    
`

const Span = styled.span`
    color: ${errorColor};
`

export const Field = ({ fieldStatus, isValid, errorMessage, children}) => {

    let imageNumber = -1
    
    if(fieldStatus === field.beingEdited) {
        isValid ? imageNumber = 2 : imageNumber = 0
    } else if (fieldStatus === field.userLeftField && !isValid) {
        imageNumber = 1
    } else if (fieldStatus === field.userLeftField && isValid) {
        imageNumber = 2
    } 

    return (
        <Wrapper>
            {children}
            {(fieldStatus === field.userLeftField && !isValid) && 
                <ErrorWrapper>
                    <Span>{errorMessage}</Span>
                </ErrorWrapper>
            }
            {imageNumber > -1 &&
                <ImageWrapper>
                    <img src={images[imageNumber]} />
                </ImageWrapper>
            }
        </Wrapper>
    )
}

Field.propTypes = {
    errorMessage: PropTypes.string,
    fieldStatus: PropTypes.number,
    isValid: PropTypes.bool,
    children: PropTypes.object,
}
