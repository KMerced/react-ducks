import "./../css/Duckyalerts.css";
import {useState} from "react";
import Header from "./../components/Header";
import Footer from "./../components/Footer";
import MainNav2 from "../components/MainNav2";
import DuckyalertsStuff from "../components/DuckyalertsStuff";
import BackButton from "../components/BackButton";


const Duckyalerts = () => {
    const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Please wait while your email address is being submitted...");
    const formData = new FormData(event.target);

    formData.append("access_key", "7a166925-3545-445a-8f13-7da1f7862e21");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("You have successfully subscribed to the Ducky Alerts System!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

    return (
        <>
        <Header/>

        <title>Ducky Alerts System</title>

        <div id="alerts-nav">
            <div id="alerts-div">
                 <h1>Sign Up For Ducky Alerts!</h1>

                <h2>Main Navigation</h2>
                 <MainNav2/>

                 <DuckyalertsStuff/>

                    <div id="contact-form">
                        <form onSubmit={onSubmit}>
                        <p>
                            <label for="email">Enter your email address:</label>
                        </p>
                        <p>
                            <input type="email" name="email" required/>
                        </p>

                        <button type="submit">Click here to subscribe!</button>

                        </form>
                        <span>{result}</span>

                    </div>

                    <BackButton/>


            </div>
        </div>

        <Footer/>

        </>
    )
}

export default Duckyalerts;