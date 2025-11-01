import "./../css/Collection.css";
import Header from "./../components/Header";
import Footer from "./../components/Footer";
import CollectionTopInfo from "./../components/CollectionTopInfo";

const Collection = () => {
    return (
        <div id="collection">
            <Header />

            <title>The Full Collection</title>

            <CollectionTopInfo />

            <Footer />
        </div>
    )
}

export default Collection;