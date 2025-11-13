import "./../css/Noveltyducks.css";
import Header from "./../components/Header";
import Footer from "./../components/Footer";
import NoveltyducksInfo from "../components/NoveltyducksInfo";
import NoveltyducksGallery from "../components/NoveltyducksGallery";
import BackButton from "./../components/BackButton";

const Noveltyducks = () => {
    return (
        <>
            <Header/>
            <title>Novelty Ducks</title>

            <div id="noveltyducks-nav">
                <div id="noveltyducks-div">
                    <NoveltyducksInfo/>

                    <NoveltyducksGallery/>

                    <BackButton/>
                </div>
            </div>

            <Footer/>
        </>
    )
}

export default Noveltyducks;