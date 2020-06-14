import React from 'react'
import styled from 'styled-components'
import colors from '../colors'
import {Button} from './Button'
import { useState } from 'react'
import userData from '../data/userData'
import {LoginConsumer} from '../loginContext'
import { useContext } from 'react'

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
margin-bottom: 3rem;
`

const StyledInput = styled.input`
    height: 2rem;
    margin-top: 0.3rem;
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
const StyledSpanError = styled.span`
    display: none;
    font-size: 0.8rem;
    margin-top: 0.1rem;
    color: red;
`

export default function SignIn() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [login,setLogin] = useContext(LoginConsumer)

    const handleChange = (event) => {
        const {name, value} = event.target
        document.getElementById("spanUserError").style.display = "none"
        document.getElementById("spanPasswordError").style.display = "none"
        name === "username" ? setUsername(value) : setPassword(value)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        const user = getUserInfo(username);
        let success = false;
        if (user === undefined) {
            document.getElementById("spanUserError").style.display = "initial"
        }
        else {
            success = user.password === password ? true : false;
            if (!success) {
                document.getElementById("spanPasswordError").style.display = "initial"
            }
            else {
                setLogin(true)
                console.log("Login context is: ", login);
                
            }
        }
    }
    const getUserInfo = (username) => {
        const [user] = userData.filter(user => user.user === username)
        return user
    }

    return (
        <StyledForm onSubmit={handleSubmit}>
            <StyledLabel htmlFor="username">
            Username
            <StyledInput name="username" type="text" onChange={handleChange}/>
            <StyledSpanError id="spanUserError">El usuario no existe</StyledSpanError>
            </StyledLabel>
            <StyledLabel htmlFor="password">
            Password
            <StyledInput name="password" type="password" onChange={handleChange}/>
            <StyledSpanError id="spanPasswordError">Contraseña incorrecta</StyledSpanError>
            </StyledLabel>
            <Button text="LOG IN" />
        </StyledForm>
    )
}