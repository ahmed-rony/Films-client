import React from "react";
import { gridMag, talentWork } from "../../Utilities/Data";
import "./HomeContents.scss";
import TalentCard from "../TalentCard/TalentCard";
import MagazineCard from "../MagazineCard/MagazineCard";

const HomeContents = () => {
  return (
    <div className="home-content">
      <div className="container">
        <div className="row gx-5">
          <div className="col-md-6">
            <h3>
              Featured <span>Work</span>
            </h3>
            <div className="feature">
              <TalentCard data={talentWork}/>
            </div>
          </div>
          <div className="col-md-6">
            <h3>
              Latest from the <span>Magazines</span>
            </h3>
            <div className="magazine">
              <MagazineCard mag={gridMag}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContents;
