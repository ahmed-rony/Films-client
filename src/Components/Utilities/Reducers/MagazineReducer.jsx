import { createContext, useReducer } from "react";

const currentUser = JSON.parse(localStorage.getItem("currentUser"));
const INITIAL_STATE = {
  userId: currentUser?._id,
  userPic: currentUser?.profilePic,
  userName: currentUser?.fullName,
  userTitle: currentUser?.talentTitle,
  title: "",
//   category: "",
  magazineCover: null,
  desc: "",
};

const MagazineContext = createContext(INITIAL_STATE);

const MagazineReducer = (state, action) =>{
    switch (action.type) {
        case "CHANGE_INPUT":
            return {
                ...state,
                [action.payload.name]: action.payload.value,
            }
        case "CHANGE_DESC":
            return {
                ...state,
                desc: action.payload.desc,
            }
        case "ADD_IMAGES":
            return {
                ...state,
                magazineCover: action.payload.magazineCover,
            }
        default:
            return state;
    }
}

export const MagazineProvider = (props) => {
    const [state, dispatch] = useReducer(MagazineReducer, INITIAL_STATE);

    return (
        <MagazineContext.Provider value={
            { state, dispatch }
        }>
            {props.children}
        </MagazineContext.Provider>
    );
};

export default MagazineContext;