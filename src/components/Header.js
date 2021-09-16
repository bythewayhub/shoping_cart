import React from 'react';
import {PAGE_PRODUCTS, PAGE_CART} from "../utils/constants";
import {BrowserRouter as Router, Link, NavLink, Route, Switch} from "react-router-dom";
import Main from "./Main";
import Cart from "./Cart";
import Product from "./Product";


export default function Header(props) {
  //  const {countCartItems, setPage} = props;
    //
    // const navigateTo = nextPage => {
    //     setPage(nextPage);
    // };

    return (
        <Router>
            <div>
                <h2>View Products</h2>
                <Link to='/'>Home</Link>
                <NavLink to='/products'>Products</NavLink>
                <NavLink to='/cart'>Cart</NavLink>

                <hr/>
                <Switch>
                    <Route exact path='/' component={Product}/>
                    <Route exact path='/cart' component={Cart}/>
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




