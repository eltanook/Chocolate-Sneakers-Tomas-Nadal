//import { useContext } from "react"
//import {contexto} from './CartContext'


const Cart = () => {

    return (

        <div>
            <p className="subtitle">Cart</p>
            <h3>Here are your selected products:</h3>

            <ul id="productos-cart"> 
                <li>Quantity: {/*quantity*/}</li>   
                <li>Total price: {/*price*/}</li>
            </ul>
        </div>
    )
}

export default Cart

