import "./../css/BrandnameducksGallery.css";
import {Link} from "react-router-dom";
import beige_easter from "../css/images/beige_easter.jpg";
import purple_with_green_bill from "../css/images/purple_with_green_bill.jpg";

const ducks = [
    {name: "Beige Easter Duck", img: beige_easter, link: "/"},
    {name: "Purple With Green Bill Duck", img: purple_with_green_bill, link: "/"},
]

const InfantinoGallery = () => {
    return (
        <main id="brandducks-main" className="columns">
            {ducks.map((ducks) => (
                <section className="brand-ducks">
                <h3>{ducks.name}</h3>
                <img src={ducks.img}/>
                <Link to={ducks.link}>{ducks.name}</Link>
            </section>
            ))}
        </main>
    ) 
}

export default InfantinoGallery;