import "./../css/Collection.css";
import Header from "./../components/Header";
import Footer from "./../components/Footer";
import CollectionNav from "./../components/CollectionNav";

const Collection = () => {
    return (
        <div id="collection">
            <Header />

            <title>The Full Collection</title>

            <CollectionNav />

            <Footer />
        </div>
    )
}

export default Collection;