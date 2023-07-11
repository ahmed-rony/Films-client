import React, { useContext, useState } from "react";
import About from "../../Component/About/About";
import JobCard from "../../Component/JobCard/JobCard";
import TalentCard from "../../Component/TalentCard/TalentCard";
import "./ProfilePage.scss";
import { RiUserFollowLine } from "react-icons/ri";
import { FiMail } from "react-icons/fi";
import { AiOutlineEdit } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../../Component/Navbar/Navbar";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { newRequest } from "../../Utilities/newRequest";
import AuthContext from "../../Utilities/Reducers/AuthReducer";

const ProfilePage = () => {
  const [company, setCompany] = useState(true);
  const [tabs, setTabs] = useState(0);
  const [createTab, setCreateTab] = useState(false);
  const { currentUser } = useContext(AuthContext);

  const userId = useLocation().pathname.split("/")[2];

  // ==================================================
  const { isLoading, error, data } = useQuery({
    queryKey: ["userProfile"],
    queryFn: async () =>
      await newRequest.get(`/users/${userId}`).then((res) => {
        return res.data;
      }),
  });

  // ==================================================
  const {
    isLoading: talentWorkLoading,
    error: talentWorkError,
    data: talentWorks,
  } = useQuery({
    queryKey: ["project"],
    queryFn: async () =>
      await newRequest.get(`/projects?userId=${userId}`).then((res) => {
        return res.data;
      }),
  });

  // ==================================================
  const {
    isLoading: jobsLoading,
    error: jobsError,
    data: jobs,
  } = useQuery({
    queryKey: ["jobs"],
    queryFn: async () =>
      await newRequest.get(`/jobs?userId=${userId}`).then((res) => {
        return res.data;
      }),
  });

  // ==================================================
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (profileId) => {
      return newRequest.put(`/users/${userId}/follow`, { profileId });
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["userProfile"]);
    },
  });

  const conversationMutation = useMutation({
    mutationFn: (coversations) => {
      return newRequest.post(`/conversations`, coversations);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["conversations"]);
    },
  });

  // ==================================================
  const createConversation = async () => {
    const conversation = {
      senderId: currentUser?._id,
      recieverId: userId,
    };
    try {
      if (userId !== currentUser?._id) {
        await conversationMutation.mutateAsync(conversation);
      }
    } catch (error) {
      console.log(error);
    }
  };
  // ==================================================
  const handleFollow = async () => {
    try {
      await mutation.mutateAsync(currentUser?._id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="profile">
        <div className="cover">
          <img src={data?.profileCover} alt="" />
        </div>
        <div className="user-detail">
          <div className="container">
            <div className="detail">
              <img
                src={data?.profilePic ? data?.profilePic : "/Img/avater.jpg"}
                alt=""
              />
              <h3>
                {data?.fullName}
                {currentUser?._id === userId && (
                  <small>@{currentUser?.username}</small>
                )}
              </h3>
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
                {currentUser?._id === userId && (
                  <Link to={`/profile-setting/${currentUser?._id}`}>
                    Setting
                  </Link>
                )}
              </ul>
              <div className="connection">
                {currentUser?._id === userId ? (
                  <>
                    <div className="followings">
                      <h6>Followers {data?.followers?.length || 0}</h6>
                      <h6>Following {data?.followings?.length || 0}</h6>
                    </div>
                    <button
                      className="brand-btn"
                      onClick={(e) => setCreateTab(!createTab)}
                    >
                      Create <AiOutlineEdit />
                    </button>
                    <div className={!createTab ? "create" : "create-toggle"}>
                      {!currentUser?.isTalent && (
                        <Link to="/addJob">
                          <button className="brand-btn">
                            Job <AiOutlineEdit />
                          </button>
                        </Link>
                      )}
                      <Link to="/addMagazine">
                        <button className="brand-btn">
                          Post <AiOutlineEdit />
                        </button>
                      </Link>
                      <Link to="/addProject">
                        <button className="brand-btn">
                          Project <AiOutlineEdit />
                        </button>
                      </Link>
                    </div>
                  </>
                ) : (
                  <>
                    <button className="brand-btn" onClick={handleFollow}>
                      {data?.followers?.includes(currentUser?._id)
                        ? "Following"
                        : "Follow"}
                      <RiUserFollowLine />
                    </button>
                  </>
                )}
                <Link to="/messages">
                  <button
                    className="brand-btn last"
                    onClick={createConversation}
                  >
                    Message <FiMail />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className={tabs === 0 ? "content columns" : "content"}>
            {talentWorkLoading
              ? "loading work project"
              : talentWorkError
              ? "Something went wrong!"
              : tabs === 0 &&
                talentWorks?.map((t) => <TalentCard key={t?._id} talent={t} />)}
            {tabs === 1 && <About data={data} />}
            {jobsLoading
              ? "loading jobs"
              : jobsError
              ? "Something went wrong!"
              : tabs === 2 &&
                jobs?.map((j) => <JobCard key={j?._id} job={j} />)}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
