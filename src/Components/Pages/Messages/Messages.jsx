import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Messages.scss";
import AuthContext from "../../Utilities/Reducers/AuthReducer";
import { useQuery } from "react-query";
import { newRequest } from "../../Utilities/newRequest";

const Messages = () => {
  const { currentUser } = useContext(AuthContext);

  const { isLoading: coversationLoading, error: conversationError, data: conversation } = useQuery({
    queryKey: ["conversations"],
    queryFn: async () =>
      await newRequest.get(`/conversations/${currentUser?._id}`).then((res) => {
        return res.data;
      }),
  });

  const friendId = conversation?.map((conv)=>conv?.members?.find((m)=> m !== currentUser._id))[0];

  const { isLoading: userLoading, error: userError, data: user } = useQuery({
    queryKey: ["userProfile"],
    queryFn: async () =>
      await newRequest.get(`/users/${friendId}`).then((res) => {
        return res.data;
      }),
  });
  
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

          {coversationLoading
            ? "loading"
            : conversationError
            ? "Something went wrong!"
            : conversation?.map((conv) => (
                <Link key={conv?._id} to={`/message/${conv?._id}`} className="message">
                  <div className="left">
                    <img
                      src={user?.profilePic || "/Img/avater.jpg"}
                      alt=""
                    />
                    <span>{user?.fullName}</span>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit..
                  </p>
                  <small>2 min ago</small>
                </Link>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Messages;
