import React, { useState } from "react";
import "./About.scss";
import { AiFillFilePdf, AiOutlineStar  } from 'react-icons/ai';
import { FaMapMarkerAlt } from 'react-icons/fa';

const About = () => {
  const [company, setCompany] = useState(false);
  return (
    <div className="about">
      <div className="left">
        <div className="item">
          <h3>About {company ? "Us" : "Me"}</h3>
          <p>Detail-oriented and assiduous Illustrator and Graphic Designer encompassing a broad and diverse portfolio on an International level. Eminent experience of producing high quality designs partnered with a conscientious approach and laudable interpersonal skills have formed vast opportunities to translate an array of client briefs into unique, innovative designs. Valuable experience working with wide ranging clients has developed an ability to strategically articulate creative visions and creatively combine traditional and modern techniques. Now searching for an opportunity to continue managing client projects whilst maintaining a passion for surpassing expectations through the conception and execution of bespoke artwork and illustrations.</p>
        </div>
        <div className="item">
            <h3>Skills</h3>
            <span>Digital Art, Fine Arts, Graphic Design, Illustration, Visual Layout</span>
        </div>
      </div>
      <div className="right">
        <span className="cv"><AiFillFilePdf className="icon"/> Emile's CV / Resume</span>
        <div className="item">
            <h4>RECOMMENDATION</h4>
            <div className="icons">
                <AiOutlineStar/>
                <AiOutlineStar/>
                <AiOutlineStar/>
                <AiOutlineStar/>
                <AiOutlineStar/>
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
            <span><FaMapMarkerAlt className="icon" />London, United Kingdom</span>
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
