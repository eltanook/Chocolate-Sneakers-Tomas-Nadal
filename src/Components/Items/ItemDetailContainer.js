import { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import ItemLoader from './ItemLoader';
import { UseCartContext } from '../Navbar/CartContext';


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

    const { AddProduct } = UseCartContext();

    const OnAdd = (quantity) => {
        AddProduct(product, quantity);
        setAdded(true)
    };

    return (
        <>
            <p className="subtitle">Product details</p>
            
            <div id="projects">
                {loading ? <ItemLoader/>  : <ItemDetail product={product} OnAdd={OnAdd} added={added}/>}
            </div>
         </>
    ) 
}

export default ItemDetailContainer