import { Navbar, NavDropdown} from "react-bootstrap"
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <div id="navbar">

        <Navbar>


            <NavDropdown>         
             <div id="selector-categorias">
                <NavDropdown.Item as='span'> <Link to={'/categoria/electronics'}>Electronics</Link> </NavDropdown.Item>
                <NavDropdown.Item as='span'> <Link to={'/categoria/jewelery'}>Jewelery</Link> </NavDropdown.Item>
                <NavDropdown.Item as='span'> <Link to={`/categoria/men's clothing`}>Men's clothing</Link> </NavDropdown.Item>
                <NavDropdown.Item as='span'> <Link to={`/categoria/women's clothing`}>Women's clothing</Link> </NavDropdown.Item> 
            </div>
            </NavDropdown>
  

            <Link to={"/"}> <span className="material-icons">home</span> </Link>

            <Link to={"/cart"}> <span className="material-icons">shopping_cart</span> </Link>
                        
            <span id="registrarse" >Iniciar sesión / Registrarse</span>

        </Navbar>
        </div>
    )
}

export default NavBar
