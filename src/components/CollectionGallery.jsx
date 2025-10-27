import "./../css/CollectionGallery.css";
import {Link} from "react-router-dom";
import fall_full_set_2025 from "../css/images/fall_full_set_2025.jpg";
import spring_full_set_2025 from "../css/images/spring_full_set_2025.jpg";
import frankies_green_glitter from "../css/images/frankie_green_glitter.jpg";
import outlaw from "../css/images/outlaw.jpg";
import munchkin from "../css/images/munchkin_bath.jpg";

const CollectionGallery = () => {
    return (
        <main id="duck-collection" className="columns">
                    <section className="collection">
                        <h3>Ducks: 19</h3>
                        <img src={fall_full_set_2025}/>
                        <Link to="/">All Ducks</Link>
                    </section>
                    <section className="collection">
                        <h3>Ducks: 12</h3>
                        <img src={spring_full_set_2025}/>
                        <Link to="/">Brand Name Ducks</Link>
                    </section>
                    <section className="collection">
                        <h3>Ducks: 1</h3>
                        <img src={frankies_green_glitter}/>
                        <Link to="/">Jumbo Ducks</Link>
                    </section>
                    <section className="collection">
                        <h3>Ducks: 5</h3>
                        <img src={outlaw}/>
                        <Link to="/">Novelty Ducks</Link>
                    </section>
                    <section className="collection">
                        <h3>Ducks: 1</h3>
                        <img src={munchkin}/>
                        <Link to="/">Misc. Ducks</Link>
                    </section>
        </main>
    )
}

export default CollectionGallery;