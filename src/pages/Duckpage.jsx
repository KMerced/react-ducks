import Header from "./../components/Header";
import Footer from "./../components/Footer";
import MainNav2 from "../components/MainNav2";
import EditDuck from "../components/EditDuck";
import Duckimage from "../components/Duckimage";
import Duckinfo from "../components/Duckinfo";
import BackButton from "../components/BackButton";
import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import "./../css/Duckinfo.css";

const Duckpage = () => {
    const{duckID} = useParams();
    const [duck,setDuck] = useState("");
    const [showEditDialog, setShowEditDialog] = useState(false);
    const openEditDialog = () => {
        setShowEditDialog(true);
    }
    const closeEditDialog = () => {
        setShowEditDialog(false);
    }

    //This is so that when a specific duck is clicked, it will grab the ID of it and then use it for the other components like duckinto and duckimage
    useEffect(() => {
        const loadSpecificDuck = async() => {
            try {
                const res = await fetch(`https://ducks-server.onrender.com/api/ducks/${duckID}`);
                const duck = await res.json();

                setDuck(duck);
            } catch (error) {
                console.log("I couldn't get that duck.")
            };
        };
        loadSpecificDuck();
    },[duckID]);
    return (
        <>
            <title>Duck Info Page</title>
            <div id="title">
                <Header/>
                <h1 id="duck_name"></h1>
            </div>

            <h2>Main Navigation</h2>
            <MainNav2/>

            <h2>Editing Ducks</h2>
            <button id="duck-button" onClick={openEditDialog}>Click here to edit this duck!</button>
            {showEditDialog?(<EditDuck 
                                duck={duck}
                                _id={duck._id}
                                closeEditDialog={closeEditDialog}/> ): ("")}

            <div className="duck-stuff">
                {/* The duck={duck} passes the ID to those components to then use for rendering the exact info based on the ID (hopefully, anyway) */}
                <Duckimage duck={duck}/>

                <Duckinfo duck={duck}/>
            </div>



            <BackButton/>
            <Footer/>
        </>
    )
}

export default Duckpage;