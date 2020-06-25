import React, {useState, useEffect, useContext} from 'react'
import { StyledButton } from './styles/StyledButton'
import {ProdResContainer} from './styles/StyledProductReservation'
import {StyledInput, StyledSpanError} from './styles/StyledAuth'
import { StateConsumer } from '../context'

export default function ProductReservation() {
    const [selectedItem] = useContext(StateConsumer);
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const [priceInfo, setPriceInfo] = useState({
        subtotal: 0,
        tax: 0,
        total: 0,
    })
    const today = `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`

    useEffect(() => {
        if (startDate !== "" && endDate !== "") {
            // If the user has selected both dates
            const daysAmount = getDateDistanceInDays(startDate, endDate) 
            setPriceInfo({
                subtotal: daysAmount * selectedItem.price,
                tax: (daysAmount * selectedItem.price) * 0.05,
                total: daysAmount * selectedItem.price + ((daysAmount * selectedItem.price) * 0.05),
            })
        }
        else {
            // Do not anything
        }
    }, [startDate, endDate, selectedItem])

    const handleChange = (event) => {
        const {name, value} = event.target;
        switch (name) {
            case "startDate":
                setStartDate(value)
                break;
            case "endDate":
                setEndDate(value)
                break;
            default:
                console.log("Error in handleChange")
                break;
        }
    }

    const handleSubmit = () => {
        console.log(priceInfo)
    }

    useEffect(() => { // Check the difference between the selected startDate and today, if negative, show error
        const subtract = new Date(startDate) - new Date(today)
        if (subtract < 0) {
            document.getElementById("startDateSpan").style.display = 'initial'
        }
        else {
            document.getElementById("startDateSpan").style.display = 'none'
        }
    }, [startDate, today])

    const getDateDistanceInDays = (startDate, endDate) => {
        const distance = new Date(endDate) - new Date(startDate);
        const seconds = distance / 1000;
        const minutes = seconds / 60;
        const days = (minutes / 60) / 24
        return days
    }

    return (
        <ProdResContainer>
            <h2>Reservar producto</h2>
            <div className="datesPriceContainer">
            <div className="datesContainer">
            <label htmlFor="start-date">
                <h4>Desde</h4>
                <StyledInput type="date" name="startDate" value={startDate} onChange={handleChange} min={today}/>
                <StyledSpanError id="startDateSpan">Por favor selecciona una fecha válida</StyledSpanError>
            </label>
            <label htmlFor="finish-date">
                <h4>Hasta</h4>
                <StyledInput type="date" name="endDate" value={endDate} onChange={handleChange}/>
            </label>
            </div>
            <div>
            <h3>Subtotal: {priceInfo.subtotal} €</h3>
            <h3>Tasa (5%): {priceInfo.tax} €</h3>
            <h3>Total: {priceInfo.total} €</h3>
            </div>
            </div>
            <StyledButton primary onClick={handleSubmit}>Reservar</StyledButton>
        </ProdResContainer>
    )
}
