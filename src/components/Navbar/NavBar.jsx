import { Link } from "react-router-dom"
import "./NavBar.css"

export default function NavBar(){
    return(
        <div className='nav-bar'>
            <div className="left">left side</div>
            <div className="center">
                <ul className="list-tems">
                <Link to="/home" className="list-tems"><li className="list-tems">Home</li></Link>
                
                <Link to="/posts/new" className="list-tems" ><li className="list-tems">CREATE POST</li></Link>
                
                <Link to="/LogIn" className="list-tems" ><li className="list-tems">LOGIN</li></Link>
                </ul>
                </div>
            <div className="right">right side</div>
        
        </div>
    )
}