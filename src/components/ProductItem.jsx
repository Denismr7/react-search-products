import React, { useContext } from 'react'
import {StyledItem} from './styles/StyledProductItem'
import {Button} from './Button'
import {Link} from 'react-router-dom'
import { StateConsumer } from '../context'

function ProductItem(props) {
    const [, setSelectedItem] = useContext(StateConsumer)

    return (
        <StyledItem>
            <img src={props.data.img} alt=""/>
            <h2>{props.data.name}</h2>
            <h3>Pecio: {props.data.price}€/día</h3>
            <Link to="/details" data={props.data.id}>
            <Button text="+INFO" onClick={() => setSelectedItem(props.data)}/>
            </Link>
        </StyledItem>
    )
}

export default ProductItem