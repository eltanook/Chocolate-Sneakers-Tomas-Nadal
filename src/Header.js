import { Link } from 'react-router-dom';
import NavBar from './Components/Navbar/NavBar';


function Header () {
    return (
        <div className="header">
            <h1><Link id='brand' to={'/'}>Chocolate Sneakers</Link></h1> 
            <NavBar/>
        </div>
    )  
}

export default Header