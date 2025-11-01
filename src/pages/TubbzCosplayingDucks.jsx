import "./../css/BrandnameDucks.css";
import Header from "./../components/Header";
import Footer from "./../components/Footer";
import BackButton from "./../components/BackButton";
import TubbzGallery from "../components/TubbzGallery";
import TubbzInfo from "../components/TubbzInfo";

const TubbzCosplayingDucks = () => {
    return (
        <>
        <Header/>
        <title>Tubbz Ducks</title>

        <div id="brandnameducks-nav">
            <div id="brandnameducks-div">
                 <TubbzInfo/>

                 <TubbzGallery/>

                 <BackButton/>

                 <Footer/>
            </div>
        </div>


        </>
    )
}

export default TubbzCosplayingDucks;