import "./../css/AddDuck.css"
import React, {useState} from "react";

const AddDuck = (props) => {
    const [result, setResult] = useState("");
    const [prevSrc, setPrevSrc] = useState("");

    const uploadImage = (event) => {
        setPrevSrc(URL.createObjectURL(event.target.files[0]));
    };

    const addToServer = async(event) => {
        event.preventDefault(); 
        setResult("Adding your duck, please wait..");

        const formData = new FormData(event.target);
        console.log(...formData);
        
        const response = await fetch("http://localhost:3002/api/ducks", {
            "method":"POST",
            "body":formData
        });

        if(response.status == 200){
            setResult("Duck added!");
            event.target.reset();
            props.closeAddDialog();
            props.updateHouses(await response.json());
        } else {
            setResult("Something went wrong! Please try again later.");
        }
    };

    return (
        <div id="add-dialog" className="w3-modal">
            <div className="w3-modal-content">
                <div className="w3-container">
                    <span id="dialog-close" className="w3-button w3-display-topright" onClick={props.closeAddDialog}>&times;</span>
                    <form id="add-duck-form" onSubmit={addToServer}>
                        <h3>Add A New Duck</h3>

                        <section className="columns">
                            <div>
                                <p id="img-prev-section">
                                    {prevSrc!=""?
                                    (<img id="img-prev" src={prevSrc}></img>):
                                    ("")
                                    }
                                </p>
                            </div>
                            <p id="img-upload">
                                <p><label htmlFor="img">What does the duck look like?:</label></p>
                                <input type="file" id="img" name="img" accept="image/*" onChange={uploadImage} />
                            </p>
                        </section>

                        <p>
                            <p><label htmlFor="name">What is the duck's name?:</label></p>
                            <input type="text" id="name" name="name" required min="1"></input>
                        </p>

                        <p>
                            <p><label htmlFor="type">What type of duck is it?:</label></p>
                            <input type="text" id="type" name="type" min="1" required></input>
                        </p>

                        <p>
                            <p><label htmlFor="brand">What brand is it from, if any?:</label></p>
                            <input type="text" id="brand" name="brand" min="1" required></input>
                        </p>

                        <p>
                            <p><label htmlFor="line">What line is the duck from, if any?:</label></p>
                            <input type="text" id="line" name="line" min="1" required></input>
                        </p>

                         <p>
                            <p><label htmlFor="date">When did you get this duck?:</label></p>
                            <p>Format the date like this:</p>
                            <p>xx/xx/xxxx</p>
                            <input type="text" id="date" name="date" min="10" required></input>
                        </p>

                         <p>
                            <p><label htmlFor="story">What's the story surrounding this duck?:</label></p>
                            <input type="text" id="story" name="story" min="1" required></input>
                        </p>

                        <p>
                            <button type="submit">Add duck</button>
                        </p>
                        <p>{result}</p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddDuck;