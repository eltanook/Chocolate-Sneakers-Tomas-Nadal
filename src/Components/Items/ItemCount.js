import {useState} from "react"


const ItemCount = ({stock, initial, onAdd}) => {

    const [contador,setContador] = useState(initial)
    
    const aumentarContador = () =>{
        if (contador < stock){
        setContador(contador + 1)
        }   
    }
    const disminuirContador = () =>{
        if (contador > initial){
        setContador(contador - 1)
        }
    }

    return (
        <div>
            <button className="btn btn-main" onClick={disminuirContador}>-</button>

            <p> {contador} </p>

            <button className="btn btn-main" onClick={aumentarContador}>+</button>

            <button className="btn btn-main btn-submit" onClick={() =>onAdd(contador)}>Add to cart</button>
        </div>
    )
}

export default ItemCount