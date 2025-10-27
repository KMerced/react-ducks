import "./../css/BackButton.css";
import {Link} from "react-router-dom";

const BackButton = () => {
    return (
        <div className="back-button">
            <a><Link to="/">Click here to go back</Link></a>
        </div>
    )
}

export default BackButton;