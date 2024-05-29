import { Link } from "react-router-dom"
import Search from './Search';

export default function TheHeader(){
    return (
        <div>
            <nav className="nav-bar">
                <Link className="logo">OMdbAPI.COM</Link>
                <nav className="menu-bar">
                    <Link>Search</Link> 
                    <Link>Movie</Link> 
                    <Link>About</Link>   
                </nav>
                <Link className="profile"></Link>
                    
            </nav>
        </div>
    )
}