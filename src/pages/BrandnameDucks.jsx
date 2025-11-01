import "./../css/BrandnameDucks.css";
import Header from "./../components/Header";
import Footer from "./../components/Footer";
import BackButton from "./../components/BackButton";
import BrandnameducksInfo from "./../components/BrandnameducksInfo";
import BrandnameducksGallery from "../components/BrandnameducksGallery";

const BrandnameDucks = () => {
    return (
        <>
            <Header />
            <title>Brand Name Ducks</title>

            <div id="brandnameducks-nav">
                <div id="brandnameducks-div">

                <BrandnameducksInfo/>


                <BrandnameducksGallery/>


                <BackButton />
                </div>
            </div>

            <Footer />
        </>
    )
}

export default BrandnameDucks;