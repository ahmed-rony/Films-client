import { createContext, useReducer } from "react";

const currentUser = JSON.parse(localStorage.getItem("currentUser"));
const INITIAL_STATE = {
  userId: currentUser?._id,
  userPic: currentUser?.profilePic,
  userName: currentUser?.fullName,
  title: "",
  category: "",
  minimum: "",
  maximum: "",
  startingDate: "",
  closingDate: "",
  location: "",
  contract: "",
  age: "",
  skillLevel: "",
  desc: "",
};

const JobContext = createContext(INITIAL_STATE);

const JobReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_INPUT":
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };

    default:
      return state;
  }
};

export const JobProvider = (props) => {
  const [state, dispatch] = useReducer(JobReducer, INITIAL_STATE);

  return (
    <JobContext.Provider value={{ state, dispatch }}>
      {props.children}
    </JobContext.Provider>
  );
};

export default JobContext;
