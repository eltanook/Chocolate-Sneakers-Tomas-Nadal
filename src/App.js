import Header from './Header';
import Footer from './Footer';
import {BrowserRouter} from "react-router-dom";
import Main from './Main';
import CartContextProvider from './Components/Navbar/CartContext';


function App (title) {
    
    return (
        <CartContextProvider>
        <BrowserRouter>  
                <Header title={title}/>
                <Main/>
                <Footer/>
        </BrowserRouter>  
        </CartContextProvider>
    )  
}

export default App