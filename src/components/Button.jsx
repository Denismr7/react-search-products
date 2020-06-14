import React from 'react'
import {StyledButton} from './styles/StyledButton'

export const Button = (props) => {
    return (
        <StyledButton onClick={props.onClick}>{props.text}</StyledButton>
    )
}