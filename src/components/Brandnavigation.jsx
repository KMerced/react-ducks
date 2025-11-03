import "./../css/Brandnavigation.css";
import {Link} from "react-router-dom";
import {useState} from "react";

const Brandnavigation = () => {
    const [menuOpen, setmenuOpen] = useState(false);
            const [ham, setHam] = useState(true);
        
            const toggleMenu = () => {
                setmenuOpen(!menuOpen);
                setHam(!ham);
            }

    return (
        <>
            <div onClick={toggleMenu} id="hamburger" class="hamburger">&#9776;</div>
            <nav id="brand-nav" className={menuOpen?"":"hide-small"}>
                    <ul className="nav">
                        <li><Link to="/Brandnameducks">All ducks</Link></li>
                        <li><Link to="/BullseyesPlayground">Bullseye's Playground</Link></li>
                        <li><Link to="/Infantino">Infantino</Link></li>
                        <li><Link to="/Tubbz">Tubbz Cosplaying Ducks</Link></li>
                    </ul>
            </nav>

        </>
    )
}

export default Brandnavigation;