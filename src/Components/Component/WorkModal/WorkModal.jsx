import React from "react";
import Modal from "react-modal/lib/components/Modal";
import "./WorkModal.scss";
import { Link } from "react-router-dom";
import { RiUserFollowLine } from "react-icons/ri";
import { FiMail, FiHeart } from "react-icons/fi";
import { MdOutlineRemoveRedEye, MdOutlineClose } from "react-icons/md";
import YouTube from "react-youtube";

const WorkModal = ({ data, modalIsOpen, setIsOpen }) => {
  const closeModal = () => {
    setIsOpen(false);
  };
  const opts = {
    height: '390',
    width: '690',
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
              <img
                src="https://i.pinimg.com/236x/6b/2f/32/6b2f323d39f013faa9bf8ce141e9fba7.jpg"
                alt=""
              />
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
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae,
                repudiandae voluptas distinctio aperiam quas dolores aut dolor
                illo unde fuga! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. In ratione quidem dolor magni dignissimos a
                modi quaerat fugit nemo voluptatibus incidunt voluptates, vitae
                laborum beatae corporis. Quas blanditiis, laudantium cum quos
                incidunt sed fugiat tempore alias dolorem totam ratione iure.
              </p>
            </div>
          </div>
          <div className="right">
            <div className="top">
              <h3>Delivering retail skills through a learning platform</h3>
              <div className="interaction">
                <span>
                  <MdOutlineRemoveRedEye className="icon" /> 7
                </span>
                <span>
                  <FiHeart className="icon" /> 0
                </span>
              </div>
            </div>
            <div className="project">
            <YouTube videoId="HPOcLm0fMws" opts={opts} className="project-video"/>
              <img
                src="https://i.pinimg.com/564x/0c/18/5a/0c185a1efbc9e7f82cb30bb9049adc43.jpg"
                alt=""
              />
              <img
                src="https://i.pinimg.com/564x/df/7e/f2/df7ef2db9eda93912fde81da33830099.jpg"
                alt=""
              />
              <img
                src="https://i.pinimg.com/236x/53/c5/59/53c55919bb6e6761efc0ed7d2c5f7112.jpg"
                alt=""
              />
              <img
                src="https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <img
                src="https://images.pexels.com/photos/15780900/pexels-photo-15780900.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""
              />
              <img
                src="https://i.pinimg.com/236x/e6/c1/74/e6c1744dbaa90f26ef0e215e621aee30.jpg"
                alt=""
              />
              <img
                src="https://i.pinimg.com/564x/ad/fa/ed/adfaedecd09d2f47227902f51a057929.jpg"
                alt=""
              />
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
                <span>design</span>
                <span>illustration</span>
                <span>packaging design</span>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default WorkModal;
