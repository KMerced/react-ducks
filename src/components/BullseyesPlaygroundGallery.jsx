import "./../css/BrandnameducksGallery.css";
import {Link} from "react-router-dom";
import butterfly from "../css/images/butterfly.jpg";
import fairy from "../css/images/fairy.jpg";
import firefly from "../css/images/firefly.jpg";
import football from "../css/images/football.jpg";
import pink_glitter_witch from "../css/images/pink_glitter_witch.jpg";
import pumpkin from "../css/images/pumpkin.jpg";
import scout from "../css/images/scout.jpg";
import skeleton from "../css/images/skeleton.jpg";
import zombie from "../css/images/zombie.jpg";

const ducks = [
    {name: "Butterfly Duck", img: butterfly, link: "/"},
    {name: "Fairy Duck", img: fairy, link: "/"},
    {name: "Firefly Duck", img: firefly, link: "/"},
    {name: "Football Duck", img: football, link: "/"},
    {name: "Pink Glitter Witch Duck", img: pink_glitter_witch, link: "/"},
    {name: "Pumpkin Duck", img: pumpkin, link: "/"},
    {name: "Scout Duck", img: scout, link: "/"},
    {name: "Skeleton Duck", img: skeleton, link: "/"},
    {name: "Zombie Duck", img: zombie, link: "/"}
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