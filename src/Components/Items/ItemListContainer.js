import { useState, useEffect} from 'react';
import { useParams} from 'react-router-dom';
import ItemList from './ItemList';
import ItemLoader from './ItemLoader';
import Membership from '../Extras/Membership';
import ItemCategories from './ItemCategories';
import Carousel from '../Extras/Carousel';
import { db } from '../../Firebase/firebase';
import { collection, getDocs, query, where} from 'firebase/firestore';


const ItemListContainer = () => {

        const [products, setProducts] = useState([])
        const [loading, setLoading] = useState(true)
        const {id} = useParams()
        const name = "Sergio"

        useEffect(() => {

            if(id){
                const collectionProducts = collection(db,"products")
                const filter = where("brand","==",id)
                const consulta = query(collectionProducts,filter)
                const pedido = getDocs(consulta)
                pedido
                    .then((resultado)=>{
                        setProducts(resultado.docs.map(doc=>({id : doc.id,...doc.data()})))
                        setLoading(false) 
                    })
                    .catch((error)=>{
                        console.log(error)
                    })
            }else {
                const collectionProducts = collection(db,"products")
                const pedido = getDocs(collectionProducts)
                pedido
                    .then((resultado)=>{
                        setProducts(resultado.docs.map(doc=>({id : doc.id,...doc.data()})))
                        setLoading(false) 
                    })
                    .catch((error)=>{
                        console.log(error)
                    })
            }
    
        },[id])

        return (
            <>
                <p className="subtitle">Welcome back {name}!</p>
                
                {loading ? "" : 
                <>
                <Carousel/>
                <h2 id='ourproducts'>      
                <ItemCategories/>
                Our sneakers:
                </h2>
                </>}
                
                
                <div id="projects">
                    {loading ? <ItemLoader/> : 
                    ( products.map((product) => (
                            <div>
                                <ItemList key={products.id} product={product}/>
                            </div>
                        ))
                    )}
                </div>
                {loading ? "" : <Membership/>}
                
            </>
        ) 
} 

export default ItemListContainer