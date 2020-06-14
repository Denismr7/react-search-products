import React from 'react'
import styled from 'styled-components'
import colors from '../colors'

const StyledButton = styled.button`
    background: ${colors.blue};
    border: 2px solid ${colors.blue};
    color: whitesmoke;
    font-weight: bold;
    border-radius: 3px;
    padding: 0.7rem 2rem;
    width: 100%;
    cursor: pointer;
`

export const Button = (props) => {
    return (
        <StyledButton onClick={props.onClick}>{props.text}</StyledButton>
    )
}