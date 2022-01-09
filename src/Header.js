import NavBar from './Components/Navbar/NavBar';


function Header () {

    const titulo = "Chocolate Sneakers"

    return (
        <div className="header">
            <header>
               <h1>{titulo}</h1> 
            </header>
            <NavBar/>
        </div>
    )  
}

export default Header