import NavBar from './Components/Navbar/NavBar';


function Header ({}) {

    const titulo = "Chocolate Sneakers ®"

    return (
        <div className="header">
            <h1 id='brand'>{titulo}</h1> 
            <NavBar/>
        </div>
    )  
}

export default Header