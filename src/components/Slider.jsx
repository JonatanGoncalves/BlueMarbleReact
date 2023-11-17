import { Image } from "react-bootstrap";
import React, { useEffect } from "react";
import "../assets/css/Slider.css";

export default function Slider(){
    useEffect(()=> {
        const interval = setInterval(function(){
            nextImage();
        }, 3500);
        return () => {
            clearInterval(interval);
        };
    }, );

    let count = 1;
    function nextImage(){
        count++;
        var slides = document.getElementsByClassName('slides')[0];
        slides.scrollTo((420*(count-1)), 0);
        if(count >= 5){
            count=1;
            document.getElementsByClassName('slides')[0].scrollTo(0, 0)
        }
    };

    return(
        <div className="slider">
            <div className="slides">
                <Image className="slider-img" src={require("../assets/images/img-1.png")} />
                <Image className="slider-img" src={require("../assets/images/img-2-2.png")} />
                <Image className="slider-img" src={require("../assets/images/img-3-2.png")} />
                <Image className="slider-img" src={require("../assets/images/img-4.png")} />
            </div>
        </div>
    );
};
