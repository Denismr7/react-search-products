import React from 'react'
import {Button} from './Button'
import { useState } from 'react'
import userData from '../data/userData'
import {LoginConsumer} from '../loginContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { StyledForm, StyledLabel, StyledInput, StyledSpanError } from './styles/StyledAuth'

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
            <Link to="/signup">¿No tienes cuenta en Rented?</Link>
        </StyledForm>
    )
}