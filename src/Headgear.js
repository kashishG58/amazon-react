import React from 'react';
import './style.css'
import './main_website.css'
import Navbar from './Navbar';

import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

class RedgearComponent extends React.Component {
  addToCart(productName, price, imageUrl) {
    // Function logic goes here
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="navbar" id="navbar-parent"></div>
        <main>
          <div className="main-headgear">
            <div id="img" className="id1">
              <p>
                <img src="https://m.media-amazon.com/images/I/61O0rXhhP6L._SX679_.jpg" alt="headgears" />
              </p>
              <p>
                <table id="table1">
                  <caption>Technical details</caption>
                  <tr>
                    <td>Brand</td>
                    <td>Redgear</td>
                  </tr>
                  <tr>
                    <td>Manufacturer</td>
                    <td>Imaginne marketing</td>
                  </tr>
                  <tr>
                    <td>Model</td>
                    <td>Cloak</td>
                  </tr>
                  <tr>
                    <td>Model Name</td>
                    <td>Cloak Wired</td>
                  </tr>
                  <tr>
                    <td>Special Feature</td>
                    <td>Microphone Included</td>
                  </tr>
                  <tr>
                    <td>Country of Origin</td>
                    <td>China</td>
                  </tr>
                </table>
              </p>
            </div>
            <div id="second">
              <div className="id1">
                <h2>Redgear Cloak Wired RGB Wired Over Ear Gaming Headphones with Mic for PC</h2>
              </div>
              <div id="sub-box">
                <div className="id1">
                  <hr />
                  <button onClick={() => this.addToCart('Redgear Cloak Wired RGB Wired Over Ear Gaming Headphones with Mic for PC', 990.00, 'images/products/redgear.jpg')} id="add-to-Cart">Add to Cart</button>
                  <span className="disc">-44%</span>&nbsp;
                  <sup>&#8377;</sup>
                  <span className="rate">990</span>
                  <p>
                    M.R.P.:&#8377;
                    <span className="mrp">1,799</span>
                  </p>
                  Inclusive of all taxes
                  <hr />
                  <strong>
                    <caption>About this item:</caption>
                  </strong>
                  <ul>
                    <li>Sound Quality: Redgear Cloak comes equipped with 50mm Driver with Enhanced audio bass and clarity which dramatically improves your in-game sound experience. Inline Remote : No</li>
                    <li>Microphone: It comes equipped with a Omni-directional microphone which can be used as per you gaming situations. You can just put it up if it is not in use.</li>
                    <li>Build Quality: It's luxurious noise-isolating memory foam ear pads and adjustable split headband reduces pressure and provides optimal comfort for long gaming sessions</li>
                    <li>Other Features: This headset has an amazing RGB LED light effect on ear-ups and tip of the microphone. It also comes equipped with volume control, so just scroll up or down to adjust it.</li>
                  </ul>
                  <hr />
                  <span style={{ fontSize: 'larger', fontWeight: 'bold', fontFamily: 'Arial, Helvetica, sans-serif' }}>Customer reviews</span>
                  <br />
                  <FaStar className="fa fa-star checked" />
                  <FaStar className="fa fa-star checked" />
                  <FaStar className="fa fa-star checked" />
                  <FaStar className="fa fa-star checked" />
                  <FaStar className="fa fa-star " />
                  &nbsp;
                  <strong>4 out of 5</strong>
                  <br />
                  <p>14,890 global ratings</p>
                  <hr style={{ border: '2px solid rgba(189, 187, 187, 0.82)' }} />
                  <div className="row">
                    <div className="side">
                      <div>5-star</div>
                    </div>
                    <div className="middle">
                      <div className="bar-container">
                        <div className="bar-5"></div>
                      </div>
                    </div>
                    <div className="side right">
                      <div>50%</div>
                    </div>
                    <div className="side">
                      <div>4-star</div>
                    </div>
                    <div className="middle">
                      <div className="bar-container">
                        <div className="bar-4"></div>
                      </div>
                    </div>
                    <div className="side right">
                      <div>23%</div>
                    </div>
                    <div className="side">
                      <div>3-star</div>
                    </div>
                    <div className="middle">
                      <div className="bar-container">
                        <div className="bar-3"></div>
                      </div>
                    </div>
                    <div className="side right">
                      <div>12%</div>
                    </div>
                    <div className="side">
                      <div>2-star</div>
                    </div>
                    <div className="middle">
                      <div className="bar-container">
                        <div className="bar-2"></div>
                      </div>
                    </div>
                    <div className="side right">
                      <div>9.3%</div>
                    </div>
                    <div className="side">
                      <div>1-star</div>
                    </div>
                    <div className="middle">
                      <div className="bar-container">
                        <div className="bar-1"></div>
                      </div>
                    </div>
                    <div className="side right">
                      <div>2.5%</div>
                    </div>
                  </div>
                </div>
                <div className="id1" id="offer">
                  <img src="https://cdn-icons-png.flaticon.com/128/879/879757.png" alt="offers" style={{width:"24px",height:"24px"}} />
                  <sup>&nbsp;&nbsp;Offers</sup>
                  <section id="OfferS">
                    <div className="offerS">
                      <strong>No Cost EMI</strong>
                      <br />
                      Avail No Cost EMI on select cards for orders above ₹3000
                      <br />
                      <a href="#"><strong>1 Offer</strong>&gt;</a>
                    </div>
                    <br />
                    {/* space */}
                    <div className="offerS">
                      <strong>Bank Offer</strong>
                      <br />
                      Upto ₹1,750.00 discount on select Credit Cards, HDFC Bank Debit Cards...
                      <br />
                      <a href="#">5 Offers &gt;</a>
                    </div>
                    {/* space */}
                  </section>
                  <br />
                  <hr style={{ border: '1px solid rgba(48, 47, 67, 0.671)' }} />
                  <strong>
                    <caption>By features</caption>
                  </strong>
                  <table id="table2">
                    <tr>
                      <td>Comfort</td>
                      <td>
                      <FaStar className="fa fa-star checked" />
                      <FaStar className="fa fa-star checked" />
                      <FaStar className="fa fa-star checked" />
                      <FaStar className="fa fa-star checked" />
                      <FaStar className="fa fa-star " />3.9
                      </td>
                    </tr>
                    <tr>
                      <td>For gaming</td>
                      <td>
                      <FaStar className="fa fa-star checked" />
                      <FaStar className="fa fa-star checked" />
                      <FaStar className="fa fa-star checked" />
                      <FaStar className="fa fa-star checked" />
                      <FaStar className="fa fa-star " />3.8
                      </td>
                    </tr>
                    <tr>
                      <td>Sound quality</td>
                      <td>
                      <FaStar className="fa fa-star checked" />
                      <FaStar className="fa fa-star checked" />
                      <FaStar className="fa fa-star checked" />
                      <FaStar className="fa fa-star checked" />
                      <FaStar className="fa fa-star " />3.7
                      </td>
                    </tr>
                    <tr>
                      <td>Volume control</td>
                      <td>
                      <FaStar className="fa fa-star checked" />
                      <FaStar className="fa fa-star checked" />
                      <FaStar className="fa fa-star checked" />
                      <FaStarHalfAlt className="fa fa-star checked" />
                      <FaStar className="fa fa-star " />3.5
                      </td>
                    </tr>
                    <tr>
                      <td>Noise cancellation</td>
                      <td>
                        <FaStar className="fa fa-star checked" />
                      <FaStar className="fa fa-star checked" />
                      <FaStar className="fa fa-star checked" />
                      <FaStarHalfAlt className="fa fa-star checked" />
                      <FaStar className="fa fa-star " />3.3
                      </td>
                    </tr>
                  </table>
                </div>
                <div className="reviews">
                  <hr style={{ border: '2px solid rgba(159, 158, 158, 0.578)' }} />
                  <h4>Top reviews from India</h4>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/1946/1946429.png"
                    className="user-img"
                    alt="user"
                    width="35px"
                    height="35px"
                  />
                  <h3 className="h3">Kashish Goyal</h3> <br />
                  <FaStar className="fa fa-star checked" />
                  <FaStar className="fa fa-star checked" />
                      <FaStar className="fa fa-star checked" />
                      <FaStar className="fa fa-star checked" />
                      <FaStarHalfAlt className="fa fa-star checked" />
                      {' '}
                  <strong>Exceptional Gaming Experience in pocket friendly, budget friendly over ear Headphone</strong>{' '}
                  <br />
                  <span className="opacity">
                    Reviewed in India 🇮🇳 on 7 May 2023 <br />
                    Pattern Name: Gaming Headphone
                  </span>
                  <b>|</b> 
                  <strong style={{ color: 'orange', fontSize: '80%' }}>Verified Purchase</strong>
                  <p style={{ opacity: 1, fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '100%' }}>
                    I recently purchased the Redgear Cloak Wired RGB Gaming Headphones, and they have exceeded my
                    expectations. The design and build quality are excellent, with a sturdy construction that feels
                    durable. The headphone's ear cups are comfortable and provide a good level of noise isolation. The
                    sound quality is impressive, with clear and detailed audio reproduction. The bass response is deep
                    and punchy, which enhances the gaming experience. The microphone performs well and captures clear
                    vocals. The RGB lighting adds a stylish touch to the overall design. Overall, I am extremely
                    satisfied with the Redgear Cloak Wired RGB Gaming Headphones and would highly recommend them to
                    gamers looking for a pocket-friendly and budget-friendly over-ear headphone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default RedgearComponent;
