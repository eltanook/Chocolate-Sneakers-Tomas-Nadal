import {useState} from "react"
import { Button } from 'react-bootstrap';


const ItemCount = ({stock, initial, OnAdd}) => {

    const [quantity,setQuantity] = useState(initial)
    
    const aumentarQuantity = () =>{
        if (quantity < stock){
        setQuantity(quantity + 1)
        }   
    }
    const disminuirQuantity = () =>{
        if (quantity > initial){
        setQuantity(quantity - 1)
        }
    }

    const AddtoCart = () => {
        OnAdd(quantity);

    };
    
    return (
        
        <div>
            <Button onClick={disminuirQuantity}>-</Button>

            <p> {quantity} </p>
            
            <Button onClick={aumentarQuantity}>+</Button>

            <Button onClick={AddtoCart}>Add to cart</Button>
        </div>
    )
}

export default ItemCount