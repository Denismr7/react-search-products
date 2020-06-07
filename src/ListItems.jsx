import React from 'react'
import ProductItem from './ProductItem'
import Data from './data'

function ListItems(props) {
    const filteredArray = Data.filter(element => element.name.toLowerCase()
    .includes(props.state.search.toLowerCase())).map(data => <ProductItem data={data}/>)

    return (
        <div className="products_cont">
            {filteredArray}
        </div>
    )
}

export default ListItems