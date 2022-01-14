import React from 'react'
import { UseCartContext } from './CartContext'
function CartItem({product, quantity}) {
    const { DelProduct } = UseCartContext();
    const { title, image, id} = product;

    return (
        <div id='cart-item'> 
            <img src={image} alt='product'/>
            <h4>{title}</h4>
            <h3>{quantity}</h3>
            <button className="btn btn-main" onClick={() =>DelProduct(id) }>Delete</button>
        </div>
    )
}

export default CartItem