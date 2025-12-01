import "./../css/AllducksGallery.css";
import {Link} from "react-router-dom";
import {useState, useEffect} from "react";
import axios from "axios";
import AddDuck from "./AddDuck";
import RemoveDuck from "./RemoveDuck";

const AllducksGallery = (props) => {

    const [showAddDialog, setShowAddDialog] = useState(false);
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const [ducks,setDucks] = useState([]);
    const [deleteDuck,setDeleteDuck] = useState(null);

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
    const openDeleteDialog = () => {
        setShowDeleteDialog(true);
    }
    const closeDeleteDialog = () => {
        setShowDeleteDialog(false);
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
            
            {showDeleteDialog?(<RemoveDuck
                                    _id={deleteDuck._id}
                                    closeDeleteDialog={closeDeleteDialog}/> ): ("")}

            <main id="all-ducks-main" className="columns">
                {ducks.map((duck) => (
                    <section className="all-ducks">
                        <h3>{duck.name}</h3>
                        <img src={`https://ducks-server.onrender.com/${duck.img}`}/>
                        {/* The ${duck._id} there basically renders the duckpage still, but it loads with the specific ID of that duck to then render the info! */}
                        <Link to={`/Duckpage/${duck._id}`} state={{duck}}>{duck.name}</Link>
                        <button id="delete-button" type="button" onClick={()=>{setDeleteDuck(duck); openDeleteDialog();}}>X</button>
                    </section>
                ))}
            </main>
        </>
    )
};

export default AllducksGallery;
