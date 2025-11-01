import "./../css/BrandnameDucks.css";
import Header from "./../components/Header";
import Footer from "./../components/Footer";
import BackButton from "./../components/BackButton";
import InfantinoGallery from "../components/InfantinoGallery";
import InfantinoInfo from "../components/InfantinoInfo";

const Infantino = () => {
    return (
        <>
        <Header/>
        <title>Infantino Ducks</title>

        <div id="brandnameducks-nav">
            <div id="brandnameducks-div">
                 <InfantinoInfo/>

                 <InfantinoGallery/>

                 <BackButton/>

                 <Footer/>
            </div>
        </div>


        </>
    )
}

export default Infantino;