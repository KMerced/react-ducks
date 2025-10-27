import "./../css/Navigation2.css";
import {Link} from "react-router-dom";

const MainNav2 = () => {
    return (
    <nav id="main-nav2">
        <ul className="columns">
            <li><Link to="/Collection">Explore the collection</Link></li>
            <li><Link to="/Duckyalerts">Click here for Ducky Alerts</Link></li>
            <li><Link to="/Favoriteducks">Visit the favorite ducks list</Link></li>
        </ul>
    </nav>
    )
};

export default MainNav2;