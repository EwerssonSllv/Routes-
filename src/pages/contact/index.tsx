import { Link } from "react-router"

export function Contact() {
    return (
        <div>
            <h1>Contact</h1>
            <h3>Phone: (XXX) XXX-XXXX</h3>
            <hr />

            <Link to="/about">About</Link>
            <br />
            <Link to="/">Home</Link>

        </div>
    )
}