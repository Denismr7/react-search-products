import React, {useContext} from 'react'
import {StateConsumer} from '../context'
import colors from '../colors'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import userData from '../data/userData'
import { Redirect } from 'react-router-dom'
import ProductReservation from './ProductReservation'

export default function Details() {
    const [selectedItem,] = useContext(StateConsumer)
    const {name, price, img, description, userId} = selectedItem

    const getUserInfo = (id) => {
        return userData.filter(user => user.userId === id)
    }

    const [selectedUser] = getUserInfo(userId)
    if (name === undefined) {
        return (
            <Redirect to="/" />
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
            <img src={selectedUser.profileImg} alt="user"/>
            <div>
            <h4>{selectedUser.user}</h4>
            <p>Miembro desde el {selectedUser.registrationDate}</p>
            <p><FontAwesomeIcon icon={faStar} className="fa" /> {selectedUser.rating} / 5</p>
            </div>
        </UserCont>
        <ProductReservation />
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
    width: 430px;
    height: auto;
}
`

const UserCont = styled.div`
    display: flex;
    align-items: center;
    background: rgba(0, 0, 0, 0.1);
    border: 1px solid ${colors.black};
    padding: 1rem 3rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
    border-radius: 5px;
    & .fa {
        color: goldenrod;
    }
    & img {
        width: 120px;
        height: 120px;
        margin-right: 2rem;
    }
`