import "./../css/JumboducksGallery.css";
import {Link} from "react-router-dom";
import frankie_green_glitter from "../css/images/ducks/frankie_green_glitter.jpg";

const ducks = [
    {name: "Frankie's Fun Park Green Glitter Duck", img: frankie_green_glitter, link: "/Duckpage"}
]

const JumboducksGallery = () => {
    return (
        <>
            <main id="jumboducks-main" className="columns">
                {ducks.map((ducks) => (
                    <section className="jumboducks">
                        <h3>{ducks.name}</h3>
                        <img src={ducks.img}/>
                        <Link to={ducks.link}>{ducks.name}</Link>
                    </section>
                ))}
            </main>
        </>
    )
};

export default JumboducksGallery;