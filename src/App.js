import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useFetch from "../src/hooks/useFetch";


const MyComponent = () => {
  const { data, loading, error } = useFetch(`/products/?populate=*`);


  return (
    <div>
      {data.map((item) => <div>{item.attributes?.title}</div>)}
    </div>
  );
};

export default MyComponent;