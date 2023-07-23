import React from "react";
import { Hero } from "../../components/Hero/Hero";
import { Brand } from "../../components/Brand/Brand";
import { Gallery } from "../../components/Gallery/Gallery";
import { Allproduct } from "../../components/Allproduct/Allproduct";

export const Home = () => {
  return (
    <div className="totalhome">
      <Hero />
      <Brand />
      <Gallery />
      <Allproduct />
    </div>
  );
};
