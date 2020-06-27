import React, { useContext } from 'react'
import {StyledItem} from './styles/StyledProductItem'
import {StyledButton} from './styles/StyledButton'
import {Link} from 'react-router-dom'
import { generatePath } from 'react-router-dom'
import { StateConsumer } from '../context'

function ProductItem(props) {
    const [, setSelectedItem] = useContext(StateConsumer)

    return (
        <StyledItem>
            <img src={props.data.img} alt=""/>
            <h2>{props.data.name}</h2>
            <h3>Pecio: {props.data.price}€/día</h3>
            <Link to={generatePath("/details/:id", { id: props.data.id })} data={props.data.id}>
            <StyledButton onClick={() => setSelectedItem(props.data)} primary>+INFO</StyledButton>
            </Link>
        </StyledItem>
    )
}

export default ProductItem