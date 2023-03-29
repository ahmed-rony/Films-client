import React from "react";
import JobCard from "../../Component/JobCard/JobCard";
import { jobData } from "../../Utilities/Data";
import "./JobList.scss";

const JobList = () => {
  return (
    <div className="job_list">
      <div className="job_bg">
        <div className="banner-detail">
          <h1>Life-changing Jobs and Gigs</h1>
          <p>Find your dream job. Hire your perfect candidate.</p>
          <div className="searching">
            <input type="text" name="" id="" placeholder="Find a job" />
            <button className="brand-btn">SEARCH</button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="content">
          <JobCard jobs={jobData}/>
        </div>
      </div>
    </div>
  );
};

export default JobList;
