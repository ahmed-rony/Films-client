import React, { useState } from "react";
import About from "../../Component/About/About";
import JobCard from "../../Component/JobCard/JobCard";
import TalentCard from "../../Component/TalentCard/TalentCard";
import { jobData, talentWork } from "../../Utilities/Data";
import "./ProfilePage.scss";
import { RiUserFollowLine } from "react-icons/ri";
import { FiMail } from "react-icons/fi";
import { AiOutlineEdit } from "react-icons/ai";
import { Link } from "react-router-dom";
import Navbar from "../../Component/Navbar/Navbar";

const ProfilePage = () => {
  const [company, setCompany] = useState(true);
  const [tabs, setTabs] = useState(0);
  const [currentUser, setCurrentUser] = useState(true);
  return (
    <>
      <Navbar />
      <div className="profile">
        <div className="cover">
          <img
            src="https://creativepool.com//files/profileheader/parallax/315279.jpg"
            alt=""
          />
        </div>
        <div className="user-detail">
          <div className="container">
            <div className="detail">
              <img
                src="https://i.pinimg.com/236x/6b/2f/32/6b2f323d39f013faa9bf8ce141e9fba7.jpg"
                alt=""
              />
              <h3>Emile Joe</h3>
              <ul>
                <li value={0} onClick={(e) => setTabs(e.target.value)}>
                  Work
                </li>
                <li value={1} onClick={(e) => setTabs(e.target.value)}>
                  About
                </li>
                {company && (
                  <li value={2} onClick={(e) => setTabs(e.target.value)}>
                    Jobs
                  </li>
                )}
              </ul>
              <div className="connection">
                {currentUser ? (
                  <>
                    <Link to="/addProject">
                      <button className="brand-btn">Add Project <AiOutlineEdit/></button>
                    </Link>
                  </>
                ) : (
                  <>
                    <button className="brand-btn">
                      Follow
                      <RiUserFollowLine />
                    </button>
                  </>
                )}
                <Link to="/messages">
                  <button className="brand-btn last">
                    Message <FiMail />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className={tabs === 0 ? "content columns" : "content"}>
            {tabs === 0 && <TalentCard data={talentWork} />}
            {tabs === 1 && <About />}
            {tabs === 2 && <JobCard jobs={jobData} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
