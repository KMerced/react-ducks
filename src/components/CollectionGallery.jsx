import "./../css/CollectionGallery.css";
import {Link} from "react-router-dom";
import fall_full_set_2025 from "../css/images/fall_full_set_2025.jpg";
import spring_full_set_2025 from "../css/images/spring_full_set_2025.jpg";
import frankies_green_glitter from "../css/images/frankie_green_glitter.jpg";
import outlaw from "../css/images/outlaw.jpg";
import munchkin from "../css/images/munchkin_bath.jpg";

const ducks = [
  {collection: "All Ducks",ducks: 19,img: fall_full_set_2025,link: "/Allducks"},
  {collection: "Brand Name Ducks",ducks: 12,img: spring_full_set_2025,link: "/BrandnameDucks"},
  {collection: "Jumbo Ducks",ducks: 1,img: frankies_green_glitter,link: "/"},
  {collection: "Novelty Ducks",ducks: 5,img: outlaw,link: "/"},
  {collection: "Misc. Ducks",ducks: 1,img: munchkin,link: "/"},
];

const CollectionGallery = () => {
  return (
    <main id="duck-collection" className="columns">
        {/*Can't use forEach here because nothing renders, gotta use map*/}
        {/*Learned map here: https://www.w3schools.com/jsreF/jsref_map.asp*/}
      {ducks.map((ducks) => (
        <section className="collection">
          <h3>Ducks: {ducks.ducks}</h3>
          <img src={ducks.img}/>
          <Link to={ducks.link}>{ducks.collection}</Link>
        </section>
      ))}
    </main>
  );
};

export default CollectionGallery;
