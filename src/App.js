import React from "react";
import Navbar from "./components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faHeadphones,
  faHotel,
  faMap,
} from "@fortawesome/free-solid-svg-icons";

const App = () => {
  return (
    <div>
      <div class="heroSection">
        <Navbar />
        <h3 class="heroTitle">Switzerland Has Never Been So Affordable</h3>
        <p>
          Discover Switzerland. Choose the best programs, guides, hotels and
          restaurants.
        </p>
        <button class="exploreBtn">Start to Explore</button>
      </div>
      <div class="programsSection">
        <div class="cards">
          <div class="card">
            <div class="heading">
              <p>Audio Guide</p>
              <FontAwesomeIcon
                icon={faHeadphones}
                color="rgb(255 54 14 / 70%)"
              />
            </div>
            <div class="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
              perspiciatis.
            </div>
            <a href="#">Select Guide</a>
          </div>
          <div class="card">
            <div class="heading">
              <p>Programs</p>
              <FontAwesomeIcon icon={faMap} color="rgb(255 54 14 / 70%)" />
            </div>
            <div class="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
              perspiciatis.
            </div>
            <a href="#">Select Guide</a>
          </div>
          <div class="card">
            <div class="heading">
              <p>Hotels & Restaurants</p>
              <FontAwesomeIcon icon={faHotel} color="rgb(255 54 14 / 70%)" />
            </div>
            <div class="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
              perspiciatis.
            </div>
            <a href="#">Select Guide</a>
          </div>
        </div>

        <div class="topPrograms">
          <div class="title">Top Programs</div>
          <div class="desc">
            Lorem, ipsum dolor sit amet consectetur adipisicing, elit. Veritatis
            quo est quam quibusdam libero quos assumenda perferendis autem,
            magnam quasi!
          </div>
          <div class="cardBox">
            <div class="card"></div>
            <div class="card"></div>
            <div class="card"></div>
            <div class="card"></div>
            <div class="card"></div>
            <div class="card"></div>
          </div>
          <button class="moreBtn">Show More</button>
        </div>
      </div>
    </div>
  );
};

export default App;
