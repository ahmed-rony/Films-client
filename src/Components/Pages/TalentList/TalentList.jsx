import React, { useState } from "react";
import TalentCard from "../../Component/TalentCard/TalentCard";
import TalentInfoCard from "../../Component/TalentInfoCard/TalentInfoCard";
import { talentWork } from "../../Utilities/Data";
import "./TalentList.scss";

const TalentList = () => {
  const [tabs, setTabs] = useState(false);
  const [filterTab, setFilterTab] = useState(false);
  console.log(filterTab);
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
          <div className="filter">
            <span onClick={()=> setFilterTab(!filterTab)}>Filter</span>
            <div className={filterTab ? "ch-box visible" :  "ch-box"}>
              <div className="left">
                <div className="item">
                  <input type="checkbox" />
                  <label htmlFor="">Design</label>
                </div>
                <div className="item">
                  <input type="checkbox" />
                  <label htmlFor="">Choreography</label>
                </div>
                <div className="item">
                  <input type="checkbox" />
                  <label htmlFor="">Editor</label>
                </div>
                <div className="item">
                  <input type="checkbox" />
                  <label htmlFor="">Director</label>
                </div>
                <div className="item">
                  <input type="checkbox" />
                  <label htmlFor="">Project Manager</label>
                </div>
              </div>
              <div className="right">
                <div className="item">
                  <input type="checkbox" />
                  <label htmlFor="">Animator</label>
                </div>
                <div className="item">
                  <input type="checkbox" />
                  <label htmlFor="">Producer</label>
                </div>
                <div className="item">
                  <input type="checkbox" />
                  <label htmlFor="">Illustrator</label>
                </div>
                <div className="item">
                  <input type="checkbox" />
                  <label htmlFor="">Script Writer</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div
          className="content"
          style={tabs ? null : { columns: "4", columnGap: "20px" }}
        >
          <div className="tabs">
            <button className="brand-btn" onClick={() => setTabs(false)}>
              Works
            </button>
            <button className="brand-btn" onClick={() => setTabs(true)}>
              Profiles
            </button>
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
