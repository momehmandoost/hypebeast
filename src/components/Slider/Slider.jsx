import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import useFetch from "../../hooks/useFetch";
import uploadurl from "../../variable/variable";
import "./Slider.scss";

export const Slider = () => {
  const { data, loading, error } = useFetch(`/products/?populate=*`);
  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 235;
  };

  const slideRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 235;
  };
  return (
    <div className="sliderproductcontain">
      <div className="title-btns">
        <h3>Trending</h3>
        <div className="btns">
          <button title="scroll left" onClick={slideLeft}>
            <ArrowBackIosNewIcon />
          </button>
          <button title="scroll right" onClick={slideRight}>
            <ArrowForwardIosIcon />
          </button>
        </div>
      </div>
      <div className="sliderproducts" id="slider">
        {data.map((item) => (
          <div className="sliderproduct">
            <div className="img">
              <img
                className="sliderimg"
                src={uploadurl + item.attributes.img.data.attributes?.url}
                alt="products"
              />
            </div>
            <div className="slidertitle">{item.attributes?.title}</div>
            <div className="sliderprice">{item.attributes?.price}$</div>
          </div>
        ))}
      </div>
    </div>
  );
};
