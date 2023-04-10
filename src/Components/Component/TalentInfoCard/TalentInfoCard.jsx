import React from "react";
import { Link } from "react-router-dom";
import "./TalentInfoCard.scss";

const TalentInfoCard = ({ data }) => {
  console.log(data);
  return (
    <div>
      {data.map((p) => (
        <Link to={`/profile/${p?._id}`} key={p?._id}>
          <div className="info_item">
            <div className="left">
              <img src={p?.profilePic} alt="" />
              <div className="detail">
                <h4>{p?.fullName}</h4>
                <div className="skill">
                  <span>{p?.talentTitle}</span>
                  <span>{p?.location}</span>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="skills">
                {p?.skills?.map((s, i, arr) => (
                  <React.Fragment key={i}>
                    <h4 key={i}>
                      {s}
                      {i < arr.length - 1 && " / "}
                    </h4>
                  </React.Fragment>
                ))}
              </div>
              <h5>
                Skill Level: {p?.skillLevel?.map((sl, i, arr) => (
                  <React.Fragment key={i}>
                    <span key={sl}>{sl}</span>
                    {i < arr.length - 1 && ", "}
                  </React.Fragment>
                ))}
              </h5>
              <p>{p?.about.substring(0, 300)}..</p>
              <h6>{p?.availability}</h6>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default TalentInfoCard;
