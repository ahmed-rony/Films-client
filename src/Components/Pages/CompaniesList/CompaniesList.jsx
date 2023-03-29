import React from "react";
import TalentInfoCard from "../../Component/TalentInfoCard/TalentInfoCard";
import { talentWork } from "../../Utilities/Data";
import "./CompaniesList.scss";

const CompaniesList = () => {
  return (
    <div className="company_list">
      <div className="company_bg">
        <div className="banner-detail">
          <h1>Creative Services Directory</h1>
          <p>
            Find a company to solve your creative challenges, get a job with or
            be inspired by.
          </p>
          <div className="searching">
            <input type="text" name="" id="" placeholder="Find a company" />
            <button className="brand-btn">SEARCH</button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="content">
          <TalentInfoCard data={talentWork}/>
        </div>
      </div>
    </div>
  );
};

export default CompaniesList;
