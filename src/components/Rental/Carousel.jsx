import PropTypes from "prop-types";
import { useState } from "react";

const Carousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0); // Initializing state for current slide index

  const handlePrevClick = () => { // Function to handle click on previous arrow
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => { // Function to handle click on next arrow
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const arrowLeftSvg = (
    <svg
      width="48"
      height="80"
      viewBox="0 0 48 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z"
        fill="white"
      />
    </svg>
  );

  const arrowRightSvg = (
    <svg
      width="48"
      height="80"
      viewBox="0 0 48 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z"
        fill="white"
      />
    </svg>
  );

  const currentSlide = slides[currentIndex]; 
  const totalSlides = slides.length; 

  const shouldShowArrows = totalSlides > 1; // Checking if arrows should be displayed
  const shouldShowIndicator = totalSlides > 1; // Checking if slide indicator should be displayed

  return (
    <div className="carousel">
      <img
        className="slider"
        src={currentSlide}
        alt={`Slide ${currentIndex + 1}`}
      /> {/* Displaying current slide image */}
      {shouldShowArrows && ( // Conditionally rendering arrows if there are more than one slide
        <>
          <div className="arrowLeft" onClick={handlePrevClick}>
            {arrowLeftSvg}
          </div>
          <div className="arrowRight" onClick={handleNextClick}>
            {arrowRightSvg}
          </div>
        </>
      )}
      {shouldShowIndicator && ( // Conditionally rendering slide indicator if there are more than one slide
        <div className="slide-indicator">{`${currentIndex + 1}/${
          slides.length
        }`}</div>
      )}
    </div>
  );
};

Carousel.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Carousel;
