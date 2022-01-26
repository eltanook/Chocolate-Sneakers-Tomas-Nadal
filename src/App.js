import Footer from './Body/Footer';
import {BrowserRouter} from 'react-router-dom';
import Main from './Body/Main';
import CartContextProvider from './Components/Cart/CartContext';
import NavBar from './Body/NavBar';


function App () {
    return (
        <CartContextProvider>
            <BrowserRouter>  
                <NavBar/>
                <Main/>
                <Footer/>
            </BrowserRouter>  
        </CartContextProvider>
    )  
}

export default App