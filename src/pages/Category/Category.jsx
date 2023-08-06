import React from "react";
import "./Category.scss";
import useFetch from "../../hooks/useFetch";
import { Listcat } from "./Listcat.jsx";
import { Catitem } from "./Catitem";

export const Category = () => {
  return (
    <div className="categorycontain">
      <div className="category">
        <div className="list">
          <Listcat />
        </div>
        <div className="cats">
          <Catitem />
        </div>
        {/* <ul>
            <li className="item">Core Collection</li>
            <li className="item">Bags</li>
            <li className="item">Sneakers</li>
            <li className="item">Denim</li>
          </ul> */}
      </div>
    </div>
  );
};
