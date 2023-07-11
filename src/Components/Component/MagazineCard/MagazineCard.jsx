import React from "react";
import "./MagazineCard.scss";
import { Link } from "react-router-dom";

const MagazineCard = ({ data }) => {
  return (
    <Link to={`/magazines/${data?._id}`}>
      <div className="magazine-item" key={data?.id}>
        <img src={data?.magazineCover} alt="" />
        <div className="info">
          <span>{data?.userName}</span>
          <h4>
            {data?.title?.length > 70
              ? `${data?.title?.substring(0, 35)}..`
              : data?.title}
          </h4>
        </div>
      </div>
    </Link>
  );
};

export default MagazineCard;
