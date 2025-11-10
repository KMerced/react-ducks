import {useState, useEffect} from "react";
import axios from "axios";
import "./../css/Duckinfo.css";

const Duckinfo = ({duck}) => {
    const [ducks, setDucks] = useState([]);
    
        useEffect(()=>{
            const loadDucks = async() => {
                const response = await axios.get("https://ducks-server.onrender.com/api/ducks");
                setDucks(response.data[0]);
            };
    
            loadDucks();
        },[]);

        return (
            <div className="duck-info">
                <div id="basic-info">
                    <h3>Basic Information:</h3>
                    <p id="brand">{ducks.brand}</p>
                    <p id="line">{ducks.line}</p>
                    <p id="date">{ducks.date}</p>
                </div>

                <div id="story">
                    <h3>Story:</h3>
                    <p id="story-text">{ducks.story}</p>
                </div>
            </div>
        )
}

export default Duckinfo;