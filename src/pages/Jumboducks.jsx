import "./../css/Jumboducks.css";
import Header from "./../components/Header";
import Footer from "./../components/Footer";
import JumboducksInfo from "../components/JumboducksInfo";
import JumboducksGallery from "../components/JumboducksGallery";
import BackButton from "./../components/BackButton";

const Jumboducks = () => {
    return (
        <>
            <Header/>
            <title>Jumbo Ducks</title>

            <div id="jumboducks-nav">
                <div id="jumboducks-div">
                    <JumboducksInfo/>

                    <JumboducksGallery/>

                    <BackButton/>
                </div>
            </div>

                <Footer/>
        </>
    )
}

export default Jumboducks;