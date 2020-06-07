import React from 'react'

function ProductItem(props) {
    return (
        <div className="item">
            <h2>{props.data.name}</h2>
            <img src={props.data.img} alt=""/>
            <h3>Price: {props.data.price}€</h3>
        </div>
    )
}

export default ProductItem