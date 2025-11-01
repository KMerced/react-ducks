import "./../css/BrandnameDucks.css";
import Header from "./../components/Header";
import Footer from "./../components/Footer";
import BackButton from "./../components/BackButton";
import BullseyesPlaygroundGallery from "../components/BullseyesPlaygroundGallery";
import BullseyesPlaygroundInfo from "../components/BullseyesPlaygroundInfo";

const BullseyesPlayground = () => {
    return (
        <>
        <Header/>
        <title>Bullseye's Playground Ducks</title>

        <div id="brandnameducks-nav">
            <div id="brandnameducks-div">
                 <BullseyesPlaygroundInfo/>

                 <BullseyesPlaygroundGallery/>

                 <BackButton/>

                 <Footer/>
            </div>
        </div>


        </>
    )
}

export default BullseyesPlayground;