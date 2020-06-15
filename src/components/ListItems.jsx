import React from 'react'
import ProductItem from './ProductItem'
import Data from '../data/data'
import {StyledItemsCont} from './styles/StyledListItems'

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