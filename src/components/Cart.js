import React from 'react';
import {data} from "../constants";


export default function Cart(props) {
    const {cartItems, onAdd, onRemove} = props;
    const productPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);

    return (
        <main>
            <h1 className='text'>Cart</h1>
            <div className='text'>
                {cartItems.length === 0 && <div>Cart is Empty</div>}
            </div>
            <div className='cart-row'>
                {cartItems.map((item) => (
                    <div key={item.id}>
                        <div className='cart-img'><img className='cart_img' src={item.img} alt={item.name}/></div>
                        <div>{item.name}</div>
                        <div>
                            <button onClick={() => onAdd(item)} className='items_btn'>+</button>
                            <button onClick={() => onRemove(item)} className='items_btn'>-</button>
                        </div>
                        <div>
                            {item.qty} x {`${data.currency} ${item.price.toFixed(2)}`}
                        </div>

                    </div>
                ))}
            </div>
            <div className='cart'>
                {cartItems.length !== 0 && (
                    <>
                        <hr></hr>
                        <div className='text'><strong>Items Price</strong></div>
                        <div className='total-cost'><strong>${productPrice.toFixed(2)}</strong></div>
                        <div>
                            <button onClick='#' className='buy_btn'>Buy it</button>
                        </div>
                    </>
                )}
            </div>
        </main>
    )
}


