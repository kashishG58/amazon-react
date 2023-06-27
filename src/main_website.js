import React from 'react';
import './main_website.css';
import './section.css';
import './dropdown.css';
import './sign-in.css';

import { Link } from 'react-router-dom';

import Slideshow from './slideshow';
import Navbar from './Navbar';
import AdsSection from './ads'
import Slidecatalog from './slide_catalog';

function OnlineShoppingSite() {

    return (
        <div>
            <Navbar />
            <Slideshow />   
            <div className="main-section">
                <main>
                    <div id="advertisement">
                        <AdsSection />
                    </div>

                    <section className="main">
                        <div className="photo1">
                            <h1>Up to 70% off | Clearance store</h1>
                            <Link to="/catalog" target='_blank'>
                                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img16/malar/March23/HR_758X608._SY608_CB595115209_.jpg" alt="electronics" width="275px" style={{ margin: '0px 0px 11px 5px' }} />
                                </Link>
                            <div id="button1">
                            <Link to="/catalog" target='_blank'>See More &gt;</Link>
                            </div>
                        </div>

                        <div className="photo1">
                            <h1>Deals on Tools, Cleaning & Safety supplies</h1>
                            <div id="photo2">
                                <a href="page.html"><img src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2018/QC/Tools2x._SY232_CB424026090_.jpg" alt="footwear" /></a>
                                <a href="page.html"><img src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2021/BAU_GW_Graphics/PCQC/372X2322._SY232_CB643952553_.jpg" alt="clothing" /></a>
                                <br />
                                <a href=""><img src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2021/BAU_GW_Graphics/PCQC/372X2322._SY232_CB643952553_.jpg" alt="watches" /></a>
                                <a href=""><img src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2018/QC/med2x._SY232_CB424026091_.jpg" alt="Bags and Luggages" /></a>
                           
                                <a href="#" target="_blank">Mega Fashion days</a></div>
                        </div>

                        <div className="photo1">
                            <div id="photo3">
                                <h1>Electronics devices for home office</h1>
                                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/PC/Computers/GW/DBQC/D21343116_IN_CEPC_BAU_GW_graphics_March21_dbqc_5._SY232_CB655805757_.jpg" alt="cleaning accessories" />
                                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/PC/Computers/GW/DBQC/D21343116_IN_CEPC_BAU_GW_graphics_March21_dbqc_6._SY232_CB655805757_.jpg" alt="tyre and rim" />
                                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/PC/Computers/GW/DBQC/D21343116_IN_CEPC_BAU_GW_graphics_March21_dbqc_7._SY232_CB655805757_.jpg" alt="image3" />
                                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/PC/Computers/GW/DBQC/D21343116_IN_CEPC_BAU_GW_graphics_March21_dbqc_8._SY232_CB655805757_.jpg" alt="image3" />
                            
                                <a href="#" target="_blank">See More</a>
                            </div>
                        </div>
                    </section>

                    <section className="main">
                    <div className="photo1">
                            <h1>Up to 70% off | Clearance store</h1>
                            <div id="photo2">
                                <a href="page.html"><img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF1-372-232._SY232_CB636048992_.jpg" alt="footwear" /></a>
                                <a href="page.html"><img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF2-372-232._SY232_CB636048992_.jpg" alt="clothing" /></a>
                                <br />
                                <a href=""><img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF4-372-232._SY232_CB636048992_.jpg" alt="watches" /></a>
                                <a href=""><img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF3-372-232._SY232_CB636048992_.jpg" alt="Bags and Luggages" /></a>
                           
                                <a href="#" target="_blank">Mega Fashion days</a></div>
                        </div>

                        <div className="photo1">
                            <h1>Revamp your home in style</h1>
                            <div id="photo2">
                            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_1_High._SY232_CB670263840_.jpg" alt="cleaning accessories" />
                                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_2_High._SY232_CB670263840_.jpg" alt="tyre and rim" />
                                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_4_High._SY232_CB670263840_.jpg" alt="image3" />
                                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_3_High._SY232_CB670263840_.jpg" alt="image3" />
                            
                                <a href="#" target="_blank">See More</a>
                                </div>
                        </div>

                        <div className="photo1">
                            <h1>One stop shop for all your wedding shopping</h1>
                            <div id="photo4">
                                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Wedding-Store/btf/For_her_2x._SY232_CB653484282_.jpg" alt="tyre and rim" />
                                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Wedding-Store/btf/For_him_2x._SY232_CB653484282_.jpg" alt="tyre and rim" />
                                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Wedding-Store/btf/Pooja_essentials_2x._SY232_CB653484282_.jpg" alt="image3" />
                                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Wedding-Store/btf/Explore_more_2x._SY232_CB653484282_.jpg" alt="image3" />
                            
                                <a href="#" target="_blank">See More</a>
                            </div>
                        </div>
                    </section>
                    <section className="main">
              <Slidecatalog />
              
                    </section>
                </main>
            </div>

            <footer>
                <div className="policy">
                    &#9900;<a href="#">FAQ</a><br />&#9900;
                    <a href="#">Contact us</a><br />&#9900;
                    <a href="#">Terms of use</a><br />&nbsp;&nbsp;
                    <a href="#">Privacy Policy</a>&nbsp;&nbsp;|
                    <a href="#">Refund Policy</a>&nbsp;&nbsp;|
                    <a href="#">&copy;2023 kashish goyal</a>&nbsp;&nbsp;
                </div>
                <div className="connect">
                    <strong>Connect with US</strong>
                    <ul>
                        <li><a href="https://www.facebook.com/AmazonIN" target="_blank">Facebook</a></li>
                        <li>Instagram</li>
                        <li>Twitter</li>
                    </ul>
                </div>
            </footer>
        </div>
    );
}

export default OnlineShoppingSite;
