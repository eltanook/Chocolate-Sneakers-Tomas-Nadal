import { NavDropdown } from "react-bootstrap"
import { Link } from "react-router-dom"


const ItemCategories = () => {
    return (
        <NavDropdown>         
                <div id="selector-categorias">
                    <NavDropdown.Item as='span'> <Link to={'/'}>All</Link> </NavDropdown.Item>
                    <NavDropdown.Item as='span'> <Link to={`/brand/Balenciaga`}>Balenciaga</Link> </NavDropdown.Item>
                    <NavDropdown.Item as='span'> <Link to={'/brand/Vans'}>Vans</Link> </NavDropdown.Item>
                    <NavDropdown.Item as='span'> <Link to={'/brand/Nike'}>Nike</Link> </NavDropdown.Item>
                    <NavDropdown.Item as='span'> <Link to={`/brand/Adidas`}>Adidas</Link> </NavDropdown.Item>
                </div>
        </NavDropdown>
    )
}

export default ItemCategories
