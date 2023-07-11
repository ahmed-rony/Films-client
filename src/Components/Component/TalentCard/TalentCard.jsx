import React, { useContext, useState } from "react";
import { RiChat3Line } from "react-icons/ri";
import { FiHeart } from "react-icons/fi";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import "./TalentCard.scss";
import WorkModal from "../WorkModal/WorkModal";
import AuthContext from "../../Utilities/Reducers/AuthReducer";

const TalentCard = ({ talent }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const openModal = () => {
    setModalIsOpen(true);
  };

  return (
    <div>
      <div className="feature_item" onClick={openModal}>
        <img src={talent?.projectCover} alt="" />
        <div className="info">
          {currentUser?._id !== talent?.userId && (
            <div>
              <img src={talent?.userPic} alt="" />
            </div>
          )}
          <div>
            <div className="user-span">
              {currentUser?._id !== talent?.userId && (
                <span>{talent?.userName}</span>
              )}
              {currentUser?._id === talent?.userId && (
                <>
                  <span className="interact">
                    <MdOutlineRemoveRedEye className="icon" /> {talent?.views}
                  </span>
                  <span className="interact">
                    <FiHeart className="icon" /> {talent?.likes?.length}
                  </span>
                </>
              )}
            </div>
            <h4>
              {talent?.title?.length > 35
                ? `${talent?.title?.substring(0, 35)}..`
                : talent?.title}
            </h4>
          </div>
        </div>
        <div className="hover-item">
          <span className="follow">Follow</span>
          <div className="icons">
            <FiHeart className="icon" />
            <RiChat3Line className="icon" />
          </div>
        </div>
      </div>
      <WorkModal
        data={talent}
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
      />
    </div>
  );
};

export default TalentCard;
