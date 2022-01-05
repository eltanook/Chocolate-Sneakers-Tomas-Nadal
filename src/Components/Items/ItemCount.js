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

    const resetearContador = () =>{
        setContador(initial)
    }

    return (
        <div id="contador">
            <button onClick={disminuirContador}>-</button>
            <p id="cantidad-contador"> {contador} </p>
            <button onClick={aumentarContador}>+</button>
            <button onClick={resetearContador} id="confirmar-contador">Confirmar</button>
        </div>
    )
}

export default ItemCount
