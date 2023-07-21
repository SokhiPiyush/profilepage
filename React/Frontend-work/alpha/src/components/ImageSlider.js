import React, { useEffect, useState, useRef } from 'react';
// import './style.css';
const ImageSlider = ({ slides }) => {

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
      const slideInterval = setInterval(() => {
        setCurrentSlide((prevSlide) =>
          prevSlide === slides.length - 1 ? 0 : prevSlide + 1
        );
      }, 2000); // Change slide every 3 seconds
  
      return () => clearInterval(slideInterval);
    }, []);


    return (
        <div className="slider">
      <img
      src={slides[currentSlide].image} alt={slides[currentSlide].title} 
      style={{ width: '180%'}} 
      />
      
    </div>
    )
};

export default ImageSlider;