import React from 'react'
import styled from 'styled-components'
import colors from '../colors'
import {Button} from './Button'

const StyledForm = styled.form`
    background: ${colors.lightBlue};
    width: 15rem;
    border-radius: 3px;
    margin: 3vh auto;
    padding: 2vh 4vw;
`

const StyledLabel = styled.label`
display: flex;
flex-direction: column;
`

const StyledInput = styled.input`
    height: 2rem;
    margin-top: 0.3rem;
    margin-bottom: 3rem;
    border: 2px solid ${colors.green};
    background: rgba(78, 190, 158, 0.2);
    opacity: 0.7;
    border-radius: 3px;
    padding-left: 0.4rem;
    font-size: 1.07rem;
    color: ${colors.black};
    &:focus {
        background: rgba(78, 190, 158, 0.3);
        opacity: 1;
    }

`

export default function SignIn() {
    return (
        <StyledForm>
            <StyledLabel htmlFor="user">
            Username
            <StyledInput name="user" type="text" />
            </StyledLabel>
            <StyledLabel htmlFor="user">
            Password
            <StyledInput name="password" type="password" />
            </StyledLabel>
            <Button text="LOG IN" />
        </StyledForm>
    )
}