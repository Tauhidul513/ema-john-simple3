import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    for (const product of cart) {
        total = total + product.price;
    }
    const shipping = total > 0 ? 15 : 0;
    const tax = (total + shipping) * .1
    const grandTotal = total + shipping + tax;
    return (
        <div>
            <h3>Order Summery</h3>
            <h4>Items Order: {props.cart.length}</h4>
            <h4>total: {total}</h4>
            <h4>Shipping: {shipping}</h4>
            <h4>Tax: {tax}</h4>
            <h3>Grand Total: {grandTotal}</h3>
        </div>
    );
};

export default Cart;