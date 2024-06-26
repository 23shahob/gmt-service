import React from "react";
import Carousel from "../components/home/Carousel";
import Accordion from "../components/home/Accordion";
import Location from "../components/home/Location";
import FooterTop from "../components/home/FooterTop";
import HomeStaticSection from "../components/home/HomeStaticSection";
import Clients from "../components/home/Clients";
import Brends from "../components/home/Brends";

const Home = () => {
  return (
    // <div className="pt-[223px]">
    <div>
      <Carousel />
      {/* <div className="h-screen">ddd</div> */}
      <div>
        <HomeStaticSection />
        <Clients />
        <Brends />
        <Accordion />
        <Location />
        <FooterTop />
      </div>
    </div>
    // </div>
  );
};

export default Home;
