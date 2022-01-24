import { useState, useEffect} from 'react';
import { useParams} from 'react-router-dom';
import ItemList from './ItemList';
import ItemLoader from '../Extras/Loader';
import Membership from '../Extras/Membership';
import ItemCategories from './ItemCategories';
import Carousel from '../Extras/Carousel';
import { db } from '../../Firebase/firebase';
import { collection, getDocs, query, where} from 'firebase/firestore';


const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const {id} = useParams()

    useEffect(() => {
        if (id){
            const collectionProducts = collection(db,'products')
            const filter = where('brand','==',id)
            const consulta = query(collectionProducts,filter)
            const order = getDocs(consulta) 
            order
            .then((resultado)=>{
                setProducts(resultado.docs.map(doc => ({id : doc.id,...doc.data()}) ))
                setLoading(false) 
            })
            .catch((error)=>{
                console.log(error)
            })
        }
        else{
            const collectionProducts = collection(db,'products')
            const order = getDocs(collectionProducts)
            order
            .then((resultado)=>{
                setProducts(resultado.docs.map(doc => ({id : doc.id,...doc.data()}) ))
                setLoading(false) 
            })
            .catch((error)=>{
                console.log(error)
            })
        }
    }, [id])

    return (
        <>
        <p className='subtitle'>Home</p>
        {loading ? '' : <> <Carousel/><h2 id='ourproducts'> <ItemCategories/>Our sneakers:</h2> </>}
        <div id='projects'>
        {loading ? <ItemLoader/> : 
            (products.map((product) => (<ItemList key={products.id} product={product}/>)))}
        </div>
        {loading ? '' : <Membership/>}
        </>
    ) 
} 

export default ItemListContainer