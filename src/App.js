import Header from './Header';
import Footer from './Footer';
import {BrowserRouter} from "react-router-dom";
import Main from './Main';


function App (title) {
    
    return (
            <BrowserRouter> 
                    <Header title={title}/>
                    <Main/>
                    <Footer/>
            </BrowserRouter>  
    )  
}

export default App