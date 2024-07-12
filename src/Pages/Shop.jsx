import React from "react";
import Hero from "../Components/Hero/Hero";
import Poplular from "../Components/Popular/Popular";
import Offers from "../Components/Offers/Offers";
import NewCollection from "../Components/NewCollections/NewCollection";
import NewsLetter from "../Components/NewLetters/NewsLetters";
import { Background } from "../Components/Background/Background";

const Shop = () => {
  return (
    <div>
      <Background/>
      <Hero />
      <Poplular />
      <Offers />
      <NewCollection />
      <NewsLetter />
    </div>
  );
};
export default Shop;
