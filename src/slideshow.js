import React, { useState } from 'react';
import './slideshow&ads.css';
function Slideshow() {
    const [slideIndex, setSlideIndex] = useState(0);
  
    const changeSlide = (n) => {
      let newIndex = slideIndex + n;
  
      // Handle boundary cases
      if (newIndex < 0) {
        newIndex = 4; // Assuming you have 5 slides
      } else if (newIndex > 5) {
        newIndex = 0;
      }
  
      setSlideIndex(newIndex);
    };

  return (
    
      <div className="slideshow-container" id="banner">
        <div className={`slide ${slideIndex === 0 ? 'active' : ''}`} >
          <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/apparelGW/junatf23/unrecapay/WA_WW_3000._CB603210873_.jpg" alt="Image 1" />
        </div>
        <div className={`slide ${slideIndex === 1 ? 'active' : ''}`}>
          <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Lawn_Garden/Ud/SummerGD/June/hero/unrec/2-b-3000x1200-hero._CB602235666_.jpg" alt="Image 2" />
        </div>
        <div className={`slide ${slideIndex === 2 ? 'active' : ''}`}>
          <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/HI/June/Wallpaints/5298-Amazon-Sports---Story-3-unRec_3000x1200_BoB--Yes._CB602405147_.jpg" alt="Image 3" />
        </div>
        <div className={`slide ${slideIndex === 3 ? 'active' : ''}`}>
          <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Lawn_Garden/Ud/SummerGD/June/hero/unrec/1-b-3000x1200-copy._CB602235666_.jpg" alt="Image 4" />
        </div>
        <div className={`slide ${slideIndex === 4 ? 'active' : ''}`}>
          <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/GW/Jun/Unrec-PFF-3000-1200._CB603212230_.jpg" alt="Image 5" />
        </div>
        <div className={`slide ${slideIndex === 5 ? 'active' : ''}`}>
          <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img16/malar/SmallBusDays/Revision/Hero_3000x1200._CB602624705_.jpg" alt="Image 6" />
        </div>

        <a className="prev" onClick={() => changeSlide(-1)}>&#10094;</a>
        <a className="next" onClick={() => changeSlide(1)}>&#10095;</a>

         </div>
  );
}

export default Slideshow;
