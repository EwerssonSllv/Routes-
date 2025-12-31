import { Link } from "react-router"

export function NotFound(){
    return(
        <div>
            <h1>Page Not Found</h1>
            <Link to="/">Go Home</Link>
        </div>
    )
}