import { Navbar } from "react-bootstrap"
import CartWidget from './CartWidget'

const Nav = () => {
    return (
       <Navbar> 
            <nav className="nav"> 
                <CartWidget  id="Widgets"/>
                <a id="registrarse" href="#iniciar-sesion/registrarse">Iniciar sesión / Registrarse</a>
            </nav>
        </Navbar>
    )
}

export default Nav
