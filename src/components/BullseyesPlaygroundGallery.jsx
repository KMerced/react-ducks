import "./../css/BrandnameducksGallery.css";
import {Link} from "react-router-dom";
import butterfly from "../css/images/ducks/butterfly.jpg";
import fairy from "../css/images/ducks/fairy.jpg";
import firefly from "../css/images/ducks/firefly.jpg";
import football from "../css/images/ducks/football.jpg";
import pink_glitter_witch from "../css/images/ducks/pink_glitter_witch.jpg";
import pumpkin from "../css/images/ducks/pumpkin.jpg";
import scout from "../css/images/ducks/scout.jpg";
import skeleton from "../css/images/ducks/skeleton.jpg";
import zombie from "../css/images/ducks/zombie.jpg";

const ducks = [
    {name: "Butterfly Duck", img: butterfly, link: "/Duckpage"},
    {name: "Fairy Duck", img: fairy, link: "/Duckpage"},
    {name: "Firefly Duck", img: firefly, link: "/Duckpage"},
    {name: "Football Duck", img: football, link: "/Duckpage"},
    {name: "Pink Glitter Witch Duck", img: pink_glitter_witch, link: "/Duckpage"},
    {name: "Pumpkin Duck", img: pumpkin, link: "/Duckpage"},
    {name: "Scout Duck", img: scout, link: "/Duckpage"},
    {name: "Skeleton Duck", img: skeleton, link: "/Duckpage"},
    {name: "Zombie Duck", img: zombie, link: "/Duckpage"}
]

const BullseyesPlaygroundGallery = () => {
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

export default BullseyesPlaygroundGallery;