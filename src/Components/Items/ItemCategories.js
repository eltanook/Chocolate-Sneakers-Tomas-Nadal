import { NavDropdown } from "react-bootstrap"
import { Link } from "react-router-dom"


const ItemCategories = () => {
    return (
        <NavDropdown>         
                <div id="selector-categorias">
                    <NavDropdown.Item as='span'> <Link to={'/'}>All the categories</Link> </NavDropdown.Item>
                    <NavDropdown.Item as='span'> <Link to={'/categoria/electronics'}>Electronics</Link> </NavDropdown.Item>
                    <NavDropdown.Item as='span'> <Link to={'/categoria/jewelery'}>Jewelery</Link> </NavDropdown.Item>
                    <NavDropdown.Item as='span'> <Link to={`/categoria/men's clothing`}>Men's clothing</Link> </NavDropdown.Item>
                    <NavDropdown.Item as='span'> <Link to={`/categoria/women's clothing`}>Women's clothing</Link> </NavDropdown.Item> 
                </div>
        </NavDropdown>
    )
}

export default ItemCategories
