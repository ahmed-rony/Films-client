import { createContext, useReducer } from "react";

const currentUser = JSON.parse(localStorage.getItem("currentUser"));
const INITIAL_STATE = {
  userId: currentUser?._id,
  userPic: currentUser?.profilePic,
  userName: currentUser?.fullName,
  userTitle: currentUser?.talentTitle,
  title: "",
  category: "",
  projectCover: null,
  uploadImg: [],
  tags: [],
  videoId: "",
  desc: "",
};

const ProjectContext = createContext(INITIAL_STATE);

const ProjectReducer = (state, action) =>{
    switch (action.type) {
        case "CHANGE_INPUT":
            return {
                ...state,
                [action.payload.name]: action.payload.value,
            }
        case "ADD_IMAGES":
            return {
                ...state,
                projectCover: action.payload.projectCover,
                uploadImg: action.payload.uploadImg,
            }
        case "ADD_TAGS":
            return {
                ...state,
                tags: [...state.tags, action.payload]
            }
        case "REMOVE_TAGS":
            return {
                ...state,
                tags: state.tags.filter(tag=> tag !== action.payload)
            }
    
        default:
            return state;
    }
}

export const ProjectProvider = (props) => {
    const [state, dispatch] = useReducer(ProjectReducer, INITIAL_STATE);

    return (
        <ProjectContext.Provider value={
            { state, dispatch }
        }>
            {props.children}
        </ProjectContext.Provider>
    );
};

export default ProjectContext;