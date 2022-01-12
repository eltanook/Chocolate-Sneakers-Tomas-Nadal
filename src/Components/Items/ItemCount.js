import {useState} from "react"


const ItemCount = ({stock, initial, onAdd}) => {

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

    return (
        <div>
            <button className="btn btn-main" onClick={disminuirQuantity}>-</button>

            <p> {quantity} </p>

            <button className="btn btn-main" onClick={aumentarQuantity}>+</button>

            <button className="btn btn-main btn-submit" onClick={() =>onAdd(quantity)}>Add to cart</button>
        </div>
    )
}

export default ItemCount