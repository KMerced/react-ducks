import MainNav2 from "./../components/MainNav2";
import BackButton from "./../components/BackButton";
import FavducksGallery from "./FavducksGallery";

const FavducksInfo = () => {
    return (
        <>
            <h1>Favorite Ducks List</h1>
            <h3>What I consider to be my favorite ducks for each category.</h3>

            <h2>Main Navigation</h2>
            <MainNav2/>

            <FavducksGallery/>

            <BackButton/>
        </>
    )
}

export default FavducksInfo;