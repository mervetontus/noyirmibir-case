import React from "react";

//style
import "../styles/Home.css"
import FeaturedProducts from "./FeaturedProduct";
import VideoPart from "./VideoPart";

const Home = () => {

    return <div>
        <div className="home">
            <h1 className="home-title">Nothing can stop you</h1>
            <button className="button-text">Find Out More</button>
        </div>
        <FeaturedProducts/>
        <VideoPart/>
    </div>



}

export default Home;