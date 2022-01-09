import {Link} from 'react-router-dom'


function ItemList ({product}) {    
    return (
        <div className= "itemBox">
            <img src={product.image} alt={product.title}/>
            <h4>{product.title}</h4>
            <p>${product.price}</p>
            <Link id="Button" to={"/item/"+product.id}>Ver detalles</Link>
         </div>
    )
}

export default ItemList