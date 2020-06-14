import React from 'react'
import ProductItem from './ProductItem'
import Data from '../data/data'
import styled from 'styled-components'

const StyledItemsCont = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, 80vw);
@media screen and (min-width: 950px) {
    grid-template-columns: repeat(3, 1fr);
    width: 60vw;
    margin-left: auto;
    margin-right: auto;
}
justify-content: center;
margin-top: 5vh;
`

function ListItems(props) {
    const filteredArray = Data.filter(element => element.name.toLowerCase()
    .includes(props.search.toLowerCase())).map(data => <ProductItem data={data} key={data.id}/>)
    return (
        <StyledItemsCont>
            {filteredArray}
        </StyledItemsCont>
    )
}

export default ListItems