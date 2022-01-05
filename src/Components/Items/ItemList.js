//import {Link} from 'react-router-dom'

function ItemList ({product}) {
        const {title, price, image} = product
    
    return (
        <div className="item-box">
		        <div className="item">                    
                    <div className="card">
                        <img className="item-img" src={image} alt={title}></img>
                        <div class="item-content">
                            {title}  
                            <p>{price}</p>
                            <button>Ver detalles</button>
                        </div>
                    </div>                   
                </div>
        </div>
    )
}

export default ItemList