// import React from "react";
import Carousel from "./Carousel";
import './homepage.css'


function Homepage () {
    return(
        <div className = "homepage" >
            <div className="Intro">
                <p className="Intro">Getting A Driver Just Got Easy</p>
                <p className="IntroExplain">Do you have a car or motobike but doesn't know how to drive or Ride? <br /> You can drive or ride but needs a professional driver or rider to drive you around?</p>
                <div className="Buttons">
                    <a href=""><button className="Rider">Get a Rider</button></a>
                    <a href=""><button className="Driver">Get a Driver</button></a>
                </div>
            </div>
            
            <Carousel />
        </div>
    )
}

export default Homepage