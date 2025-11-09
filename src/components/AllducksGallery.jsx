import "./../css/AllducksGallery.css";
import {Link} from "react-router-dom";
import batman from "../css/images/ducks/batman.jpg";
import beige_easter from "../css/images/ducks/beige_easter.jpg";
import blue from "../css/images/ducks/blue.jpg";
import butterfly from "../css/images/ducks/butterfly.jpg";
import construction_worker from "../css/images/ducks/construction_worker.jpg";
import fairy from "../css/images/ducks/fairy.jpg";
import firefly from "../css/images/ducks/firefly.jpg";
import football from "../css/images/ducks/football.jpg";
import frankie_green_glitter from "../css/images/ducks/frankie_green_glitter.jpg";
import mini_dovakiin from "../css/images/ducks/mini_dovakiin.jpg";
import munchkin_bath from "../css/images/ducks/munchkin_bath.jpg";
import outlaw from "../css/images/ducks/outlaw.jpg";
import pink_glitter_witch from "../css/images/ducks/pink_glitter_witch.jpg";
import pumpkin from "../css/images/ducks/pumpkin.jpg";
import purple_with_green_bill from "../css/images/ducks/purple_with_green_bill.jpg";
import scout from "../css/images/ducks/scout.jpg";
import skeleton from "../css/images/ducks/skeleton.jpg";
import witch from "../css/images/ducks/witch.jpg";
import zombie from "../css/images/ducks/zombie.jpg";

const ducks = [
    {name: "Batman Duck", img: batman, link: "/"},
    {name: "Beige Easter Duck", img: beige_easter, link: "/"},
    {name: "Blue Duck", img: blue, link: "/"},
    {name: "Butterfly Duck", img: butterfly, link: "/"},
    {name: "Construction Worker Duck", img: construction_worker, link: "/"},
    {name: "Fairy Duck", img: fairy, link: "/"},
    {name: "Firefly Duck", img: firefly, link: "/"},
    {name: "Football Duck", img: football, link: "/"},
    {name: "Frankie's Fun Park Green Glitter Duck", img: frankie_green_glitter, link: "/"},
    {name: "Mini Dovakiin Duck", img: mini_dovakiin, link: "/"},
    {name: "Munchkin's Bath Duck", img: munchkin_bath, link: "/"},
    {name: "Outlaw Duck", img: outlaw, link: "/"},
    {name: "Pink Glitter Witch Duck", img: pink_glitter_witch, link: "/"},
    {name: "Pumpkin Duck", img: pumpkin, link: "/"},
    {name: "Purple With Green Bill Duck", img: purple_with_green_bill, link: "/"},
    {name: "Scout Duck", img: scout, link: "/"},
    {name: "Skeleton Duck", img: skeleton, link: "/"},
    {name: "Witch Duck", img: witch, link: "/"},
    {name: "Zombie Duck", img: zombie, link: "/"}
]

const AllducksGallery = () => {
    return (
        <main id="all-ducks-main" className="columns">
            {ducks.map((ducks) => (
                <section className="all-ducks">
                        <h3>{ducks.name}</h3>
                        <img src={ducks.img}/>
                        <Link to={ducks.link}>{ducks.name}</Link>
                </section>
            ))}
                </main>
    )
};

export default AllducksGallery;
