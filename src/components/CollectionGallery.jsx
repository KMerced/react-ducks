import "./../css/CollectionGallery.css";
import {Link} from "react-router-dom";
import {useState} from "react";
import spring_full_set_2025 from "../css/images/ducks/spring_full_set_2025.jpg";
import frankies_green_glitter from "../css/images/ducks/frankie_green_glitter.jpg";
import munchkin_bath from "../css/images/ducks/munchkin_bath.jpg";
import outlaw from "../css/images/ducks/outlaw.jpg";


const CollectionGallery = () => {

  const [slideIndex, setslideIndex] = useState(0);
    const importAll = (resource) => {
        return resource.keys().map(resource);
    };

    const images = importAll(
        require.context("../css/images/ducks", false, /\.(png|jpe?g|svg$|webp)/)
    );

    const nextImage = () =>{
       setslideIndex(slideIndex < images.length-1?slideIndex+1:0);
    };

    const previousImage = () => {
       setslideIndex(slideIndex > 0?slideIndex-1:images.length -1);
    };



const ducks = [
  {collection: "All Ducks",ducks: 19,img: images[slideIndex],link: "/Allducks"},
  {collection: "Brand Name Ducks",ducks: 12,img: spring_full_set_2025,link: "/BrandnameDucks"},
  {collection: "Jumbo Ducks",ducks: 1,img: frankies_green_glitter,link: "/"},
  {collection: "Novelty Ducks",ducks: 5,img: outlaw,link: "/"},
  {collection: "Misc. Ducks",ducks: 1,img: munchkin_bath,link: "/"},
];


  return (
    <main id="duck-collection" className="columns">
        {/*Can't use forEach here because nothing renders if you use that apparently, gotta use map*/}
        {/*Learned map here: https://www.w3schools.com/jsreF/jsref_map.asp*/}
      {ducks.map((ducks, slideIndex) => (
        <section className="collection">
          <h3>Ducks: {ducks.ducks}</h3>
          <img src={ducks.img}/>
        
        {/*This makes it so that the arrows only show for the "All ducks" section. I don't want all of them to have a slideshow yet.*/}
        {/*Basically, if the slideIndex is the first one, show the arrows, otherwise don't show any of the arrows (which is what the null does since null means nothing)*/}
        {slideIndex == [0] ? (
          <>
            <a className="arrow" onClick={previousImage} id="left-arrow" href="#">&lt;</a>
            <a className="arrow" onClick={nextImage} id="right-arrow" href="#">&gt;</a>
          </>
        ):null}
          <Link to={ducks.link}>{ducks.collection}</Link>
        </section>
      ))}
    </main>
  );
};

export default CollectionGallery;
