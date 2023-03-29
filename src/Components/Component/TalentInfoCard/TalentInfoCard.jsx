import React from "react";
import { Link } from "react-router-dom";
import "./TalentInfoCard.scss";

const TalentInfoCard = ({ data }) => {
  // console.log(data.map((p) => p.info[0].skills));
  return (
    <div>
      {data.map((p) => (
        <Link to={`/profile/${p.id}`} key={p.id}>
          <div className="info_item">
            <div className="left">
              <img src={p.imgUser} alt="" />
              <div className="detail">
                <h4>{p.username}</h4>
                <div className="skill">
                  <span>{p.info[0].skills}</span>
                  <span>{p.info[0].address}</span>
                </div>
              </div>
            </div>
            <div className="right">
              <h4>Sound Editor / Music Editor / Composer</h4>
              <h5>
                Skill Level: <span>Intermediate</span>
              </h5>
              <p>{p.desc.substring(0, 300)}..</p>
              <h6>Looking for work</h6>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default TalentInfoCard;
