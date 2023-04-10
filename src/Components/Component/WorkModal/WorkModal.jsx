import React from "react";
import Modal from "react-modal/lib/components/Modal";
import "./WorkModal.scss";
import { Link } from "react-router-dom";
import { RiUserFollowLine } from "react-icons/ri";
import { FiMail, FiHeart } from "react-icons/fi";
import { MdOutlineRemoveRedEye, MdOutlineClose } from "react-icons/md";
import YouTube from "react-youtube";

const WorkModal = ({ data, modalIsOpen, setModalIsOpen }) => {
  const closeModal = () => {
    setModalIsOpen(false);
  };
  const opts = {
    height: "390",
    width: "690",
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
                <img
                  src="https://i.pinimg.com/236x/6b/2f/32/6b2f323d39f013faa9bf8ce141e9fba7.jpg"
                  alt=""
                />
              </Link>
              <div className="info">
                <h3>Emile Joe</h3>
                <span>Design Director</span>
              </div>
            </div>
            <div className="connection">
              <button>
                Follow
                <RiUserFollowLine />
              </button>
              <Link to="/messages">
                <button>
                  Message <FiMail />
                </button>
              </Link>
            </div>
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
                  <FiHeart className="icon" /> {data?.likes}
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
              <FiHeart className="icon" />

              <h4>Comments</h4>
              <div className="comment">
                <img
                  src="https://t4.ftcdn.net/jpg/03/32/59/65/360_F_332596535_lAdLhf6KzbW6PWXBWeIFTovTii1drkbT.jpg"
                  alt=""
                />
                <form>
                  <textarea
                    rows=""
                    cols=""
                    placeholder="Add your comment"
                  ></textarea>
                  <button>Post a comment</button>
                </form>
              </div>
              <hr />
              <div className="comments">
                <img
                  src="https://t4.ftcdn.net/jpg/03/32/59/65/360_F_332596535_lAdLhf6KzbW6PWXBWeIFTovTii1drkbT.jpg"
                  alt=""
                />
                <div className="detail">
                  <div className="user">
                    <span>Samantha Moon</span>
                    <small>21 Jan 2023</small>
                  </div>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Mollitia possimus amet odio accusamus. Molestias
                    consectetur, omnis perspiciatis corrupti vero modi?
                  </p>
                </div>
              </div>
              <hr />
              <h4>Project Tags</h4>
              <div className="tags">
                {data?.tags?.map((tag, i) => (
                  <React.Fragment key={i}>
                    <span>{tag}</span>{i < data?.tags?.length - 1 && ","}
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
