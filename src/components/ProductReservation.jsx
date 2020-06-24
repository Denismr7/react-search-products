import React from 'react'
import { StyledButton } from './styles/StyledButton'

export default function ProductReservation() {
    return (
        <div>
            <h2>Reservar producto</h2>
            <div>
            <label htmlFor="start-date">
                <h4>Desde</h4>
                <input type="date" value="" onChange=""/>
            </label>
            <label htmlFor="finish-date">
                <h4>Hasta</h4>
                <input type="date" value="" onChange=""/>
            </label>
            <h3>Subtotal: <span>90</span> €</h3>
            <h3>Tasa (5%): <span>4,5</span> €</h3>
            <h3>Total: <span>94,5</span> €</h3>
            </div>
            <StyledButton primary>Reservar</StyledButton>
        </div>
    )
}
