import React from "react";
import Header from "./section/Header";
import Services from "./section/Services";
import Portfolio from "./section/Portfolio";
import About from "./section/About";
import Quote from "./section/Quote";
import HowWork from "./section/HowWork";

const Main = () => {
  return (
    <>
      <Header />
      <Services />
      <Portfolio />
      <About />
      <Quote />
      <HowWork />
    </>
  );
};

export default Main;
