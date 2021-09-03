import React, {useState} from 'react';
import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import * as constants from "./constants";
import Cart from "./components/Cart";


const getTotalQuantity = cartItems => cartItems.reduce((total, elem) => {
    total += elem.qty;
    return total
}, 0)

function App() {
    const [cartItems, setCartItems] = useState([]);
    const [page, setPage] = useState('products');

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

    const {product} = constants.data;

    return (
        <div>
            <Header countCartItems={getTotalQuantity(cartItems)} setPage={setPage}/>
            <div>
                {page === constants.PAGE_PRODUCTS && <Main onAdd={onAdd} products={product}/>}
                {page === constants.PAGE_CART && <Cart onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}/>}
            </div>
        </div>
    );
}

export default App;
