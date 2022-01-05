import Nav from './Components/Navbar/NavBar';


function Header () {

const titulo = "Chocolate Sneakers"

    return (
        <div className="barranav">
            <header>
               <h1>{titulo}</h1> 
            </header>
            <Nav/>
        </div>
    )  
}

export default Header