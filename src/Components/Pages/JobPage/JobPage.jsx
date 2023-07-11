import React from "react";
import "./JobPage.scss";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { useLocation } from "react-router-dom";
import { newRequest } from "../../Utilities/newRequest";
import { useQuery } from "react-query";

const JobPage = () => {
  const jobId = useLocation().pathname.split("/")[2];

  const { isLoading, error, data } = useQuery({
    queryKey: ["job"],
    queryFn: async () =>
      await newRequest.get(`/jobs/${jobId}`).then((res) => {
        return res.data;
      }),
  });
  
  return (
    <div className="job-page">
      <div className="container">
        {isLoading ? (
          "loading"
        ) : error ? (
          "Something went wrong!"
        ) : (
          <div className="job-content">
            <div className="top">
              <img
                src={data?.userPic}
                alt=""
              />
              <div className="title">
                <span className="post-type">Featured</span>
                <h1>{data?.title}</h1>
              </div>
            </div>
            <div className="job-detail">
              <div className="left">
                <ul>
                  <li>
                    <FaMapMarkerAlt className="icon" />
                  </li>
                  <li>
                    <MdWork className="icon" />
                  </li>
                  <RiMoneyDollarCircleFill className="icon" />
                </ul>
                <ul>
                  <li>{data?.location}</li>
                  <li>{data?.contract}</li>
                  <li>${data?.minimum} {data?.minimum && "-"} ${data?.maximum  || "N/A"} /day</li>
                </ul>
              </div>
              <div className="middle">
                <ul>
                  <li>Company</li>
                  <li>starting Date</li>
                  <li>Closing Date</li>
                </ul>
                <ul>
                  <li>{data?.userName}</li>
                  <li>{data?.startingDate}</li>
                  <li>{data?.closingDate  || "N/A"}</li>
                </ul>
              </div>
              <div className="right">
                <ul>
                  <li>Category</li>
                  <li>Age</li>
                  <li>Skill Level</li>
                </ul>
                <ul>
                  <li>{data?.category}</li>
                  <li>{data?.age || "N/A"}yr</li>
                  <li>{data?.skillLevel}</li>
                </ul>
              </div>
            </div>
            <div className="desc">
              <p>
              {data?.desc}
              </p>
            </div>
            <div className="bottom">
              <button className="brand-btn">Apply for this job</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobPage;
