import React, { useState } from "react";
import "./About.scss";
import { AiFillFilePdf, AiOutlineStar } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";

const About = ({ data }) => {
  const [company, setCompany] = useState(false);
  const dateStr = data?.createdAt;
  const date = new Date(dateStr);
  const options = { month: "long", day: "numeric", year: "numeric" };
  const formattedDate = date.toLocaleDateString(undefined, options);
  return (
    <div className="about">
      <div className="left">
        <div className="item">
          <h3>About {data?.isTalent ? "Me" : "Us"}</h3>
          <p>{data?.about}</p>
        </div>
        <div className="item">
          <h3>Skills</h3>
          <div className="array">
            {data?.skills?.map((s, i, arr) => (
              <React.Fragment key={i}>
                <span>
                  {s}
                  {i < arr.length - 1 && ", "}
                </span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
      <div className="right">
        <span className="cv">
          <AiFillFilePdf className="icon" /> Emile's CV / Resume
        </span>
        <div className="item">
          <h4>RECOMMENDATION</h4>
          <div className="icons">
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        </div>
        <div className="item">
          <h4>AVAILABILITY</h4>
          <span>{data?.availability || "N/A"}</span>
        </div>
        <div className="item">
          <h4>CONTRACT</h4>
          <span>{data?.contract || "N/A"}</span>
        </div>
        <div className="item">
          <h4>LOCATION</h4>
          <span>
            <FaMapMarkerAlt className="icon" />
            {data?.location || "N/A"}
          </span>
        </div>
        <div className="item">
          <h4>SKILL LEVEL</h4>
          <div className="array">
            {data?.skillLevel?.map((sl, i, arr) => (
              <React.Fragment key={i}>
                <span>
                  {sl}
                  {i < arr.length - 1 && ", "}
                </span>
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="item">
          <h4>LANGUAGES</h4>
          <div className="array">
            {data?.language?.map((lang, i, arr) => (
              <React.Fragment key={i}>
                <span>
                  {lang}
                  {i < arr.length - 1 && ", "}
                </span>
              </React.Fragment>
            ))}
          </div>
        </div>
        <span className="since">Film &'s' member since {formattedDate}.</span>
      </div>
    </div>
  );
};

export default About;
