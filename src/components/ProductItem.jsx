import React, { useContext } from 'react'
import styled from 'styled-components'
import {Button} from './Button'
import colors from '../colors'
import {Link} from 'react-router-dom'
import { StateConsumer } from '../context'

const StyledItem = styled.div`
  background-color: white;
  border: 1px solid ${colors.blue};
  margin: 1vh;
  padding: 3%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-evenly;
  box-shadow: 0px 4px 6px -1px rgba(0,0,0,0.3);
  & img {
      width: 100px;
      margin: 0 auto;
  }
  & a button {
      width: 100%;
  }
`

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