import React, { useState } from "react"

const RemoveDuck = (props) => {
    const [result, setResult] = useState("");

    const deleteDuck = async(event) => {
        event.preventDefault();
        const response = await fetch(`https://ducks-server.onrender.com/api/ducks/${props._id}`, {
            method:"DELETE"
        });

        if(response.status === 200) {
            setResult("You've successfully deleted this duck!");

            setTimeout(() => {
                props.closeDeleteDialog();
            },5000)
        } else {
            setResult("Something went wrong with deleting this duck, please try again later.");
        }

    };

    return (
        <>
            <div className="w3-modal">
                <div className="w3-modal-content">
                    <div className="w3-container">
                        <span id="dialog-close" className="w3-button w3-display-topright" onClick={props.closeDeleteDialog}>&times;</span>

                        <form id="delete-duck-form" onSubmit={deleteDuck}>
                            <h3>Deleting this duck</h3>

                            <section className="columns">
                                <p>
                                    <h3>Are you sure you want to delete this duck?</h3>
                                    <button type="submit">Yes</button>
                                </p>
                            </section>
                            <p>{result}</p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )

}

export default RemoveDuck;