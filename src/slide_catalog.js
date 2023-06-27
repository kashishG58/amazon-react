import React, { useState } from 'react';
 import './section.css';
function Slidecatalog() {
    const [slideIndex, setSlideIndex] = useState(0);
  
    const changeSlide = (n) => {
      let newIndex = slideIndex + n;
  
      // Handle boundary cases
      if (newIndex < 0) {
        newIndex = 4; // Assuming you have 5 slides
      } else if (newIndex > 2) {
        newIndex = 0;
      }
  
      setSlideIndex(newIndex);
    };

  return (
    
      <div className="slide-catalog main" id="banner">
        <div className={`slide-catalog_img ${slideIndex === 0 ? 'active' : ''}`} >
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/apparelGW/junatf23/unrecapay/WA_WW_3000._CB603210873_.jpg" alt="Image 1" />
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/apparelGW/junatf23/unrecapay/WA_WW_3000._CB603210873_.jpg" alt="Image 1" />
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/apparelGW/junatf23/unrecapay/WA_WW_3000._CB603210873_.jpg" alt="Image 1" />
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/apparelGW/junatf23/unrecapay/WA_WW_3000._CB603210873_.jpg" alt="Image 1" />
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/apparelGW/junatf23/unrecapay/WA_WW_3000._CB603210873_.jpg" alt="Image 1" />
        
        {/* <div className={`slide-catalog_img ${slideIndex === 0 ? 'active' : ''}`}>
          <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2018/QC/Tools2x._SY232_CB424026090_.jpg" alt="Image 2" />
        </div>
        <div className={`slide-catalog_img ${slideIndex === 0 ? 'active' : ''}`}>
          <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2018/QC/med2x._SY232_CB424026091_.jpg" alt="Image 3" />
        </div>
        <div className={`slide-catalog_img ${slideIndex === 0 ? 'active' : ''}`}>
          <img src="https://m.media-amazon.com/images/I/71tEUoHGILL._AC_UY327_FMwebp_QL65_.jpg" alt="Image 4" />
        </div>
        <div className={`slide-catalog_img ${slideIndex === 0 ? 'active' : ''}`}>
          <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2018/QC/Tools2x._SY232_CB424026090_.jpg" alt="Image 5" />
  </div>*/}</div> 
        <div className={`slide-catalog_img ${slideIndex === 1 ? 'active' : ''}`} >
        <img src="https://m.media-amazon.com/images/I/71tEUoHGILL._AC_UY327_FMwebp_QL65_.jpg" alt="" />
        <img src="https://m.media-amazon.com/images/I/71tEUoHGILL._AC_UY327_FMwebp_QL65_.jpg" alt="" />
        <img src="https://m.media-amazon.com/images/I/71tEUoHGILL._AC_UY327_FMwebp_QL65_.jpg" alt="" />
        <img src="https://m.media-amazon.com/images/I/71tEUoHGILL._AC_UY327_FMwebp_QL65_.jpg" alt="" />
        <img src="https://m.media-amazon.com/images/I/71tEUoHGILL._AC_UY327_FMwebp_QL65_.jpg" alt="" />
        
        {/* <div className={`slide-catalog_img ${slideIndex === 1 ? 'active' : ''}`}>
          <img src="https://m.media-amazon.com/images/I/71tEUoHGILL._AC_UY327_FMwebp_QL65_.jpg" alt="Image 2" />
          </div>
        <div className={`slide-catalog_img ${slideIndex === 1 ? 'active' : ''}`}>
          <img src="https://m.media-amazon.com/images/I/71tEUoHGILL._AC_UY327_FMwebp_QL65_.jpg" alt="Image 3" />
        </div>
        <div className={`slide-catalog_img ${slideIndex === 1 ? 'active' : ''}`}>
          <img src="https://m.media-amazon.com/images/I/71tEUoHGILL._AC_UY327_FMwebp_QL65_.jpg" alt="Image 4" />
        </div>
        <div className={`slide-catalog_img ${slideIndex === 1 ? 'active' : ''}`}>
          <img src="https://m.media-amazon.com/images/I/71tEUoHGILL._AC_UY327_FMwebp_QL65_.jpg" alt="Image 5" />
        </div> */}
        </div>

         <a className="prev" onClick={() => changeSlide(-1)}>&#10094;</a>
        <a className="next" onClick={() => changeSlide(1)}>&#10095;</a>
         </div>
  );
}

export default Slidecatalog;
