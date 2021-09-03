import React from 'react';
import {PAGE_PRODUCTS, PAGE_CART} from "../constants";


export default function Header(props) {
    const {countCartItems, setPage} = props;

    const navigateTo = nextPage => {
        setPage(nextPage);
    };

    return (
        <div>
            <header>
                <button onClick={() => navigateTo(PAGE_PRODUCTS)}>View Products</button>
                <button onClick={() => navigateTo(PAGE_CART)}>Cart {' '}{countCartItems ? (
                    <span className='count_items'>{`(${countCartItems})`}</span>) : ('')}</button>
            </header>
        </div>
    )
};




