import "./../css/Duckinfo.css";

const Duckinfo = ({duck}) => {
    if(!duck) {
        //This prevents the page from killing itself because it won't have the info immediately, the page will give errors about the info being null otherwise
        return (
        
        <p>Loading duck info, please wait...</p>

        )
    }
        return (
            <div className="duck-info">
                <div id="basic-info">
                    <h3>Basic Information:</h3>
                    <p id="brand">Brand: {duck.brand}</p>
                    <p id="line">Line: {duck.line}</p>
                    <p id="date">Date Obtained: {duck.date}</p>
                </div>

                <div id="story">
                    <h3>Story:</h3>
                    <p id="story-text">{duck.story}</p>
                </div>
            </div>
        )
}

export default Duckinfo;