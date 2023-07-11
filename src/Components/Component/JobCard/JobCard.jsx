import React from "react";
import { Link } from "react-router-dom";
import "./JobCard.scss";

const JobCard = ({ job }) => {
  return (
    <div>
      <Link to={`/jobs/${job?._id}`} key={job?._id}>
        <div className="job_item">
          <div className="brand-logo">
            <img src={job?.userPic} alt="" />
          </div>
          <div className="detail">
            <h4>{job?.title.substring(0, 60)}</h4>
            <span>Closing {job?.closingDate}</span>
            <span>Start {job?.startingDate}</span>
          </div>
          <div className="detail2">
            <span>{job?.location}</span>
            <span>{job?.contract}</span>
            <span>{job?.minimum} - {job?.minimum} /day</span>
          </div>
          <span
            className={
              job?.postType !== "Featured" ? `post-type job` : `post-type featured`
            }
          >
            {job?.postType}
          </span>
        </div>
      </Link>
    </div>
  );
};

export default JobCard;
