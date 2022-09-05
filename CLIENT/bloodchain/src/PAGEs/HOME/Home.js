import React from "react";
import Slider from "../../COMPONENTs/SLIDER/Slider";
import Counter from "../../COMPONENTs/DONOR_COUNTER/Counter";
import Cards from "../../COMPONENTs/SECONDPAGE_CARDS/Cards";
import BestServices from "../../COMPONENTs/OUR_BEST_SERVICES/BestServices";

const Home = () => {
  return (
    <>
      <Slider />
      <Cards />
      <Counter />
      <BestServices />
    </>
  );
};

export default Home;
