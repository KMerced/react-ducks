import "./../css/AllducksGallery.css";
import {Link} from "react-router-dom";
import {useState, useEffect} from "react";
import axios from "axios";
import AddDuck from "./AddDuck";

const AllducksGallery = (props) => {

    const [showAddDialog, setShowAddDialog] = useState(false);
    const [ducks,setDucks] = useState([]);

    useEffect(()=> {
    const loadDucks = async() => {
        const response = await axios.get("https://ducks-server.onrender.com/api/ducks/");

        setDucks(response.data.slice(0,props.num));
    };

    loadDucks();
},[])
    
    const openAddDialog = () => {
        setShowAddDialog(true);
    }
    const closeAddDialog = () => {
        setShowAddDialog(false);
    }
    const updateDucks = (duck) => {
        //Give a list, break up the list, then add to the list
        setDucks((ducks)=>[...ducks,duck]);
    }

    return (
        <>
            <button id="duck-button" onClick={openAddDialog}>Click here to add a duck!</button>
            {showAddDialog?(<AddDuck 
                                closeAddDialog={closeAddDialog} 
                                updateDucks/> ): ("")}

            <main id="all-ducks-main" className="columns">
                {ducks.map((duck) => (
                    <section className="all-ducks">
                        <h3>{duck.name}</h3>
                        <img src={`https://ducks-server.onrender.com/${duck.img}`}/>
                        <Link to="/Duckpage" state={{duck}}>{duck.name}</Link>
                    </section>
                ))}
            </main>
        </>
    )
};

export default AllducksGallery;
