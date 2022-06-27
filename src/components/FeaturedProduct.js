import React from "react"
import { Carousel } from 'react-responsive-carousel';


//style
import "../styles/FeaturedProduct.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const FeaturedProducts=()=>{
    return <div className="container">
        <h1 className="featured-title">Featured Products</h1>
        <Carousel showArrows={true}>
            <div>
            <div className="box">
                <h1>ICEWAYS</h1>
                <p>City life changing.So are the habits of urban citizens. 4x4 cars that were previously used only on challenging lands are now preferred for urban use.</p>
                <button className="learn-button">LEARN MORE</button>
                <button className="find-button">FIND A DEALER</button>
            </div>
            <div className="box">
            <h1>DRIWAYS SPORT</h1>
                <p>Driways is a "Comfort tyre" developedfor a considerably wide vehicle pool ranging from middle class seadans to upper class comfort automobiles.</p>
                <button className="learn-button">LEARN MORE</button>
                <button className="find-button">FIND A DEALER</button>
            </div>
            <div className="box">
            <h1>DRIWAYS COMPETUS H/P</h1>
                <p>City life changing.So are the habits of urban citizens. 4x4 cars that were previously used only on challenging lands are now preferred for urban use.</p>
                <button className="learn-button">LEARN MORE</button>
                <button className="find-button">FIND A DEALER</button>
            </div>
            </div>
            <div>
            <div className="box">
                <h1>ICEWAYS</h1>
                <p>City life changing.So are the habits of urban citizens. 4x4 cars that were previously used only on challenging lands are now preferred for urban use.</p>
                <button className="learn-button">LEARN MORE</button>
                <button className="find-button">FIND A DEALER</button>
            </div>
            <div className="box">
            <h1>DRIWAYS SPORT</h1>
                <p>Driways is a "Comfort tyre" developedfor a considerably wide vehicle pool ranging from middle class seadans to upper class comfort automobiles.</p>
                <button className="learn-button">LEARN MORE</button>
                <button className="find-button">FIND A DEALER</button>
            </div>
            <div className="box">
            <h1>DRIWAYS COMPETUS H/P</h1>
                <p>City life changing.So are the habits of urban citizens. 4x4 cars that were previously used only on challenging lands are now preferred for urban use.</p>
                <button className="learn-button">LEARN MORE</button>
                <button className="find-button">FIND A DEALER</button>
            </div>
            </div>
        </Carousel>
    </div>


}

export default FeaturedProducts;