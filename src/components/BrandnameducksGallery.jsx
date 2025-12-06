import "./../css/BrandnameducksGallery.css";
import {Link} from "react-router-dom";
import {useState, useEffect} from "react";
import axios from "axios";
import AddDuck from "./AddDuck";
import RemoveDuck from "./RemoveDuck";

const BrandnameducksGallery = (props) => {

    const [showAddDialog, setShowAddDialog] = useState(false);
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const [ducks,setDucks] = useState([]);
    const duckType = "brand name";
    const [deleteDuck,setDeleteDuck] = useState("");

    useEffect(()=> {
    const loadDucks = async() => {
        const response = await axios.get("https://ducks-server.onrender.com/api/ducks/", {
            params: {type:duckType}
        });
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

        <main id="brandducks-main" className="columns">
            {ducks.map((duck) => (
                <section className="brand-ducks">
                <h3>{duck.name}</h3>
                <img src={`https://ducks-server.onrender.com/${duck.img}`}/>
                <Link to={`/Duckpage/${duck._id}`} state={{duck}}>{duck.name}</Link>
                <button id="delete-button" type="button" onClick={()=>{setDeleteDuck(duck); openDeleteDialog();}}>X</button>
            </section>
            ))}
        </main>

        </>
    ) 
}

export default BrandnameducksGallery;