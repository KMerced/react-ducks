import "./../css/AddDuck.css"
import React, {useState} from "react";

const AddDuck = (props) => {
    const [result, setResult] = useState("");
    const [prevSrc, setPrevSrc] = useState("");
    // const [step2, setStep2] = useState(false);
    // const [step3, setStep3] = useState(false);
    // const [step4, setStep4] = useState(false);
    // const [step5, setStep5] = useState(false);
    // const [step6, setStep6] = useState(false);
    // const [step7, setStep7] = useState(false);

    // const FirstNextButton = () => {
    //     setStep2(true);
    // }
    // const SecondNextButton = () => {
    //     setStep3(true);
    // }
    // const ThirdNextButton = () => {
    //     setStep4(true);
    // }
    // const FourthNextButton = () => {
    //     setStep5(true);
    // }
    // const FifthNextButton = () => {
    //     setStep6(true);
    // }
    // const SixthNextButton = () => {
    //     setStep7(true);
    // }

    const uploadImage = (event) => {
        setPrevSrc(URL.createObjectURL(event.target.files[0]));
    };

    const addToServer = async(event) => {
        event.preventDefault(); 
        setResult("Adding your duck, please wait..");

        const formData = new FormData(event.target);
        console.log(...formData);
        
        const response = await fetch("https://ducks-server.onrender.com/api/ducks", {
            "method":"POST",
            "body":formData
        });

        if(response.status == 200){
            setResult("Duck added!");

            //Put a timeout method here so that it shows the message that the duck was added, then close everything out.
            setTimeout(() => {
                event.target.reset();
                props.closeAddDialog();
            }, 5000);

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
                                {/* <button type="button" className="next-button">Next</button> */}
                            </p>
                        </section>

                        <p>
                            <p><label htmlFor="name">What is the duck's name?:</label></p>
                            <input type="text" id="name" name="name" required min="1"></input>
                            {/* <button type="button" className="next-button">Next</button> */}
                        </p>

                        <p>
                            <p><label htmlFor="type">What type of duck is it?:</label></p>
                            <input type="text" id="type" name="type" min="1" required></input>
                            {/* <button type="button" className="next-button">Next</button> */}
                        </p>

                        <p>
                            <p><label htmlFor="brand">What brand is it from, if any?:</label></p>
                            <input type="text" id="brand" name="brand" min="1" required></input>
                            {/* <button type="button" className="next-button">Next</button> */}
                        </p>

                        <p>
                            <p><label htmlFor="line">What line is the duck from, if any?:</label></p>
                            <input type="text" id="line" name="line" min="1" required></input>
                            {/* <button type="button" className="next-button">Next</button> */}
                        </p>

                         <p>
                            <p><label htmlFor="date">When did you get this duck?:</label></p>
                            <p>Format the date like this (please):</p>
                            <p>xx/xx/xxxx</p>
                            <input type="text" id="date" name="date" min="10" required></input>
                            {/* <button type="button" className="next-button">Next</button> */}
                        </p>

                         <p>
                            <p><label htmlFor="story">What's the story surrounding this duck?:</label></p>
                            {/* Changed to textarea because input was too small.
                            If you had a long story, it was really annoying to press left/right arrow to read everything. */}
                            <textarea id="story" name="story" min="1" required rows={12} cols={70}></textarea>
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