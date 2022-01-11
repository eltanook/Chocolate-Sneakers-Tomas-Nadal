//import { useContext } from "react"
//import {contexto} from './CartContext'


const Cart = () => {
    
//    const {cart, total_price, total_quantity} = useContext(contexto)
    
    return (

        <div>

            <p className="subtitle">Cart</p>

            <h3>AQUÍ VA A IR EL CONTENIDO DEL COMPONENTE CART</h3>


            <ul id="productos-cart"> 
                <li>Quantity: {/*total_quantity*/}</li>   
                <li>Total price: {/*total_price*/}</li>
            </ul>
        </div>
    )
}

export default Cart

