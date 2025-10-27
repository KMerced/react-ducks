import "./../css/Frontnav.css";
import MainNav from "./../components/MainNav";
import logo from "../css/images/logo.jpg";

const FrontNav = () => {
    return (
        <>
        <div id="front-nav">
            <div id="main-div">
            <h1>My Personal Rubber Duck Collection</h1>
            <h3>A collection of rubber ducks I've developed since I was very young.</h3>
            <img src={logo} />

            <h2>Choose a section to explore!</h2>
            <MainNav />
            </div>
        </div>

        </>
        
    )
}

export default FrontNav;