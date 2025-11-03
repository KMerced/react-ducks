import "./../css/Navigation2.css";
import {Link} from "react-router-dom";
import {useState} from "react";

const MainNav2 = () => {

    const [menuOpen, setmenuOpen] = useState(false);
        const [ham, setHam] = useState(true);
    
        const toggleMenu = () => {
            setmenuOpen(!menuOpen);
            setHam(!ham);
        }

    return (
    <>
        <div onClick={toggleMenu} id="hamburger" class="hamburger">&#9776;</div>
        <nav id="main-nav2" className={menuOpen?"":"hide-small"}>
            <ul className="columns">
                <li><Link to="/Collection">Explore the collection</Link></li>
                <li><Link to="/Duckyalerts">Click here for Ducky Alerts</Link></li>
                <li><Link to="/Favoriteducks">Visit the favorite ducks list</Link></li>
            </ul>
        </nav>
    </>
    )
};

export default MainNav2;