import React from "react";
import uploadurl from "../../variable/variable";
import useFetch from "../../hooks/useFetch";
import "./Catitem.scss";

export const Catitem = () => {
  const { data, loading, error } = useFetch(`/products/?populate=*`);
  return (
    <div className="catitem" id="cat">
      {data.map((item) => (
        <div className="catcard">
          <div className="img">
            <img
              className="imgitem"
              src={uploadurl + item.attributes.img.data.attributes?.url}
              alt="products"
            />
          </div>
          <div className="slidertitle">{item.attributes?.title}</div>
          <div className="sliderprice">{item.attributes?.price}$</div>
        </div>
      ))}
    </div>
  );
};
