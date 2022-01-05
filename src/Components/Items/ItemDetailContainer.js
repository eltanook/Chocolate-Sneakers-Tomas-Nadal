import { useState } from 'react';
import { useEffect } from 'react';
import ItemDetail from './ItemDetail';

const productList = [
    {
        id: 1,
        model: "Yeezy Boost 350",
        price: "250$",
        img: "https://cdnx.jumpseller.com/premier-sneakers/image/11499461/resize/255/255?1601000143",
        brand: "Nike",
    },
    {
        id: 2,
        model: "Airforce 1",
        price: "70$",
        img: "https://urbankingstore.com/714-large_default/nike-air-force-one-marrones-ante.jpg",
        brand: "Nike",
    },
    {
        id: 3,
        model: "Jordan 1",
        price: "300$",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM0UOlvCMe5aI-2fQu4_UXcN4KXu6dPyUorAEI4Ig3GoZ6eGWEKu9NYBUPAuLn_epB3IY&usqp=CAU",
        brand: "Nike",
    },
];

const ItemDetailContainer = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const id = 3;

    useEffect(() => {
        const getItem = productList.filter((product)=>{
            return product.id === +id
        });
        const promise = new Promise ((res , rej) => {
            setTimeout(() => {
                res(getItem);
            }, 2000);
        });
        promise.then((products) => {
            setLoading(false);
            setProducts(products);
        });
    }, [id]);

        return (
            <>
            <p className="greeting">Detalles del producto</p>
            <div id="projects">
                {loading?( <h3>Cargando...</h3> ) 
            : (
                products.map((product) => (
                    <div>
                        <ItemDetail key={products.id} product={product}/>
                    </div>
                    ))
                )}
            </div>
            </>
        ) 
}

export default ItemDetailContainer