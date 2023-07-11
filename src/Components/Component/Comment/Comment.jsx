import React from "react";
import "./Comment.scss";

const Comment = ({ comment }) => {
  const dateStr = comment?.createdAt;
  const date = new Date(dateStr);
  const options = { month: "long", day: "numeric", year: "numeric" };
  const formattedDate = date.toLocaleDateString(undefined, options);
  return (
    <>
      <hr />
      <div className="comments">
        <img
          src={
            comment?.userPic ||
            "https://t4.ftcdn.net/jpg/03/32/59/65/360_F_332596535_lAdLhf6KzbW6PWXBWeIFTovTii1drkbT.jpg"
          }
          alt=""
        />
        <div className="detail">
          <div className="user">
            <span>{comment?.userName || "Well-wisher"}</span>
            <small>{formattedDate}</small>
          </div>
          <p>{comment?.desc}</p>
        </div>
      </div>
    </>
  );
};

export default Comment;
