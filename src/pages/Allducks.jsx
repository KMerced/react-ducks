import "./../css/Allducks.css";
import Header from "./../components/Header";
import Footer from "./../components/Footer";
import AllducksNav from './../components/AllducksNav';
import AllducksGallery from "./../components/AllducksGallery";
import BackButton from "./../components/BackButton";

const Allducks = () => {
    return (
        <>
            <Header />
            <title>All Ducks</title>

        <div id="allducks-nav">
            <div id="allducks-div">
            <AllducksNav />

            <AllducksGallery />

            
            <BackButton />
            </div>
        </div>

            <Footer />
        </>
    )
}

export default Allducks;