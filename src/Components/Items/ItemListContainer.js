import { useState, useEffect} from 'react';
import { useParams} from 'react-router-dom';
import ItemList from './ItemList';
import ItemLoader from '../Extras/Loader';
import Membership from '../Extras/Membership';
import ItemCategories from './ItemCategories';
import Carousel from '../Extras/Carousel';
import { db } from '../../Firebase/firebase';
import { collection, getDocs, query, where} from 'firebase/firestore';
import { toast } from 'react-toastify';


const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const {id} = useParams()

    useEffect(() => {
        const collectionProducts = collection(db,'products')
        let order
        if (id){
            const filter = where('brand','==',id)
            const consulta = query(collectionProducts,filter)
            order = getDocs(consulta) 
        }
        else{
            order = getDocs(collectionProducts)
        }
        order
        .then((resultado)=>{
            setProducts(resultado.docs.map(doc => ({id : doc.id,...doc.data()}) ))
            setLoading(false) 
        })
        .catch((error)=>{
            toast.warn(error, {position: 'top-center', autoClose: 3000} )
        })
    }, [id])

    return (
        <>
        <p className='subtitle'>Home</p>
        {loading ? '' : <> <Carousel/><h2 id='ourproducts'> <ItemCategories/>Our sneakers:</h2> </>}
        <div id='projects'>
        {loading ? <ItemLoader/> : 
            (products.map((product, id) => (<ItemList key={product.id} product={product}/>)))}
        </div>
        {loading ? '' : <Membership/>}
        </>
    ) 
} 

export default ItemListContainer