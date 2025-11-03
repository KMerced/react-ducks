import "./../css/BrandnameducksGallery.css";
import {Link} from "react-router-dom";
import mini_dovakiin from "../css/images/ducks/mini_dovakiin.jpg";


const ducks = [
    {name: "Mini Dovakiin Duck", img: mini_dovakiin, link: "/"}
]

const TubbzGallery = () => {
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

export default TubbzGallery;