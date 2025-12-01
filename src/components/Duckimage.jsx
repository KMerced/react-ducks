import "./../css/Duckinfo.css";

const Duckimage = ({duck}) => {
        if(!duck) {
        //This prevents the page from killing itself because it won't have the image immediately, the page will give errors about the image being null otherwise
        return (
        
        <p>Loading duck image, please wait...</p>

        )
    }
    return (
            <div id="image">
                <img id="img" src={`https://ducks-server.onrender.com/${duck.img}`}/>
            </div>
    )
};

export default Duckimage;