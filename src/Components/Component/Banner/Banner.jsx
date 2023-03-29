import React from "react";
import "./Banner.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { slideImg } from "../../Utilities/Data";
import Slider from "react-slick";

const Banner = () => {
  const settings = {
    dots: false,
    fade: true,
    autoplay: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="banner">
      <Slider {...settings}>
        {slideImg.map((pic) => (
          <div key={pic.urlImg} className="slide_img">
            <img src={pic.urlImg} alt="" />
          </div>
        ))}
      </Slider>
      <div className="banner_detail">
        <h1>The Creative Industry Network</h1>
        <p>
          Connect, hire and be inspired by the world’s most talented industry
          professionals and companies.
        </p>
        <div className="search-all">
          <div className="searching">
            <input type="text" name="" id="" placeholder="Find a talent" />
            <button className="brand-btn">SEARCH</button>
          </div>
          <div className="filter">
            <button className="brand-btn active">Talents</button>
            <button className="brand-btn">Jobs</button>
            <button className="brand-btn">Companies</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
