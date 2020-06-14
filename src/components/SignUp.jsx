import React from 'react'
import {Button} from './Button'
import { useState } from 'react'
import userData from '../data/userData'
import {LoginConsumer} from '../loginContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { StyledForm, StyledLabel, StyledInput, StyledSpanError } from './styles/StyledAuth'

function SignUp() {
    const [signUpForm, setSignUpForm] = useState({
        name: "",
        user: "",
        email: "",
        password: "",
    })

    const handleChange = (event) => {
        const {name, value} = event.target;
        setSignUpForm({...signUpForm, [name]: value})
        if (name === "user" || name === "email") {
            if (!checkAvailability(name, value)) {
                document.getElementById(`${name}Span`).style.display = "initial"
                
            }
            else {
                document.getElementById(`${name}Span`).style.display = "none"
            }
        }
    }
    const handleCheckPassword = (event) => {
        if (signUpForm.password !== event.target.value) {
            document.getElementById("repeatPasswordSpan").style.display = "initial"
            return false
        }
        else {
            document.getElementById("repeatPasswordSpan").style.display = "none"
            return true
        }
    }
    const checkAvailability = (prop, value) => {
        const users = userData.filter(user => user[prop] === value)
        if (users.length === 0) {
            return true
        }
        return false
    }

    return (
        <StyledForm>
        <StyledLabel htmlFor="name">
        Nombre completo
        <StyledInput name="name" type="text" onChange={handleChange}/>
        </StyledLabel>
        <StyledLabel htmlFor="user">
        Usuario
        <StyledInput name="user" type="text" onChange={handleChange}/>
        <StyledSpanError id="userSpan">El usuario ya existe</StyledSpanError>
        </StyledLabel>
        <StyledLabel htmlFor="email">
        Email
        <StyledInput name="email" type="email" onChange={handleChange}/>
        <StyledSpanError id="emailSpan">El correo ya está en uso</StyledSpanError>
        </StyledLabel>
        <StyledLabel htmlFor="password">
        Contraseña
        <StyledInput name="password" type="password" onChange={handleChange}/>
        </StyledLabel>
        <StyledLabel htmlFor="repeatPassword">
        Repetir contraseña
        <StyledInput name="repeatPassword" type="password" onChange={handleCheckPassword}/>
        <StyledSpanError id="repeatPasswordSpan">Las contraseñas no coinciden</StyledSpanError>
        </StyledLabel>
        <Button text="CREAR CUENTA" />
        <Link to="/signin">Ya tengo cuenta en Rented</Link>
    </StyledForm>
    )
}

export default SignUp