import { useState } from "react"
import Search from "./Search"


const Header = () =>{
    const [searchTerm,setSearchTerm] = useState('')
    
    return (
        <div className="wrapper">
            <img src="./hero.png" alt="hero-image" />
            <h1>Find <span className="text-gradient">Movies</span> You Enjoy Without The Hassle</h1>
            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
            <p className="text-white">{searchTerm}</p>
        </div>
    )
}

export default Header