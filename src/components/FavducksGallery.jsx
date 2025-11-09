import "./../css/FavducksGallery.css";
import {Link} from "react-router-dom";
import {useState} from "react";
import mini_dovakiin from "../css/images/ducks/mini_dovakiin.jpg";
import munchkin_bath from "../css/images/ducks/munchkin_bath.jpg";
import frankie_green_glitter from "../css/images/ducks/frankie_green_glitter.jpg";
import outlaw from "../css/images/ducks/outlaw.jpg";

const FavducksGallery = () => {
    const favducks = [
        {type: "Favorite Brand Name Duck",name: "Tubbz Cosplaying Ducks: Mini Dovakiin Duck", img: mini_dovakiin,link: "/"},
        {type: "Favorite Jumbo Duck",name: "Frankie's Fun Park Green Glitter Duck", img: frankie_green_glitter,link: "/"},
        {type: "Favorite Novelty Duck",name: "Outlaw Duck", img: outlaw,link: "/"},
        {type: "Favorite Misc. Duck",name: "Munchkin's Bath Duck", img: munchkin_bath,link: "/"},
    ];

    return (
        <main id="favducks-main" className="columns">
            {favducks.map((favducks)=> (
                <section className="fav-ducks">
                    <h3>{favducks.type}</h3>
                    <img src={favducks.img}/>
                    <Link to={favducks.link}>{favducks.name}</Link>
                </section>
            ))}
        </main>
    )
};

export default FavducksGallery;