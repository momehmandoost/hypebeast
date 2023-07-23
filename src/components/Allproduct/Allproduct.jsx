import React from "react";
import "./Allproduct.scss";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import useFetch from "../../hooks/useFetch";
import uploadurl from "../../variable/variable";

export const Allproduct = () => {
  const { data, loading, error } = useFetch(`/products/?populate=*`);
  console.log(data);
  return (
    <div className="productcontain">
      <h1>Or subscribe to the newsletter</h1>
      <div className="submenu">
        <div className="items">
          <ul>
            <li className="active">All products</li>
            <li>Men</li>
            <li>Women</li>
          </ul>
        </div>
        <div className="filter">
          filter
          <FilterAltIcon />
        </div>
      </div>
      <div className="products">
        {data.map((item) => (
          <div className="product">
            <div className="img">
              <img className="image"
                src={uploadurl + item.attributes.img.data.attributes?.url}
                alt="products"
              />
            </div>
            <div className="title">{item.attributes?.title}</div>
            <div className="price">{item.attributes?.price}$</div>
          </div>
        ))}
      </div>
    </div>
  );
};
