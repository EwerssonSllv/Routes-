import { Link } from "react-router"

export function Home(){
    return(
        <div>
            <h1>Home!</h1>
            <span>First page with navigation!</span>
            <br/>
            <Link to="/about">About</Link>
        </div>
    )
}