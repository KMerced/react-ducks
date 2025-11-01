import MainNav2 from "./../components/MainNav2";
import Brandnavigation from "./../components/Brandnavigation";


const BrandnameducksNav = () => {
    return (
        <>
            <h1>Brand Name Ducks</h1>

            <h3>Basic Information: These are ducks made by specific brands. They typically have a signature mold with extra details added on top depending on what it's being made for.</h3>
            <h3>Note: If you don't see a specific brand listed here, it's because I don't own any ducks of that particular brand yet.</h3>

            <h2>Main Navigation</h2>
                <MainNav2/>
            <h2>Brand Navigation</h2>
                <Brandnavigation/>
        </>
    )
}

export default BrandnameducksNav;