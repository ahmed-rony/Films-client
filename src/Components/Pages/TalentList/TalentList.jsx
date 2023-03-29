import React, { useState } from "react";
import TalentCard from "../../Component/TalentCard/TalentCard";
import TalentInfoCard from "../../Component/TalentInfoCard/TalentInfoCard";
import { talentWork } from "../../Utilities/Data";
import "./TalentList.scss";

const TalentList = () => {
  const [tabs, setTabs] = useState(false);
  console.log(tabs);
  return (
    <div className="talent_list">
      <div className="talent_bg">
        <div className="banner-detail">
          <h1>Industry Leading Talent</h1>
          <p>Connect, collaborate and hire our community.</p>
          <div className="searching">
            <input type="text" name="" id="" placeholder="Find a talent" />
            <button className="brand-btn">SEARCH</button>
          </div>
        </div>
      </div>
      <div className="container">
        <div
          className="content"
          style={tabs ? null : { columns: "4", columnGap: "20px" }}
        >
          <div className="tabs">
            <button className="brand-btn" onClick={() => setTabs(false)}>Works</button>
            <button className="brand-btn" onClick={() => setTabs(true)}>Profiles</button>
          </div>
          <h3>
            Searched: <span>editor</span>
          </h3>
          {tabs ? (
            <TalentInfoCard data={talentWork} />
          ) : (
            <TalentCard data={talentWork} />
          )}
        </div>
      </div>
    </div>
  );
  333;
};

export default TalentList;
