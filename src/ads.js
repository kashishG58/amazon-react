import React from 'react';

import './extras.css'

const AdsSection = () => {
  return (
    <div className="ads-container2">
      <div className="ad-box">
        <h4 className="ad-title2" id="sub-box2">
          Offer: <span className="disc2">-44%</span> &nbsp;
          <sup>&#8377;</sup>
          <span className="rate2">900 &nbsp;</span>
        </h4>
        <img src="https://m.media-amazon.com/images/I/71tEUoHGILL._AC_UY327_FMwebp_QL65_.jpg" alt="Ad 1" className="ad-image" id="image-1" />
        <p>M.R.P.:<span className="mrp2"> &#8377;1,799</span></p>
        <p className="ad-description">Get your favourite books at very low prices and boost your preparation .</p>
      </div>
      <div className="ad-box">
        <h3>Watch Yeh Meri Family only on Mini TV</h3>
        {/* img paths are given as ../../ because I have now pushed this file in our react app, and from there it will access images with this path only */}
        <img src="https://m.media-amazon.com/images/S/pv-target-images/94d1982ae9121f2f4867cc3b8cfaae784bcf5887ea96e696979d26fd6dd8c680.__SX495__SY279__QL60__._TTH_.jpg" alt="Ad 2" className="ad-image" id="image-2" />
        <p className="ad-description"><a href="#">Visit the store</a>.</p>
      </div>
    </div>
  );
};

export default AdsSection;
