import Header from './Header';
import Footer from './Footer';
import ItemListContainer from './Components/Items/ItemListContainer';
import ItemDetailContainer from './Components/Items/ItemDetailContainer';
//import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

function App (titulo) {
    
    return (
       <> 
        <div className="container">
            <Header titulo={titulo}/>
            <ItemListContainer name="pirulo"/>
            <ItemDetailContainer/>
            <Footer/>
        </div>
       </>
    )  
}

export default App