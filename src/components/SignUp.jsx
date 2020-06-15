import React from 'react'
import {StyledButton} from './styles/StyledButton'
import { useState } from 'react'
import userData from '../data/userData'
import {LoginConsumer} from '../loginContext'
import { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { StyledForm, StyledLabel, StyledInput, StyledSpanError } from './styles/StyledAuth'

function SignUp() {
    const [signUpForm, setSignUpForm] = useState({
        userId: userData.length + 1,
        name: "",
        user: "",
        email: "",
        password: "",
    })
    const [repeatPassword, setRepeatPassword] = useState("")
    const history = useHistory()
    const [,setLogin] = useContext(LoginConsumer)
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
    const checkPassword = (password, repeatPassword) => {
        if (password === repeatPassword) {
            document.getElementById("repeatPasswordSpan").style.display = "none"
            return true
        }
        else {
            document.getElementById("repeatPasswordSpan").style.display = "initial"
            return false
        }
    }
    const handleRepeatPassword = (event) => {
        const {value} = event.target;
        setRepeatPassword(value)
    }
    const checkAvailability = (prop, value) => {
        const users = userData.filter(user => user[prop] === value)
        if (users.length === 0 && value.length >= 3) {
            return true
        }
        return false
    }

    const handleSubmitForm = (event) => {
        event.preventDefault()
        const isPasswordCorrect = checkPassword(signUpForm.password, repeatPassword)
        if (isPasswordCorrect && checkAvailability("user", signUpForm.user) && checkAvailability("email", signUpForm.email)) {
            document.getElementById("formSpan").style.display = "none"
            userData.push(signUpForm) // This should be a POST request
            setLogin(true)
            history.push("/")
        }
        else {
            console.log("Something failed!");
            document.getElementById("formSpan").style.display = "initial"
        }
    }
    return (
        <StyledForm onSubmit={handleSubmitForm}>

        <StyledLabel htmlFor="name">
        Nombre completo
        <StyledInput name="name" type="text" value={signUpForm.name} onChange={handleChange}/>
        </StyledLabel>

        <StyledLabel htmlFor="user">
        Usuario
        <StyledInput name="user" type="text" value={signUpForm.user} onChange={handleChange}/>
        <StyledSpanError id="userSpan">El usuario no es válido o ya existe</StyledSpanError>
        </StyledLabel>

        <StyledLabel htmlFor="email">
        Email
        <StyledInput name="email" type="email" value={signUpForm.email} onChange={handleChange}/>
        <StyledSpanError id="emailSpan">El correo no es válido o ya está en uso</StyledSpanError>
        </StyledLabel>

        <StyledLabel htmlFor="password">
        Contraseña
        <StyledInput name="password" type="password" value={signUpForm.password} onChange={handleChange}/>
        </StyledLabel>

        <StyledLabel htmlFor="repeatPassword">
        Repetir contraseña
        <StyledInput name="repeatPassword" id="repeatPassword" type="password" value={repeatPassword} onChange={handleRepeatPassword}/>
        <StyledSpanError id="repeatPasswordSpan">Las contraseñas no coinciden</StyledSpanError>
        </StyledLabel>

        <StyledSpanError id="formSpan">Comprueba que los datos son correctos</StyledSpanError>
        <StyledButton id="submitBtn">CREAR CUENTA</StyledButton>
        <Link to="/signin">Ya tengo cuenta en Rented</Link>
    </StyledForm>
    )
}

export default SignUp