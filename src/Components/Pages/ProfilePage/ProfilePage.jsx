import React, { useContext, useState } from "react";
import About from "../../Component/About/About";
import JobCard from "../../Component/JobCard/JobCard";
import TalentCard from "../../Component/TalentCard/TalentCard";
import { jobData, talentWork } from "../../Utilities/Data";
import "./ProfilePage.scss";
import { RiUserFollowLine } from "react-icons/ri";
import { FiMail } from "react-icons/fi";
import { AiOutlineEdit } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../../Component/Navbar/Navbar";
import { useQuery } from "react-query";
import { newRequest } from "../../Utilities/newRequest";
import AuthContext from "../../Utilities/Reducers/AuthReducer";

const ProfilePage = () => {
  const [company, setCompany] = useState(true);
  const [tabs, setTabs] = useState(0);
  const { currentUser } = useContext(AuthContext);

  const userId = useLocation().pathname.split('/')[2];

  const { isLoading, error, data } = useQuery({
    queryKey: ['userData'],
    queryFn: async () =>
      await newRequest.get(`/users/${userId}`).then((res)=>{
        return res.data;
      })
    });

    const { isLoading: talentWorkLoading, error: talentWorkError, data: talentWorks } = useQuery({
      queryKey: ['talentWorks'],
      queryFn: async () =>
        await newRequest.get(`/projects?userId=${userId}`).then((res)=>{
          return res.data;
        })
      });
  return (
    <>
      <Navbar />
      <div className="profile">
        <div className="cover">
          <img
            src={data?.profileCover}
            alt=""
          />
        </div>
        <div className="user-detail">
          <div className="container">
            <div className="detail">
              <img
                src={(data?.profilePic) ? data?.profilePic : '/Img/avater.jpg'}
                alt=""
              />
              <h3>{data?.fullName} {(currentUser?._id === userId) && <small>@{currentUser?.username}</small>}</h3>
              <h5>{data?.talentTitle}</h5>
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
                {(currentUser?._id === userId) && <Link to={`/profile-setting/${currentUser?._id}`}>
                  Setting
                </Link>}
              </ul>
              <div className="connection">
                {currentUser?.isTalent ? (
                  <>
                    <Link to="/addProject">
                      <button className="brand-btn">
                        Add Project <AiOutlineEdit />
                      </button>
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
            {tabs === 0 && <TalentCard data={talentWorks} />}
            {tabs === 1 && <About data={data} />}
            {tabs === 2 && <JobCard jobs={jobData} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
