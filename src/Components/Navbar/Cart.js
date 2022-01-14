import React from 'react'
import { UseCartContext } from './CartContext'
import CartItem from './CartItem'

function Cart() {
    const {CartList, EmptyCart} = UseCartContext();

    if(CartList.length < 1){ 
        return(<h3>You have no added products</h3>)
    }else{ 
    return(
        <div id='cart'>
        <p className="subtitle">Cart</p>
  
        {CartList.map((product) => (
            <CartItem
              key={product.product.id}
              product={product.product}
              quantity={product.quantity}
            />))}

        <button id="empty-cart"className="btn btn-main" onClick={EmptyCart}>Empty cart</button>
        </div>
    )
}
}

export default Cart