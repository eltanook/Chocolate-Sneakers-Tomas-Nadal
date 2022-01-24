import {useState} from 'react'
import { Button, ButtonGroup } from 'react-bootstrap';
import { toast } from 'react-toastify';


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
        toast.success('Succesfully added to cart!', {position: 'top-center', autoClose: 3000} )
    };

    return (
        <div id='contador'>
            <ButtonGroup>
            <Button onClick={disminuirQuantity}>-</Button>
            <p>{quantity}</p>
            <Button onClick={aumentarQuantity}>+</Button>
            <Button onClick={AddtoCart}>Add to cart</Button>
            </ButtonGroup>
        </div>
    )
}

export default ItemCount