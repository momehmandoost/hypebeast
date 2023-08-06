import React from "react";
import useFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom";

export const Listcat = () => {
  const { data, loading, error } = useFetch(`/categories/?populate=*`);
  return (
    <div>
      <ul>
        {data.map((items) => (
          <li key={items.id}>
            <Link to={`/categories/${items.id}`}>{items.attributes.title}</Link>
          </li>
        ))}
      </ul>
      <div className="list"></div>
    </div>
  );
};
