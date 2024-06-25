import React from "react";
import Carousel from "../components/Carousel";
import Location from "../components/Location";
import FooterTop from "../components/FooterTop";

const Home = () => {
  return (
    // <div className="pt-[223px]">
    <div>
      <Carousel />
      {/* <div className="h-screen">ddd</div> */}
      <div>
        <Location />
        <FooterTop />
      </div>
    </div>
    // </div>
  );
};

export default Home;
