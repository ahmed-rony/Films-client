import React, { useState } from "react";
import "./About.scss";
import { AiFillFilePdf, AiOutlineStar } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";

const About = ({ data }) => {
  const [company, setCompany] = useState(false);
  return (
    <div className="about">
      <div className="left">
        <div className="item">
          <h3>About {data?.isTalent ? "Me" : "Us"}</h3>
          <p>{data.about}</p>
        </div>
        <div className="item">
          <h3>Skills</h3>
          {data?.skills?.map((s) => (
            <span>{s}</span>
          ))}
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
          <span>Looking for work</span>
        </div>
        <div className="item">
          <h4>CONTRACT</h4>
          <span>Remote</span>
        </div>
        <div className="item">
          <h4>LOCATION</h4>
          <span>
            <FaMapMarkerAlt className="icon" />
            London, United Kingdom
          </span>
        </div>
        <div className="item">
          <h4>SKILL LEVEL</h4>
          <span>Junior, Middleweight, Senior, Director</span>
        </div>
        <div className="item">
          <h4>LANGUAGES</h4>
          <span>English</span>
        </div>
        <span className="since">Film &'s' member since 29 November 2022</span>
      </div>
    </div>
  );
};

export default About;
