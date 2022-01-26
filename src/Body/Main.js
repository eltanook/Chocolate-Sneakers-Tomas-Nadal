import ItemDetailContainer from '../Components/Items/ItemDetailContainer'
import ItemListContainer from '../Components/Items/ItemListContainer'
import {Routes, Route} from 'react-router-dom';
import '../Components/Items/Item.scss';
import '../Components/Extras/Extras.scss';
import Cart from '../Components/Cart/Cart';
import'../Components/Cart/Cart.scss';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


const Main = () => {
    return (
        <main>
            <Routes>
                <Route path='/' element={<ItemListContainer/>}/>
                <Route path='/item/:id' element={<ItemDetailContainer/>}/>
                <Route path='/brand/:id' element={<ItemListContainer/>}/>
                <Route path='/cart' element={<Cart/>}/>
            </Routes>
            <ToastContainer/>
        </main>
    )
}

export default Main