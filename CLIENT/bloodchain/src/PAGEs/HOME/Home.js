import React from "react";
import Slider from "../../COMPONENTs/SLIDER/Slider";
import Counter from "../../COMPONENTs/DONOR_COUNTER/Counter";
import Cards from "../../COMPONENTs/SECONDPAGE_CARDS/Cards";
import BestServices from "../../COMPONENTs/OUR_BEST_SERVICES/BestServices";
import MenuBar from "../../COMPONENTs/MENU/MenuBar";
import Footer from "../../COMPONENTs/FOOTER/Footer";
const Home = () => {
  return (
    <>
      <MenuBar />
      <Slider />
      <Cards />
      <Counter />
      <BestServices />
      <Footer />
    </>
  );
};

export default Home;
