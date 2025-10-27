import "./../css/Navigation.css";
import {Link} from "react-router-dom";

const MainNav = () => {
    return (
    <nav id="main-nav">
        <ul className="columns">
            <li><Link to="/Collection">Explore the collection</Link></li>
            <li><Link to="/Duckyalerts">Click here for Ducky Alerts</Link></li>
            <li><Link to="/Favoriteducks">Visit the favorite ducks list</Link></li>
        </ul>
    </nav>
    )
};

export default MainNav;