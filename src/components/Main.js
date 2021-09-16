import React from 'react';
import Product from "./Product";
import * as constants from "../utils/constants";

export default function Main(props) {
    const {onAdd} = props;
    const {products} = constants.data;
    return (
        <main>
            <h2 className='items'>Products</h2>
            <div className='items_products'>
                {products.map((product) => (
                    <Product key={product.id} product={product} onAdd={onAdd}/>
                ))}
            </div>
        </main>
    );
}