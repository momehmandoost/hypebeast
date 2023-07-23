import React from "react";
import "./Gallery.scss";
import bag from "../../assets/gallery/bag.jpg";
import corecollection from "../../assets/gallery/corecollection.jpg";
import mandenim from "../../assets/gallery/mendenim.jpg";
import sneaker from "../../assets/gallery/sneaker.jpg";

export const Gallery = () => {
  return (
    <div class="gallerycontain">
      <h1>Explore New And Popular Styles</h1>
      <div class="grid-container">
        <div class="featured grid-one">
          <a href="/categories/furnitures">
            <div id="img1" class="lil-overlay"></div>
            <img src={corecollection} alt="img1" />
            <p class="main-description">Core Collection</p>
          </a>
        </div>
        <div class="featured grid-two">
          <a href="/categories/skin-care">
            <div id="img2" class="lil-overlay"></div>
            <img src={bag} alt="img2" />
            <p class="main-description">Bags</p>
          </a>
        </div>
        <div class="featured grid-four">
          <a href="/categories/kitchen">
            <div id="img3" class="lil-overlay"></div>
            <img src={sneaker} alt="img3" />
            <p class="main-description">Sneakers </p>
          </a>
        </div>
        <div class="featured grid-four-low">
          <a href="/categories/electronics">
            <div id="img4" class="lil-overlay"></div>
            <img src={mandenim} alt="img4" />
            <p class="main-description">Denim</p>
          </a>
        </div>
      </div>
    </div>
  );
};
