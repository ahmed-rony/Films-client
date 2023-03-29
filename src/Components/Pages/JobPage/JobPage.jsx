import React from "react";
import "./JobPage.scss";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { RiMoneyDollarCircleFill } from "react-icons/ri";

const JobPage = () => {
  return (
    <div className="job-page">
      <div className="container">
        <div className="job-content">
          <div className="top">
            <img
              src="https://i.pinimg.com/236x/96/5b/36/965b362e46c829a0c3c18f9f9910abff.jpg"
              alt=""
            />
            <div className="title">
              <span className="post-type">Featured</span>
              <h1>Senior Designer - Paul Smith Dressing (Maternity Cover)</h1>
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
                <li>London</li>
                <li>remote</li>
                <li>$300 - $600 /day</li>
              </ul>
            </div>
            <div className="middle">
              <ul>
                <li>Company</li>
                <li>starting Date</li>
                <li>Closing Date</li>
              </ul>
              <ul>
                <li>WHYTE</li>
                <li>ASAP</li>
                <li>23 April 2023</li>
              </ul>
            </div>
            <div className="right">
              <ul>
                <li>Company</li>
                <li>Wage</li>
                <li>Closing Date</li>
              </ul>
              <ul>
                <li>WHYTE</li>
                <li>$300 - $600 /day</li>
                <li>23 April 2023</li>
              </ul>
            </div>
          </div>
          <div className="desc">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
              earum modi tempora eum facilis in odio corrupti molestiae est,
              aliquid sed perspiciatis atque dolore? Ad similique esse adipisci
              ipsum doloremque sequi? Adipisci possimus dolorum dicta suscipit
              minima aliquid necessitatibus architecto, vitae aperiam obcaecati
              doloremque, dolor excepturi amet, numquam facilis laborum soluta.
              Cumque quas architecto corrupti nam aspernatur beatae ex
              cupiditate?
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
              earum modi tempora eum facilis in odio corrupti molestiae est,
              aliquid sed perspiciatis atque dolore? Ad similique esse adipisci
              ipsum doloremque sequi? Adipisci possimus dolorum dicta suscipit
              minima aliquid necessitatibus architecto, vitae aperiam obcaecati
              doloremque, dolor excepturi aonsectetur adipisicing elit. Repellat
              earum modi tempora eum facilis in odio corrupti molestiae est,
              aliquid sed perspiciatis atque dolore? Ad similique esse adipisci
              ipsum doloremque sequi? Adipisci possimus dolorum dicta suscipit
              minima aliquid necessitatibus architecto, vitae aperiam obcaecati
              doloremque, dolor excepturi amet, numquam facilis laborum soluta.
              Cumque quas architecto corrupti nam aspernatur beatae ex
              cupiditate?
            </p>
          </div>
          <div className="bottom">
            <button className="brand-btn">Apply for this job</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobPage;
