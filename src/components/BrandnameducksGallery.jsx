import "./../css/BrandnameducksGallery.css";
import {Link} from "react-router-dom";
import beige_easter from "../css/images/ducks/beige_easter.jpg";
import butterfly from "../css/images/ducks/butterfly.jpg";
import fairy from "../css/images/ducks/fairy.jpg";
import firefly from "../css/images/ducks/firefly.jpg";
import football from "../css/images/ducks/football.jpg";
import mini_dovakiin from "../css/images/ducks/mini_dovakiin.jpg";
import pink_glitter_witch from "../css/images/ducks/pink_glitter_witch.jpg";
import pumpkin from "../css/images/ducks/pumpkin.jpg";
import purple_with_green_bill from "../css/images/ducks/purple_with_green_bill.jpg";
import scout from "../css/images/ducks/scout.jpg";
import skeleton from "../css/images/ducks/skeleton.jpg";
import zombie from "../css/images/ducks/zombie.jpg";

const ducks = [
    {name: "Beige Easter Duck", img: beige_easter, link: "/"},
    {name: "Butterfly Duck", img: butterfly, link: "/"},
    {name: "Fairy Duck", img: fairy, link: "/"},
    {name: "Firefly Duck", img: firefly, link: "/"},
    {name: "Football Duck", img: football, link: "/"},
    {name: "Mini Dovakiin Duck", img: mini_dovakiin, link: "/"},
    {name: "Pink Glitter Witch Duck", img: pink_glitter_witch, link: "/"},
    {name: "Pumpkin Duck", img: pumpkin, link: "/"},
    {name: "Purple With Green Bill Duck", img: purple_with_green_bill, link: "/"},
    {name: "Scout Duck", img: scout, link: "/"},
    {name: "Skeleton Duck", img: skeleton, link: "/"},
    {name: "Zombie Duck", img: zombie, link: "/"}
]

const BrandnameducksGallery = () => {
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

export default BrandnameducksGallery;