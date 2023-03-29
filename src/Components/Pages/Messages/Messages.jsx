import React from "react";
import { Link } from "react-router-dom";
import "./Messages.scss";

const Messages = () => {
  return (
    <div className="messages">
      <div className="container">
        <div className="content">
          <div className="message">
            <h2>Messages</h2>
          </div>
          <Link to="/message/123" className="message unreaded">
            <div className="left">
              <img
                src="https://i.pinimg.com/236x/88/b6/19/88b619ca9d3dcf531f7b3788b42b58bf.jpg"
                alt=""
              />
              <span>Moon Joe</span>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit..</p>
            <small>2 min ago</small>
          </Link>
          
          <Link to="/message/123" className="message">
            <div className="left">
              <img
                src="https://i.pinimg.com/236x/88/b6/19/88b619ca9d3dcf531f7b3788b42b58bf.jpg"
                alt=""
              />
              <span>Moon Joe</span>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit..</p>
            <small>2 min ago</small>
          </Link>

          <Link to="/message/123" className="message">
            <div className="left">
              <img
                src="https://i.pinimg.com/236x/88/b6/19/88b619ca9d3dcf531f7b3788b42b58bf.jpg"
                alt=""
              />
              <span>Moon Joe</span>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit..</p>
            <small>2 min ago</small>
          </Link>

          <Link to="/message/123" className="message">
            <div className="left">
              <img
                src="https://i.pinimg.com/236x/88/b6/19/88b619ca9d3dcf531f7b3788b42b58bf.jpg"
                alt=""
              />
              <span>Moon Joe</span>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit..</p>
            <small>2 min ago</small>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Messages;
