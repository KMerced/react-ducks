import "./../css/Brandnavigation.css";
import {Link} from "react-router-dom";

const Brandnavigation = () => {
    return (
        <nav id="brand-nav" className="hide-small">
                <ul className="nav">
                    <li><Link to="/Brandnameducks">All ducks</Link></li>
                    <li><Link to="/BullseyesPlayground">Bullseye's Playground</Link></li>
                    <li><Link to="/Infantino">Infantino</Link></li>
                    <li><Link to="/Tubbz">Tubbz Cosplaying Ducks</Link></li>
                </ul>
        </nav>
    )
}

export default Brandnavigation;