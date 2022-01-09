import ItemDetailContainer from "./Components/Items/ItemDetailContainer"
import ItemListContainer from "./Components/Items/ItemListContainer"
import {Routes, Route} from "react-router-dom";
import "./Components/Items/Item.scss";
import Cart from "./Components/Navbar/Cart";


const Main = () => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/item/:id" element={<ItemDetailContainer/>}/>
                <Route path="/categoria/:id" element={<ItemListContainer/>}/>
                <Route path="/cart" element={<Cart/>}/>
            </Routes>
        </main>
    )
}

export default Main