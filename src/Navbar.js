import React from 'react';
import './section.css';
import './dropdown.css';
import './main_website.css';
import './sign-in.css'; 

import { Link } from 'react-router-dom';

import { FaShoppingCart } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';



function Navbar() {
  return (
    <nav>
      <ul>
        <li> 
          <div className="logo">
            <a href="/">
              <img src="https://pngimg.com/d/amazon_PNG25.png" alt="logo" />
              {/* <span className="amazon">amazon</span>.in */}
            </a>
          </div>
        </li>
        <li>
          <a href="#">
            <div className="loc_box">
              &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; Hello <br />
              <img
                src="https://cdn-icons-png.flaticon.com/512/2838/2838912.png"
                alt="location"
                height="15px"
                width="15px"
                className="location"
              />
              <strong>Select your address</strong>
            </div>
          </a>
        </li>
        <li>
          <div className="search-bar">
            <div className="category">
              <ul>
                <li>
                  All &#9662;
                  <div className="list">
                    <ul>
                      <li>
                        <a href="#">Alexa skills</a>
                      </li>
                      <li>
                        <a href="#">Amazon devices</a>
                      </li>
                      <li>
                        <a href="#">Beauty</a>
                      </li>
                      <li>
                        <a href="#">Books</a>
                      </li>
                      <li>
                        <a href="#">Car & Motorbike</a>
                      </li>
                      <li>
                        <a href="#">Clothing & Accesories</a>
                      </li>
                      <li>
                        <a href="#">Computer & Accesories</a>
                      </li>
                      <li>
                        <a href="#">Furniture</a>
                      </li>
                      <li>
                        <a href="#">Gift card</a>
                      </li>
                      <li>
                        <a href="#">Toys & Games</a>
                      </li>
                      <li>
                        <a href="#">Watches</a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <input type="text" placeholder="Search Amazon" name="search" />
            </div>
            <div className="button-search">
            <FaSearch />
            </div>
          </div>
        </li>
        <li>
          <div className="lang">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAsVBMVEX/mTMSiAf/////mjH//fv6+/cAgwAAAIgAAIUAAIMAAIAAAH4AAHvu7vfe3u7Hx+AAAHb5+f20tNb39/1LS6Ghocrk5PGSksSDg7utrdEAAHLMzOS+vtxSUqRERJzX1+oQEI1ERKMvL5Z/f7d5ebaYmManp88bG5JkZK/JyeEiIpFoaKqMjL9ycrSzs9uVlctYWKI3N5tgYKw6OpoeHo8YGJEsLJYAAJAbG5lYWKkmJpLm9FjFAAAEl0lEQVR4nO3ba3PiNhiGYaoeJB9kg0/YsbEg5rQkaUtINk3+/w/rK0OyDS/tTL9YmeG5Zgin/SDuNZYRZjQCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPiffoZzo1/g3EjAOTTh0IRDEw5NuK/QpGjKu8XT5mlxVzaF68GIL9CkuJ8HvqeUknTx/GB+H7kekuMmdRZ4Utogvu/bLFJ6QVu7HZTTJsXMtxHU9iHMClNk4cNW2UR+5vQt5LLJym4Znj8VqWi0MEI3dGtKbySqsnI4LndNJjOfXnuXt1rE9v7v9k8sdJt31MqfTZyNzFkTvfOkak3/ytf2zx8ftyamVdLbaVdDc9VEz+llB/lxE4ntVLOkS3S8K3La86q5qyiOmkx2lCQvtUgruqen9GdLl6nNUKVClzlFeXP09nHUZOZJP+lv5XaKWdDlz9N1kfePN770Zm4G56bJil7wWjT97Ve6bCnMgXJsT/cpiVhTNjezj5MmEc04QXnarea0XaxWIt2k9kqs+82EnikDmn2cHNM6aZIp1dpdx2Rr9xiSjk1uhaarWyNSKU6P62mrVOZieC6axP77BpDuqUy1EGmotad1mIoFzcZ6n/bP0ubkxw7G56IJ/f+XadxPKoWkOCoRm1yHOt+IRFEKeTyyj9OSticH43PQxNAOlmbgvD8+i/xaJMGka4tx0XYiqETtG/uE3a9UtJs1ww/QQZOOXqmddKOZrfItTIS8a4IojILmTooktG+XambfXAuqVw4/QAdNnqS3Oh6i5nPaXpJxHo8jr36pvWgcr8d02JI8HydhvfLk0/ADHL4J7Tnn7weoOntJRH7TLMsymSVluWxucpHM2/elgsncxXQ8fJO1p7aTOGmOm0rlb+IkjPZ1VVb1PgqTbzu/6p/RcRJPHtXp3pCGb0KTid1HmOnrY04fiyfbcWduTdfu2858N914m9IH4/X29d78+MfDGr5JpmR4POqIVptgv4yjbm/afj02M/ulibuDP58e3zFxKB0ctg3f5E2p2ccqQJEfQlWapSctb2nuVXi7+lh51DOl3gYf4fBNaNpJP+6kuqhNnR9U30QdVrGpC/2P511MPMM3eZYqMk01ffz+EtzcjMnLw14eHcoX+wA9LP/Kujw2kZKbwUeI7YTD/oT7IvNOdt3zzr8fn5RXe3xS4TiWweedC/C5mPu8fhJj/UScrbMZrLP16ANfd7Ye+3xxPba7mvXY/1y3b/t1++PuhvbGwbWs2+P7nQs+fw+4xveAFr4vvgDnFXCTN5x/wuA8pQtwPtsFx/MelxfOe1xe63mPAufHXoTzqC/B+faXFPfPn36X8Xz1v8vo9b/f2W12+P3O14UmHJpwaMKhCTf6Fc6NfoNzo5/gHJpwaMKhCYcmHJpwaMKhCYcmHJpwaMKhCYcmHJpwaMKhCYcmHJpwaMKhCYcmHJpwaMKhCYcmHJpwaMKhCYcmHJpwaMKhCYcmHJpwaMKhCYcmHJpwaMKhCYcmHJpwaMKhCYcmHJpwaMKhCYcmHJpwaMKhCYcmHJpwaMKhCYcmHJpwaMKhCfc3xgk4+urIdocAAAAASUVORK5CYII="
              alt="india"
              width="20px"
              height="auto"
              style={{ borderRadius: '2px' }}
            />
            <select name="language" id="language">
              {/* <div className="option"> */}
                <option value="Default" id="default-lang">
                  EN
                </option>
                <option value="English">English-EN</option>
                <option value="hindi">हिंदी-HI</option>
                <option value="tamil">தமிழ்-TA</option>
                <option value="telugu">తెలుగు-TE</option>
                <option value="kannad">ಕನ್ನಡ-KA</option>
                <option value="marathi">मराठी-MR</option>
              {/* </div> */}
            </select>
          </div>
        </li>
        <li>
          <div className="accounts">
            <div className="sign-in">
              <ul>
                <li className="sign-inText">
                  <p>
                    Hello!
                    <br />Account & lists &#9662;
                  </p>
                  <div className="sign-in sign-in-button">
                    <ul>
                      <li>
                      <Link to="/login">
              Sign-in
              </Link>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <div className="shop-cart">
          <Link to="/cart">
            <FaShoppingCart size={25} />
              Cart
              </Link>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
