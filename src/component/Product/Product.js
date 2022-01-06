import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './Product.css'
import Rating from 'react-rating';

const Product = (props) => {
    // console.log(props)
    const { img, name, price, stock, seller, star } = props.product;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />

    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='product-style'>
                <p>{name}</p>
                <p><small>by: {seller}</small></p>
                <p>Price: {price}</p>
                <p>Only {stock} left in stock - order soon</p>
                <Rating
                    initialRating={star}
                    readonly>
                </Rating>
                <br />
                <button onClick={() => props.handleAddToCart(props.product)} className='btn-regular'>{cartIcon} add to cart</button>
            </div>
        </div>
    );
};

export default Product;