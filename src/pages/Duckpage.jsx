import Header from "./../components/Header";
import Footer from "./../components/Footer";
import MainNav2 from "../components/MainNav2";
import Duckimage from "../components/Duckimage";
import Duckinfo from "../components/Duckinfo";
import BackButton from "../components/BackButton";
import "./../css/Duckinfo.css";

const Duckpage = () => {
    return (
        <>
            <title>Duck Info Page</title>
            <div id="title">
                <Header/>
                <h1 id="duck_name"></h1>
            </div>

            <h2>Main Navigation</h2>
            <MainNav2/>
            <div className="duck-stuff">
                <Duckimage/>

                <Duckinfo/>
            </div>


            <BackButton/>
            <Footer/>
        </>
    )
}

export default Duckpage;