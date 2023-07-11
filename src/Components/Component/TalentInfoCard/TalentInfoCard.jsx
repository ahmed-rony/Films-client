import React from "react";
import { Link } from "react-router-dom";
import "./TalentInfoCard.scss";

const TalentInfoCard = ({ data }) => {
  return (
    <div>
      <Link to={`/profile/${data?._id}`} key={data?._id}>
        <div className="info_item">
          <div className="left">
            <img src={data?.profilePic} alt="" />
            <div className="detail">
              <h4>{data?.fullName}</h4>
              <div className="skill">
                <span>{data?.talentTitle}</span>
                <span>{data?.location}</span>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="skills">
              {data?.skills?.map((s, i, arr) => (
                <React.Fragment key={i}>
                  <h4 key={i}>
                    {s}
                    {i < arr.length - 1 && " / "}
                  </h4>
                </React.Fragment>
              ))}
            </div>
            <h5>
              Skill Level:{" "}
              {data?.skillLevel?.map((sl, i, arr) => (
                <React.Fragment key={i}>
                  <span key={sl}>{sl}</span>
                  {i < arr.length - 1 && ", "}
                </React.Fragment>
              ))}
            </h5>
            <p>
              {data?.about?.length > 300
                ? `${data?.about?.substring(0, 300)}..`
                : data?.about}
            </p>
            <h6>{data?.availability}</h6>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TalentInfoCard;
