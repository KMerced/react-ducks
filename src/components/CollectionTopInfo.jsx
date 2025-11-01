import "./../css/Collectionnav.css";
import MainNav2 from "./../components/MainNav2";
import CollectionGallery from "./../components/CollectionGallery";
import BackButton from "./../components/BackButton";

const CollectionTopInfo = () => {
    return (
        <>
        <div id="collection-nav">
            <div id="collection-div">
             <h1>The Full Collection</h1>
            <h3>The full collection of ducks neatly organized into categories for your navigating pleasure! Just click on one and you'll be transported there!</h3>

            <h2>Main Navigation</h2>
            <MainNav2 />

            <CollectionGallery />    

            <BackButton />

            </div>
        </div>

        </>
        
    )
}

export default CollectionTopInfo;