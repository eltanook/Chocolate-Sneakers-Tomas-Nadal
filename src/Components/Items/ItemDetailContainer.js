import { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import ItemLoader from './ItemLoader';
import { UseCartContext } from '../Navbar/CartContext';
import { collection, doc, getDoc} from 'firebase/firestore';
import { db } from '../../Firebase/firebase';



const ItemDetailContainer = () => {

    const [product, setProducts] = useState({})
    const [loading, setLoading] = useState(true)
    const [added, setAdded] = useState(false)
    const {id} = useParams()

    useEffect(() => {
        
        const collectionProducts = collection(db, "products")
        const docRef = doc(collectionProducts,id)
        const pedido = getDoc(docRef)

        pedido
        .then((resultado)=>{
            const product = resultado.data()
            setProducts(product)
            setLoading(false)
        })
        .catch((error)=>{
            console.log(error)
        })
    },[id])

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