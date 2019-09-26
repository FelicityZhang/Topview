import React from 'react';
import './App.css'


const Product = ( { id, name, price, image, product_type, addFunc, cartPop, showCart, handleCheck } ) => {
    // console.log( 'type of addFunc is: ', typeof ( addFunc ) )
    return (
        <div className="productItem" id={ id }>
            <div><img className="image" src={ image }></img></div>
            <div className='details'>
                <div className="name">NAME: { name }</div>
                <div className="price">PRICE: ${ price }</div>
                <div className="type">PRODUCT_TYPE: { product_type }</div>
            </div>
            <div><button className='btn addbtn' onClick={ handleCheck } onClick={ () => addFunc( { id, name, price, image, product_type, units: 1, cartPop, showCart, handleCheck } ) }>
                add to cart
                </button>
            </div>

        </div>
    )
}

export default Product
