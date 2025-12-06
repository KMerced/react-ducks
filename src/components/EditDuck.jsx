import React, {useState} from "react";

const EditDuck = (props) => {
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

    const onSubmit = async(event) => {
        event.preventDefault();
        setResult("Sending new information to the server, please wait...");

        const formData = new FormData(event.target);
        console.log(...formData);

        const response = await fetch(`https://ducks-server.onrender.com/api/ducks/${props._id}`,{
            method:"PUT",
            body:formData
        });

        if(response.status === 200) {
            setResult("You've successfully edited the duck!");

            setTimeout(() => {
                event.target.reset();
                props.closeEditDialog();
            },5000);

        } else {
            setResult("Something went wrong with updating the duck, please try again later.");
        }
    };

    return (
        <>
        <div className="w3-modal">
            <div className="w3-modal-content">
                <div className="w3-container">
                    <span id="dialog-close" className="w3-button w3-display-topright" onClick={props.closeEditDialog}>&times;</span>

                    <form id="edit-duck-form" onSubmit={onSubmit}>
                        <h3>Editing this duck</h3>
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
                                <p><label htmlFor="img">Has the duck changed in appearance? If so, what does it look like now?:</label></p>
                                <input type="file" id="img" name="img" accept="image/*" onChange={uploadImage} />
                                {/* <button type="button"className="next-button">Next</button> */}
                            </p>
                            </section>
                            <p>
                            <p><label htmlFor="name">Has the duck changed it's name? If so, what is the duck's new name?:</label></p>
                            <input type="text" id="name" name="name" min="1"></input>
                            {/* <button type="button" className="next-button">Next</button> */}
                        </p>

                        <p>
                            <p><label htmlFor="type">Has the duck's type changed? If so, what is it's new type?:</label></p>
                            <input type="text" id="type" name="type" min="1"></input>
                            {/* <button type="button" className="next-button">Next</button> */}
                        </p>

                        <p>
                            <p><label htmlFor="brand">Does the duck come from another brand? If so, which is it?:</label></p>
                            <input type="text" id="brand" name="brand" min="1"></input>
                            {/* <button type="button" className="next-button">Next</button> */}
                        </p>

                        <p>
                            <p><label htmlFor="line">Has the duck changed lines? If so, what line is it from now?:</label></p>
                            <input type="text" id="line" name="line" min="1"></input>
                            {/* <button type="button" className="next-button">Next</button> */}
                        </p>

                         <p>
                            <p><label htmlFor="date">Did you (finally) find out when you actually got this duck? If so, when was it?:</label></p>
                            <p>Format the date like this (please):</p>
                            <p>xx/xx/xxxx</p>
                            <input type="text" id="date" name="date" min="10"></input>
                            {/* <button type="button" className="next-button">Next</button> */}
                        </p>

                         <p>
                            <p><label htmlFor="story">Did you remember details about a duck's story? If so, what is the new story surrounding this duck?:</label></p>
                            <textarea id="story" name="story" min="1" rows={12} cols={70}></textarea>
                        </p>

                        <p>
                            <button type="submit">Edit duck</button>
                        </p>
                        <p>{result}</p>
                    </form>
                </div>
            </div>
        </div>
            
        </>
    )
}

export default EditDuck;