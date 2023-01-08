import React from "react";
import Image from "./images/pakka.png"

function Hero() {
    return (
        <div className="row">
            <div className="col-lg-6 md-6 sm-12">
                <h1 className="heading">Get your Required Calorie Count for a Healthy Lifestyle</h1>
                <p className="para">Let Healthify's advance AI predict the best calorie needs for you, right at your fingertips!</p>
                <a href="#form"><button className="button" type="button" name="myButton">Calculate Now!</button></a>

            </div>
            <div className="col-lg-6 md-6 sm-12">
            <img className="img" src={Image} alt="food.png" />

            </div>
        </div>
    )
}

export default Hero;