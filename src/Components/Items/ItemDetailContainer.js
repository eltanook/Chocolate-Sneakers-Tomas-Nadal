import { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import ItemLoader from './ItemLoader';


const ItemDetailContainer = () => {

    const [product, setProducts] = useState({})
    const [loading, setLoading] = useState(true)
    const [added, setAdded] = useState(false)
    const {id} = useParams()

    useEffect(() => {
        
        const getProducts = fetch (`https://fakestoreapi.com/products/${id}`);

        getProducts
        .then(res=>res.json())
        .then((product) => {
            setLoading(false);
            setProducts(product);
        }).catch((err)=> {
            console.error(err)
        });

    }, [id]);

    const onAdd = (count) => {
    setAdded(true);  
    console.log(`Agregaste ${count} ${product.title} al carrito.`)
    }

    return (
        <>
            <p className="subtitle">Product details</p>
            
            <div id="projects">
                {loading ? <ItemLoader/>  : <ItemDetail product={product} onAdd={onAdd} added={added}/>}
            </div>
         </>
    ) 
}

export default ItemDetailContainer