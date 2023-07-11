import React, { useContext, useState } from "react";
import Modal from "react-modal/lib/components/Modal";
import "./WorkModal.scss";
import { Link } from "react-router-dom";
import { RiUserFollowLine } from "react-icons/ri";
import { FiMail, FiHeart } from "react-icons/fi";
import { MdOutlineRemoveRedEye, MdOutlineClose } from "react-icons/md";
import YouTube from "react-youtube";
import Comment from "../Comment/Comment";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { newRequest } from "../../Utilities/newRequest";
import AuthContext from "../../Utilities/Reducers/AuthReducer";

const WorkModal = ({ data, modalIsOpen, setModalIsOpen }) => {
  const [desc, setDesc] = useState("");
  const { currentUser } = useContext(AuthContext);
  const closeModal = () => {
    setModalIsOpen(false);
  };
  const opts = {
    height: "390",
    width: "690",
  };
  const projectId = data?._id;

  // ========================================================
  const {
    isLoading: userLoading,
    error: userError,
    data: userData,
  } = useQuery({
    queryKey: ["userProfile"],
    queryFn: async () =>
      await newRequest.get(`/users/${data?.userId}`).then((res) => {
        return res.data;
      }),
  });

  // ========================================================
  const {
    isLoading: commentLoading,
    error: commentError,
    data: comments,
  } = useQuery({
    queryKey: ["comments"],
    queryFn: async () =>
      await newRequest.get(`/comments/${projectId}`).then((res) => {
        return res.data;
      }),
  });

  // ========================================================
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (comment) => {
      return newRequest.post(`/comments`, comment);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["comments"]);
    },
  });

  const handleSubmit = (e) => {
    const userId = currentUser._id;
    e.preventDefault();
    mutation.mutateAsync({ projectId, userId, desc });
  };

  // ========================================================
  const FollowMutation = useMutation({
    mutationFn: (profileId) => {
      return newRequest.put(`/users/${data?.userId}/follow`, { profileId });
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["userProfile"]);
    },
  });

  const handleFollow = async () => {
    try {
      await FollowMutation.mutateAsync(currentUser?._id);
    } catch (error) {
      console.log(error);
    }
  };
  // ========================================================
  const likeMutation = useMutation({
    mutationFn: (profileId) => {
      return newRequest.put(`/projects/${data?._id}/like`, { profileId });
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["project"]);
    },
  });

  const handleLike = async () => {
    try {
      await likeMutation.mutateAsync(currentUser?._id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <button onClick={closeModal} className="close-btn">
          <MdOutlineClose />
        </button>
        <div className="contents">
          <div className="left">
            <div className="user">
              <Link to={`/profile/${data?.userId}`}>
                <img src={data?.userPic} alt="" />
              </Link>
              <div className="info">
                <h3>{data?.userName}</h3>
                <span>{data?.userTitle}</span>
              </div>
            </div>
            {data?.userId !== currentUser?._id && (
              <div className="connection">
                <button onClick={handleFollow}>
                  {userData?.followers?.includes(currentUser?._id)
                    ? "Following"
                    : "Follow"}
                  <RiUserFollowLine />
                </button>
                <Link to="/messages">
                  <button>
                    Message <FiMail />
                  </button>
                </Link>
              </div>
            )}
            <hr />
            <div className="about-pro">
              <h4>About Project</h4>
              <p>{data?.desc}</p>
            </div>
          </div>
          <div className="right">
            <div className="top">
              <h3>{data?.title}</h3>
              <div className="interaction">
                <span>
                  <MdOutlineRemoveRedEye className="icon" /> {data?.views}
                </span>
                <span>
                  <FiHeart className="icon" /> {data?.likes?.length}
                </span>
              </div>
            </div>
            <div className="project">
              {data?.videoId && (
                <YouTube
                  videoId={data?.videoId}
                  opts={opts}
                  className="project-video"
                />
              )}
              <img src={data?.projectCover} alt="" />
              {data?.uploadImg?.map((img, i) => (
                <img src={img} alt="" key={i} />
              ))}
            </div>
            <div className="bottom">
              {data?.userId !== currentUser?._id && (
                <FiHeart
                  className={
                    data?.likes?.includes(currentUser?._id)
                      ? "icon liked"
                      : "icon"
                  }
                  onClick={handleLike}
                />
              )}

              <h4>Comments</h4>
              {data?.userId !== currentUser?._id && (
                <div className="comment">
                  <img
                    src="https://t4.ftcdn.net/jpg/03/32/59/65/360_F_332596535_lAdLhf6KzbW6PWXBWeIFTovTii1drkbT.jpg"
                    alt=""
                  />
                  <form onSubmit={handleSubmit}>
                    <textarea
                      name="desc"
                      rows=""
                      cols=""
                      placeholder="Add your comment"
                      onChange={(e) => setDesc(e.target.value)}
                    ></textarea>
                    <button type="submit">Post a comment</button>
                  </form>
                </div>
              )}
              {commentLoading
                ? "loading"
                : commentError
                ? "Something went wrong!"
                : comments?.map((comment) => (
                    <Comment key={comment?._id} comment={comment} />
                  ))}
              <hr />
              <h4>Project Tags</h4>
              <div className="tags">
                {data?.tags?.map((tag, i, arr) => (
                  <React.Fragment key={i}>
                    <span>{tag}</span>
                    {i < arr.length - 1 && ","}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default WorkModal;
