import Header from "./../components/Header";
import Footer from "./../components/Footer";
import DuckyalertsLogo from "../css/images/duckyalertlogo.jpg";

const DuckyalertsStuff = () => {
    return (
        <>
             <img src={DuckyalertsLogo}/>
                <section id="desc">
                    <h3>Enter your email address to sign up for my Ducky Alerts System! When you sign up, you'll recieve an email in your inbox whenever new ducks from different stores come out, no more, no less.</h3>
                    <h3>Your data won't be sold to anyone for any reason, duck's honor!</h3>
                </section>
        </>
    )
}

export default DuckyalertsStuff;