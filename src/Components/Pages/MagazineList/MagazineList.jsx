import React from "react";
import MagazineCard from "../../Component/MagazineCard/MagazineCard";
import { gridMag } from "../../Utilities/Data";
import "./MagazineList.scss";

const MagazineList = () => {
  return (
    <div className="magazine_list">
      <div className="magazine_bg">
        <div className="banner-detail">
          <h1>Life-changing Jobs and Gigs</h1>
          <p>Find your dream job. Hire your perfect candidate.</p>
          <div className="searching">
            <input type="text" name="" id="" placeholder="Find an article" />
            <button className="brand-btn">SEARCH</button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="content">
          <h3>
            Searched: <span>editing</span>
          </h3>
          <MagazineCard mag={gridMag} />
        </div>
      </div>
    </div>
  );
};

export default MagazineList;
