import { Badge, Navbar} from "react-bootstrap"
import { Link } from "react-router-dom"


const NavBar = () => {

    return (
        <div id="navbar">
            <Navbar>

                <Link to={"/cart"}> <span className="material-icons">shopping_cart</span> <Badge>0</Badge> </Link>
                            
                <span id="registrarse" >Log in / Register</span>

            </Navbar>
        </div>
    )
}

export default NavBar
