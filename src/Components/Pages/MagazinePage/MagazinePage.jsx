import React from "react";
import { useQuery } from "react-query";
import { newRequest } from "../../Utilities/newRequest";
import { useLocation } from "react-router-dom";
import { Parser } from "html-to-react";
import "./MagazinePage.scss";

const MagazinePage = () => {
  const postId = useLocation().pathname.split("/")[2];

  const { isLoading, error, data } = useQuery({
    queryKey: ["magazine"],
    queryFn: async () =>
      await newRequest.get(`/magazines/${postId}`).then((res) => {
        return res.data;
      }),
  });
  const htmlParser = new Parser();
  const reactElement = htmlParser.parse(data?.desc);

  const dateStr = data?.createdAt;
  const date = new Date(dateStr);
  const options = { month: "long", day: "numeric", year: "numeric" };
  const formattedDate = date.toLocaleDateString(undefined, options);
  return (
    <div className="magazine_page">
      <div className="container">
        {isLoading ? (
          "loading"
        ) : error ? (
          "Something went wrong!"
        ) : (
          <div className="mag-content">
            <span className="cats">{data?.category}</span>
            <div className="title">
              <img src={data?.magazineCover} alt="" />
              <h2>{data?.title}</h2>
              <small>Published {formattedDate} by {data?.userName}</small>
            </div>
            <hr />
            <div className="blog">{reactElement}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MagazinePage;
