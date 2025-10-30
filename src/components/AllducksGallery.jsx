import "./../css/AllducksGallery.css";
import {Link} from "react-router-dom";
import batman from "../css/images/batman.jpg";
import beige_easter from "../css/images/beige_easter.jpg";
import blue from "../css/images/blue.jpg";
import butterfly from "../css/images/butterfly.jpg";
import construction_worker from "../css/images/construction_worker.jpg";
import fairy from "../css/images/fairy.jpg";
import firefly from "../css/images/firefly.jpg";
import football from "../css/images/football.jpg";
import frankie_green_glitter from "../css/images/frankie_green_glitter.jpg";
import mini_dovakiin from "../css/images/mini_dovakiin.jpg";
import munchkin_bath from "../css/images/munchkin_bath.jpg";
import outlaw from "../css/images/outlaw.jpg";
import pink_glitter_witch from "../css/images/pink_glitter_witch.jpg";
import pumpkin from "../css/images/pumpkin.jpg";
import purple_with_green_bill from "../css/images/purple_with_green_bill.jpg";
import scout from "../css/images/scout.jpg";
import skeleton from "../css/images/skeleton.jpg";
import witch from "../css/images/witch.jpg";
import zombie from "../css/images/zombie.jpg";

const AllducksGallery = () => {
    return (
        <main id="all-ducks-main" class="columns">
                    <section class="all-ducks">
                        <h3>Batman Duck</h3>
                        <img src={batman}/>
                        <Link to="/">Batman Duck</Link>
                    </section>
                    <section class="all-ducks">
                        <h3>Beige Easter Duck</h3>
                        <img src={beige_easter}/>
                        <Link to="/">Beige Easter Duck</Link>
                    </section>
                    <section class="all-ducks">
                        <h3>Blue Duck</h3>
                        <img src={blue}/>
                        <Link to="/">Blue Duck</Link>
                    </section>
                    <section class="all-ducks">
                        <h3>Butterfly Duck</h3>
                        <img src={butterfly}/>
                        <Link to="/">Butterfly Duck</Link>
                    </section>
                   
                    <section class="all-ducks">
                        <h3>Construction Worker Duck</h3>
                        <img src={construction_worker}/>
                        <Link to="/">Construction Worker Duck</Link>
                    </section>
                    
                    <section class="all-ducks">
                        <h3>Fairy Duck</h3>
                        <img src={fairy}/>
                        <Link to="/">Fairy Duck</Link>
                    </section>
                    <section class="all-ducks">
                        <h3>Firefly Duck</h3>
                        <img src={firefly}/>
                        <Link to="/">Firefly Duck</Link>
                    </section>
                    <section class="all-ducks">
                        <h3>Football Duck</h3>
                        <img src={football}/>
                        <Link to="/">Football Duck</Link>
                    </section>
                    <section class="all-ducks">
                        <h3>Frankie's Fun Park Green Glitter Duck</h3>
                        <img src={frankie_green_glitter}/>
                        <Link to="/">Frankie's Fun Park Green Glitter Duck</Link>
                    </section>
                    
                    <section class="all-ducks">
                        <h3>Mini Dovakin Duck</h3>
                        <img src={mini_dovakiin}/>
                        <Link to="/">Mini Dovakiin Duck</Link>
                    </section>
                    <section class="all-ducks">
                        <h3>Munchkin's Bath Duck</h3>
                        <img src={munchkin_bath}/>
                        <Link to="/">Munchkin's Bath Duck</Link>
                    </section>
                    
                    <section class="all-ducks">
                        <h3>Outlaw Duck</h3>
                        <img src={outlaw}/>
                        <Link to="/">Outlaw Duck</Link>
                    </section>
                   
                    <section class="all-ducks">
                        <h3>Pink Glitter Witch Duck</h3>
                        <img src={pink_glitter_witch}/>
                        <Link to="/">Pink Glitter Witch Duck</Link>
                    </section>
                    <section class="all-ducks">
                        <h3>Pumpkin Duck</h3>
                        <img src={pumpkin}/>
                        <Link to="/">Pumpkin Duck</Link>
                    </section>
                    <section class="all-ducks">
                        <h3>Purple With Green Bill Duck</h3>
                        <img src={purple_with_green_bill}/>
                        <Link to="/">Purple With Green Bill Duck</Link>
                    </section>
                   
                    <section class="all-ducks">
                        <h3>Scout Duck</h3>
                        <img src={scout}/>
                        <Link to="/">Scout Duck</Link>
                    </section>
                    <section class="all-ducks">
                        <h3>Skeleton Duck</h3>
                        <img src={skeleton}/>
                        <Link to="/">Skeleton Duck</Link>
                    </section>
                    
                    <section class="all-ducks">
                        <h3>Witch Duck</h3>
                        <img src={witch}/>
                        <Link to="/">Witch Duck</Link>
                    </section>

                    <section class="all-ducks">
                        <h3>Zombie Duck</h3>
                        <img src={zombie}/>
                        <Link to="/">Zombie Duck</Link>
                    </section>
                </main>
    )
}

export default AllducksGallery;
