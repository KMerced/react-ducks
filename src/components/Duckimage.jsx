import {useState, useEffect} from "react";
import axios from "axios";
import "./../css/Duckinfo.css";

const Duckimage = ({duck}) => {
    const [ducks, setDucks] = useState([]);

    useEffect(()=>{
        const loadDucks = async() => {
            const response = await axios.get("https://ducks-server.onrender.com/api/ducks");
            setDucks(response.data[0]);
        };

        loadDucks();
    },[]);

    return (
            <div id="image">
                <img id="img" src={"https://ducks-server.onrender.com/images/"+ducks.img}/>
            </div>
    )
};

export default Duckimage;