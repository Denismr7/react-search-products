import React from 'react'
import ProductItem from './ProductItem'
import Data from './data'

function ListItems(props) {
    const arrayProducts = Data.map(data => <ProductItem data={data}/>)
    return (
        <div className="products_cont">
            {arrayProducts}
        </div>
    )
}

export default ListItems