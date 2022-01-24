import ItemCount from './ItemCount';


function ItemDetail ({product, OnAdd, added}) {
    return (
        <div className= 'itemBox2'>
            <img src={product.image} alt={product.title}/>
            <div id='itembox2-2'>
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <h4>${product.price}</h4>
                {added ? <h3 style={{marginTop: '2rem' }}>Succesfully added to cart!</h3> : 
                <ItemCount stock ={product.stock} initial={1} OnAdd={OnAdd}/>}   
            </div>    
        </div>  
    )
}

export default ItemDetail