import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { db } from '../../Firebase/firebase';
import { UseCartContext } from './CartContext'
import CartItem from './CartItem'


function Cart() {
    const {CartList, EmptyCart} = UseCartContext();
    const [order, setOrder] = useState(false)
    const createOrder = () => {
        const collectionProducts = collection(db,'orders')
        const user = {name: 'Homero', email: 'homerojsimpson@gmail.com', phone: '764-84377'}
        const consulta = {user, CartList, created_at: serverTimestamp()}
        const order = addDoc(collectionProducts,consulta)
        order
        .then((resultado)=>{
            setOrder(resultado.id)
            toast.success('Thanks you for your trust. Your order ID is: ' + resultado.id, {position: 'top-center', autoClose: 3000} )
            EmptyCart()
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    
    if (CartList.length < 1){ 
        return(    
        <>    
        <p className='subtitle'>Cart</p>
        <h3 id='no-added-products'>You have no added sneakers.</h3>
        </>
        )
    }
    else{ 
        return(
        <div id='cart'>
            <p className='subtitle'>Cart</p>
            {CartList.map ((product) => (
                <CartItem key={product.product.id} product={product.product} quantity={product.quantity}/>
            ))}
            <Button id='empty-cart' onClick={EmptyCart}>Empty cart</Button>{' '}
            <Button id='confirm-purchase' onClick={createOrder}>Confirm purchase</Button>
        </div>
        )
    }   
}   

export default Cart