import Header from './Header';
import Footer from './Footer';
import {BrowserRouter} from "react-router-dom";
import Main from './Main';


function App (titulo) {
    
    return (
       <BrowserRouter> 
            <Header titulo={titulo}/>
            <Main/>
            <Footer/>
       </BrowserRouter>
    )  
}

export default App