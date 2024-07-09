import React from "react";
import Hero from "../Components/Hero/Hero";
import Poplular from "../Components/Popular/Popular";
import Offers from "../Components/Offers/Offers";
import NewCollection from "../Components/NewCollections/NewCollection";
import NewsLetter from "../Components/NewLetters/NewsLetters";

const Shop = () => {
  return (
    <div>
      <Hero />
      <Poplular />
      <Offers />
      <NewCollection />
      <NewsLetter />
    </div>
  );
};
export default Shop;
