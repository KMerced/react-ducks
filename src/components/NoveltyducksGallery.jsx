import "./../css/NoveltyducksGallery.css";
import {Link} from "react-router-dom";
import batman from "../css/images/ducks/batman.jpg";
import blue from "../css/images/ducks/blue.jpg";
import construction_worker from "../css/images/ducks/construction_worker.jpg";
import outlaw from "../css/images/ducks/outlaw.jpg";
import witch from "../css/images/ducks/witch.jpg";

const ducks = [
    {name: "Batman Duck", img: batman, link: "/Duckpage"},
    {name: "Blue Duck", img: blue, link: "/Duckpage"},
    {name: "Construction Worker Duck", img: construction_worker, link: "/Duckpage"},
    {name: "Outlaw Duck", img: outlaw, link: "/Duckpage"},
     {name: "Witch Duck", img: witch, link: "/Duckpage"}
]

const NoveltyducksGallery = () => {
    return (
        <>
            <main id="noveltyducks-main" className="columns">
                {ducks.map((ducks) => (
                    <section className="novelty-ducks">
                        <h3>{ducks.name}</h3>
                        <img src={ducks.img}/>
                        <Link to={ducks.link}>{ducks.name}</Link>
                    </section>
                ))}
            </main>
        </>
    )
};

export default NoveltyducksGallery;