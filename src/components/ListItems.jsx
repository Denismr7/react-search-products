import React from 'react'
import ProductItem from './ProductItem'
import {StyledItemsCont} from './styles/StyledListItems'
import { useState } from 'react'

function ListItems(props) {
    const [products, setProducts] = useState()
    let filteredArray = []
    fetch("https://my-json-server.typicode.com/Denismr7/react-search-products/Data").then(response => response.json()).then(data => setProducts(data))
    if (products !== undefined) { 
        filteredArray = products.filter(product => product.name.toLowerCase()
        .includes(props.search.toLowerCase())).map(data => <ProductItem data={data} key={data.id}/>)
    }
    else {
        filteredArray = "Loading"
    }
    return (
        <StyledItemsCont>
            {filteredArray}
        </StyledItemsCont>
    )
}

export default ListItems