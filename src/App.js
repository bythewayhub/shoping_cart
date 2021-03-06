import React, {useState} from 'react';
import './App.css';
import Header from "./components/Header";
import { getTotalQuantity } from './utils/Calculate';


function App() {
    const [cartItems, setCartItems] = useState([]);
    return (
        <div>
            <div>
                <Header countCartItems={getTotalQuantity(cartItems)} setCartItems={setCartItems} cartItems={cartItems}/>
            </div>
            <div>
                {/*<Main/>*/}
            </div>

        </div>
    );
}

export default App;
