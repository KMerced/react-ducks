import "./../css/Favoriteducks.css";
import Header from "./../components/Header";
import Footer from "./../components/Footer";
import FavducksInfo from "../components/FavducksInfo";

const Favoriteducks = () => {
    return (
        <div id="favducks">
            <Header/>

            <title>Favorite Ducks List</title>

            <div id="favducks-nav">
                <div id="favducks-div">
                    <FavducksInfo/>
                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default Favoriteducks;