import React from 'react';
import Product from "./Product";

export default function Main(props) {
    const {products, onAdd} = props;
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