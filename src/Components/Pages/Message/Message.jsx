import React, { useContext, useEffect, useRef, useState } from "react";
import "./Message.scss";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../../Component/Navbar/Navbar";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { newRequest } from "../../Utilities/newRequest";
import AuthContext from "../../Utilities/Reducers/AuthReducer";
import { format } from "timeago.js";

const Message = () => {
  const [newMessage, setNewMessage] = useState("");

  const { currentUser } = useContext(AuthContext);
  const conversationId = useLocation().pathname.split("/")[2];
  const scrollRef = useRef(null);

  // ===================================================

  const {
    isLoading: messageLoading,
    error: messageError,
    data: message,
  } = useQuery({
    queryKey: ["message"],
    queryFn: async () =>
      await newRequest.get(`/messages/${conversationId}`).then((res) => {
        return res.data;
      }),
  });
  // ===================================================
  const {
    isLoading: coversationLoading,
    error: conversationError,
    data: conversation,
  } = useQuery({
    queryKey: ["coversations"],
    queryFn: async () =>
      await newRequest.get(`/conversations/${currentUser?._id}`).then((res) => {
        return res.data;
      }),
  });

  const friendId = conversation?.map((conv) =>
    conv?.members?.find((m) => m !== currentUser._id)
  )[0];
  
  const { isLoading: userLoading, error: userError, data: user } = useQuery({
    queryKey: ["userProfile"],
    queryFn: async () =>
      await newRequest.get(`/users/${friendId}`).then((res) => {
        return res.data;
      }),
  });
  // ===================================================

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (message) => {
      return newRequest.post(`/messages`, message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["message"]);
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const message = {
      conversationId: conversationId,
      userId: currentUser?._id,
      text: newMessage,
    };

    if (newMessage !== "") {
      await mutation.mutateAsync(message);
    }

    scrollRef.current.scrollIntoView({ behavior: "smooth" });
    setNewMessage("");
  };

  return (
    <>
      <Navbar />
      <div className="message">
        <div className="container">
          <div className="top">
            <Link to="/messages">
              <MdOutlineArrowBackIosNew className="icon" />
            </Link>
            <div className="user">
              <img
                src={user?.profilePic ||  "/Img/avater.jpg"}
                alt=""
              />
              <span>{user?.fullName}</span>
            </div>
          </div>
          <div className="chat-box" ref={scrollRef}>
            {message?.map((m, i) => (
              <div
                key={i}
                className={
                  m?.userId !== currentUser?._id ? "item" : "item owner"
                }
              >
                <div>
                  <img
                    src={(m?.userId === currentUser?._id ? currentUser?.profilePic : user?.profilePic) ||  "/Img/avater.jpg"}
                    alt=""
                  />
                </div>
                <p>
                  {m?.text}
                  <small>{format(m?.createdAt)}</small>
                </p>
              </div>
            ))}
            <div ref={scrollRef}></div>
          </div>
          <form className="write" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Write a message"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <button type="submit" className="brand-btn">
              SEND
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Message;
