import React from "react";
import { Link } from "react-router-dom";
import "./JobCard.scss";

const JobCard = ({ jobs }) => {
  return (
    <div>
      {jobs.map((j) => (
        <Link to={`/jobs/${j.id}`}  key={j.id}>
          <div className="job_item">
            <div className="brand-logo">
              <img src={j.companyLogo} alt="" />
            </div>
            <div className="detail">
              <h4>{j.title.substring(0, 60)}</h4>
              <span>Closing {j.closeAt}</span>
              <span>Start {j.startAt}</span>
            </div>
            <div className="detail2">
              <span>{j.address}</span>
              <span>{j.jobType}</span>
              <span>{j.wage} /day</span>
            </div>
            <span className={j.postType !== 'Featured' ? `post-type job` : `post-type featured`}>{j.postType}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default JobCard;
