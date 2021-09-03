import React from 'react';
import {data} from "../constants";


export default function Product(props) {

    const {product, onAdd} = props;

    return (
        <div className='products'>
            <img className='small' src={product.img} alt={product.name}/>

            <h3 className='products-item'>{product.name}</h3>
            <div className='products-item'>
                <strong>{`${data.currency} ${product.price}`}</strong>
            </div>
            <div>
                <button className='addbtn' onClick={() => onAdd(product)}>Add to Cart</button>
            </div>
        </div>
    )
}