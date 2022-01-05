import ItemCount from './ItemCount';

function ItemDetail ({product}) {
    const {title, price,category, description, image} = product
    
    return (
        
        <div id="projects-detail">
            <img className="item-img-detail" src={image} alt={title}></img>
            <h2>{title}</h2>
            <h3>{price}</h3>   
            <h4>{category}</h4>
            <p>{description}</p>
            <ItemCount stock= {5} initial= {1}/>
        </div>
    )
}

export default ItemDetail