import React from "react";
import Header from "./section/Header";
import Services from "./section/Services";
import Portfolio from "./section/Portfolio";
import About from "./section/About";
import Quote from "./section/Quote";
import HowWork from "./section/HowWork";
import Usefull from "./section/Usefull";
import Material from "./section/Material";

const Main = () => {
  return (
    <>
      <Header />
      <Services />
      <Usefull />
      <Material />
      <Portfolio />
      <About />
      <Quote />
      <HowWork />
    </>
  );
};

export default Main;
