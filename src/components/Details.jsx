import React, {useContext} from 'react'
import {StateConsumer} from '../context'
import colors from '../colors'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export default function Details() {
    const [selectedItem,] = useContext(StateConsumer)
    const {name, price, img, description} = selectedItem
    if (name === undefined) {
        return (
            <h1>No item selected</h1>
        )
    }
    return (
        <StyledDetailsCont>
        <img src={img} alt="product"/>
        <div>
            <h1>{name}</h1>
            <h2>Precio: {price}€/día</h2>
            <p>{description}</p>
        </div>
        <UserCont>
            <h4>Usuario: GregMorrison34</h4>
            <p>Registrado: 10 Ene 2019</p>
            <p>Puntuación: <FontAwesomeIcon icon={faStar} className="fa" /> 4,4 / 5</p>
        </UserCont>
        </StyledDetailsCont>
    )
}

const StyledDetailsCont = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 90%;
margin: 0 auto;
& img {
    width: 500px;
    height: auto;
}
`

const UserCont = styled.div`
    background: rgba(2, 89, 250, 0.3);
    border: 2px solid ${colors.blue};
    padding: 1rem 6rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
    border-radius: 5px;
    & .fa {
        color: goldenrod;
    }
`