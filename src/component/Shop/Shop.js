import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { addToDb } from '../../utilities/fakedb';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleAddToCart = (product) => {
        // console.log(product.name);
        const newCart = [...cart, product];
        setCart(newCart);
        //save to local storage for now
        addToDb(product.key)
    }

    return (
        <>
            <div className="search-container">
                <input type="text" placeholder='Search Product' />
            </div>
            <div className='shop-container'>

                <div className="product-container">
                    {
                        products.map(product => <Product
                            key={product.key}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        ></Product>)

                    }
                    <h3>Product:{products.length}</h3>
                </div>


                <div className="cart-container">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </>
    );
};

export default Shop;