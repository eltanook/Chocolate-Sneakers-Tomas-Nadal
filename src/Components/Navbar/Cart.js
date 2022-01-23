import React from 'react'
import { Button } from 'react-bootstrap';
import { UseCartContext } from './CartContext'
import CartItem from './CartItem'

function Cart() {
    const {CartList, EmptyCart} = UseCartContext();

    if(CartList.length < 1){ 
        return(<h3 id='no-added-products'>You have no added sneakers.</h3>)
    } else{ 
        return(
            <div id='cart'>

            <p className="subtitle">Cart</p>
    
            {CartList.map((product) => (
                <CartItem
                key={product.product.id}
                product={product.product}
                quantity={product.quantity}
                />))}
                <Button id="empty-cart" onClick={EmptyCart}>Empty cart</Button>{' '}
                <Button id="confirm-purchase" onClick={EmptyCart}>Confirm purchase</Button>
            </div>
        )
    }   
}   

export default Cart