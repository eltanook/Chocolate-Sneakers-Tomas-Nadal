import { useState } from 'react';
import { useEffect } from 'react';
import ItemList from './ItemList';


const ItemListContainer = ({name}) => {

        const [products, setProducts] = useState([])
        const [loading, setLoading] = useState(true)

        useEffect(() => {
            const promise = fetch ('https://fakestoreapi.com/products')

            promise
            .then(res=>res.json())
            .then((products) => {
                setLoading(false);
                setProducts(products);
            });
        }, []);

//const onAdd = () =>{ } 

        return (
            <>
            <p className="greeting">¡Bienvenido {name}!</p>
            <h2>Los más vendidos :</h2>
            <div id="projects">
                {loading?( <h3>Cargando...</h3> ) 
                : (
                    products.map((product) => (
                        <div>
                            <ItemList key={products.id} product={product}/>
                        </div>
                        ))
                    )}
            </div>
            </>
        ) 
} 

export default ItemListContainer