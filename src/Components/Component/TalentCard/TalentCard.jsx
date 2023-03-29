import React, { useState } from "react";
import { RiChat3Line } from "react-icons/ri";
import { FiHeart } from "react-icons/fi";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Link } from "react-router-dom";
import "./TalentCard.scss";
import WorkModal from "../WorkModal/WorkModal";

const TalentCard = ({ data }) => {
  const [owner, setOwner] = useState(true);
  const [modalIsOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  return (
    <div>
      {data.map((f) => (
        <Link to={`/profile/${f.id}`} key={f.id}>
          <div className="feature_item"  onClick={openModal}>
            <img src={f.imgUrl} alt="" />
            <div className="info">
              {!owner && (
                <div>
                  <img src={f.imgUser} alt="" />
                </div>
              )}
              <div>
                <div className="user-span">
                  {!owner && <span>{f.username}</span>}
                  {owner && (
                    <>
                      <span className="interact">
                        <MdOutlineRemoveRedEye className="icon" /> 7
                      </span>
                      <span className="interact">
                        <FiHeart className="icon" /> 0
                      </span>
                    </>
                  )}
                </div>
                <h4>{f.title.substring(0, 35)}..</h4>
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
        </Link>
      ))}

      <WorkModal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen}/>
    </div>
  );
};

export default TalentCard;
