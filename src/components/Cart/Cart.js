import React from 'react';
import'./Cart.css'

const Cart = ({cart}) => {
    return (
        <div>
<h1> cart section </h1>
                <h1> select item:{cart.length}</h1>
        </div>
    );
};

export default Cart;