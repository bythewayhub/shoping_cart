import React from 'react';
import {BrowserRouter as Router, NavLink, Route, Switch} from "react-router-dom";
import Main from "./Main";
import Cart from "./Cart";


export default function Header(props) {
    const {countCartItems, setCartItems, cartItems} = props;

    const onAdd = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist) {
            setCartItems(cartItems.map(x => x.id === product.id ? {...exist, qty: exist.qty + 1} : x
                )
            );
        } else {
            setCartItems([...cartItems, {...product, qty: 1}]);
        }
    };

    const onRemove = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist.qty === 1) {
            setCartItems(cartItems.filter((x) => x.id !== product.id));
        } else {
            setCartItems(cartItems.map(x => x.id === product.id ? {...exist, qty: exist.qty - 1} : x
                )
            );
        }
    }

    return (
        <Router>
            <div className='header'>

                <div>
                <div className='buttons'>
                <NavLink to='/'>Products</NavLink>
                </div>
                <div className='buttons'>
                <NavLink to='/cart'>Cart{' '}{countCartItems ? (
                    <span className='count_items'>{`(${countCartItems})`}</span>) : ('')}</NavLink>
                </div>
                </div>
                <hr/>

                <Switch>
                    <Route exact path='/'><Main onAdd={onAdd}/></Route>
                    <Route exact path='/cart'><Cart onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}/></Route>
                </Switch>
            </div>
        </Router>







        // <div>
        //     <header>
        //         <button onClick={() => navigateTo(PAGE_PRODUCTS)}>View Products</button>
        //         <button onClick={() => navigateTo(PAGE_CART)}>Cart {' '}{countCartItems ? (
        //             <span className='count_items'>{`(${countCartItems})`}</span>) : ('')}</button>
        //     </header>
        // </div>
    )
};




