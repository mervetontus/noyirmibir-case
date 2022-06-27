import {Link} from "react-router-dom"
import logo from "../images/logo.svg"

//Style
import "../styles/NavbarStyle.css"

export default function Navbar() {
    return <nav className="nav">
       
        <Link to="/" className="alca-title"><img src={logo} alt="logo"></img></Link>
        <ul>
            <li>
                <Link to="/show-all-tyres">Show All Tyres</Link>
            </li>
            <li>
                <Link to="/find-a-dealer">Find A Dealer</Link>
            </li>
            <li>
                <Link to="/guides-and-videos">Guides And Videos</Link>
            </li>
            <li>
                <Link to="/go-with">Go With</Link>
            </li>
            <li>
                <Link to="/service-and-help">Service and Help</Link>
            </li>

        </ul>
    </nav>
}