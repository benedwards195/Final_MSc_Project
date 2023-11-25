import React, { useState } from 'react';
/*
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
export const GallerySlider = [
    {
      image:
        '../images/bench.jpg'
    },
    {
      image:
      '../images/leg_press.jpg'
    },
    {
      image:
      '../images/shoulder_press.jpg'
    }
  ];
  
 const slides = {
    image:
      '../images/bench.jpg'
  },
  {
    image:
    '../images/leg_press.jpg'
  },
  {
    image:
    '../images/shoulder_press.jpg'
  }
 export default function GallerySlider() {


 }
 
const GallerySlider = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const sliderStyles = {
        height: "100%",
        position: "relative",

    }
    const slideStyles = {
        width: "100%",
        height: "100%",
        borderRadius: "10px",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url(${slides[currentIndex]})`,
    };
    const leftArrowStyles = {
        position: "absolute",
        top: "50%",
        transform: "translate(0, -50%)",
        left: "32px",
        fontSize: "45px",
        color: "#fff",
        zIndex: 1,
        cursor: "pointer"
    }
    const rightArrowStyles = {
        position: "absolute",
        top: "50%",
        transform: "translate(0, -50%)",
        right: "32px",
        fontSize: "45px",
        color: "#fff",
        zIndex: 1,
        cursor: "pointer"
    }

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length -1 : currentIndex -1;
        setCurrentIndex(newIndex);
    }

    const goToNext = () => {
        const isLastSlide = currentIndex === 0;
        const newIndex = isLastSlide ? 0 : currentIndex +1;
        setCurrentIndex(newIndex);
    }
    return (
        <div>
            <div style={sliderStyles}></div>
            <div style={leftArrowStyles}onClick={goToPrevious}>-</div>
            <div style={rightArrowStyles} onClick={goToNext}>+</div>
           <div style={slideStyles}></div>

        </div>
    )
}
*/
const GallerySlider = () => {
const style = {
    //overflowY: "scroll",
    height: 5000,
    width: "100%",
    backgroudImage: `url(${this.state.images[this.state.index]})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  }; 
  
};
export default GallerySlider;