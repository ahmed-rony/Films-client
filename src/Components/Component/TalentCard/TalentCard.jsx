import React, { useContext, useState } from "react";
import { RiChat3Line } from "react-icons/ri";
import { FiHeart } from "react-icons/fi";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Link } from "react-router-dom";
import "./TalentCard.scss";
import WorkModal from "../WorkModal/WorkModal";
import AuthContext from "../../Utilities/Reducers/AuthReducer";

const TalentCard = ({ data }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const openModal = () => {
    setModalIsOpen(true);
  };

  return (
    <div>
      {data?.map((t) => (
        <React.Fragment key={t?._id}>
          <div className="feature_item" onClick={openModal}>
            <img src={t?.projectCover} alt="" />
            <div className="info">
              {currentUser?._id !== t?.userId && (
                <div>
                  <img src={t?.profilePic} alt="" />
                </div>
              )}
              <div>
                <div className="user-span">
                  {currentUser?._id !== t?.userId && <span>{t?.fullName}</span>}
                  {currentUser?._id === t?.userId && (
                    <>
                      <span className="interact">
                        <MdOutlineRemoveRedEye className="icon" /> {t?.views}
                      </span>
                      <span className="interact">
                        <FiHeart className="icon" /> {t?.likes}
                      </span>
                    </>
                  )}
                </div>
                <h4>{t?.title.substring(0, 35)}..</h4>
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
            data={t}
            modalIsOpen={modalIsOpen}
            setModalIsOpen={setModalIsOpen}
          />
        </React.Fragment>
      ))}
    </div>
  );
};

export default TalentCard;
