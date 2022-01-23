import ItemCount from './ItemCount';


function ItemDetail ({product, OnAdd, added}) {

    return (
        <div className= "itemBox2">

            <img src={product.image} alt={product.title}/>

            <div>
                <h2>{product.title}</h2>
                <h3>►{product.brand}◄</h3>
                <p>{product.description}</p>
                <h4>${product.price}</h4>
                <div id="contador">
                    {added ? 
                    <h3>Succesfully added to cart!</h3> : 
                    <ItemCount stock ={product.stock} initial={1} OnAdd={OnAdd}/>}
                </div>
            </div>   
            
        </div>  
    )
}

export default ItemDetail