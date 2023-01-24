import React, { useState } from 'react';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import './carousel.css'

function Carousel({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    const newIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex === items.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className='carousel'>
      <button onClick={handlePrevious}> <GrFormPrevious className='next' /> </button>
      {items[currentIndex]}

      <button onClick={handleNext}> <GrFormNext className='next'></GrFormNext></button>
    </div>
  );
}

export default Carousel;
