import { Badge, Container, Navbar, Nav,} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Login from '../Components/Extras/Login';
import { UseCartContext } from '../Components/Cart/CartContext'


const NavBar = () => {
    const {CartList, IconCart} = UseCartContext();
    
    return (
        <Navbar collapseOnSelect expand="lg" className='header'>
        <Container>
        <Navbar.Brand><Link id='brand' to={'/'}><h1>Chocolate Sneakers</h1></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
            <Nav.Link>
                <Link to={'/cart'}> 
                <span className='material-icons'>shopping_cart</span> 
                {CartList < 1 ? <Badge>0</Badge> : <Badge>{IconCart()}</Badge>}
                </Link>
            </Nav.Link>
            <Nav.Link eventKey={2}>
            <Login/>
            </Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}

export default NavBar
