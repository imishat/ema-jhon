import React from 'react';
import'./Cart.css'

const Cart = (props) => {
   // console.log(props)
    const {cart}=props
    let sum=0
    let shipping
    =0
    for( const total of cart){
        sum=sum+total.price
        shipping
        =shipping
        +total.shipping


    }
    const tax=parseFloat((sum*0.1).toFixed(2))
    const GrandTotal=sum+shipping+tax
    
    return (
        <div className='cart'>
<h1> cart section </h1>
                <h1> select item:{cart.length}</h1>
                <p>Total Price:${sum}</p>
                <p>Total Shipnig:{shipping
}</p>
                <p>Tax:{tax}</p>
                <h5>Grand Total:{GrandTotal}</h5>

        </div>
    );
};

export default Cart;