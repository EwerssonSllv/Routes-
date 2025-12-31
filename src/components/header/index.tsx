import { Link } from "react-router"
import './header.css'

export function Header(){
    return(
        <header>
            <h2>Layout</h2>
            <div>
                <Link to="/">Home</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/about">About</Link>
            </div>
        </header>
    )
}