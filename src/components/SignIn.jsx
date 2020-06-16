import React from 'react'
import { useState } from 'react'
import userData from '../data/userData'
import {LoginConsumer} from '../loginContext'
import { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import {StyledButton} from './styles/StyledButton'
import { StyledForm, StyledLabel, StyledInput, StyledSpanError } from './styles/StyledAuth'

export default function SignIn() {
    const [user, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [,setLogin, , setUserLog] = useContext(LoginConsumer)
    const history = useHistory()

    const handleChange = (event) => {
        const {name, value} = event.target
        document.getElementById("spanUserError").style.display = "none"
        document.getElementById("spanPasswordError").style.display = "none"
        name === "user" ? setUsername(value) : setPassword(value)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        const tempUser = getUserInfo("user",user);
        let success = false;
        if (tempUser === undefined) {
            document.getElementById("spanUserError").style.display = "initial"
        }
        else {
            success = tempUser.password === password ? true : false;
            if (!success) {
                document.getElementById("spanPasswordError").style.display = "initial"
            }
            else {
                setLogin(true)
                setUserLog(tempUser)
                history.push("/")
            }
        }
    }
    const getUserInfo = (propToSearch, value) => {
        const [tempUser] = userData.filter(element => element[propToSearch] === value)
        return tempUser
    }

    return (
        <StyledForm onSubmit={handleSubmit}>
            <StyledLabel htmlFor="user">
            Username
            <StyledInput name="user" type="text" onChange={handleChange}/>
            <StyledSpanError id="spanUserError">El usuario no existe</StyledSpanError>
            </StyledLabel>
            <StyledLabel htmlFor="password">
            Password
            <StyledInput name="password" type="password" onChange={handleChange}/>
            <StyledSpanError id="spanPasswordError">Contraseña incorrecta</StyledSpanError>
            </StyledLabel>
            <StyledButton primary>LOG IN</StyledButton>
            <Link to="/signup">¿No tienes cuenta en Rented?</Link>
        </StyledForm>
    )
}