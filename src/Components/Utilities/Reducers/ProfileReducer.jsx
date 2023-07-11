import { createContext, useEffect, useReducer } from "react";

const currentUser = JSON.parse(localStorage.getItem("currentUser"));
const INITIAL_STATE = {
  _id: currentUser?._id,
  fullName: "",
  talentTitle: "",
  profilePic: null,
  profileCover: null,
//   pdfCV: null,
  about: "",
  availability: "",
  location: "",
  contract: "",
  language: [],
  skills: [],
  skillLevel: [],
};


const ProfileContext = createContext(INITIAL_STATE);

const ProfileReducer = (state, action) =>{
    switch (action.type) {
        case "CHANGE_INPUT":
            return {
                ...state,
                [action.payload.name]: action.payload.value,
            }
        case "ADD_IMAGE":
            return {
                ...state,
                profilePic: action.payload.profilePic,
                profileCover: action.payload.profileCover,
            }
        // case "ADD_PDF":
        //     return {
        //         ...state,
        //         pdfCV: action.payload.pdfCV,
        //     }
        case "ADD_LANGUAGE":
            return {
                ...state,
                language: [...state.language, action.payload]
            }
        case "REMOVE_LANGUAGE":
            return {
                ...state,
                language: state.language.filter(lang=> lang !== action.payload)
            }
        case "ADD_SKILLS":
            return {
                ...state,
                skills: [...state.skills, action.payload]
            }
        case "REMOVE_SKILLS":
            return {
                ...state,
                skills: state.skills.filter(s=> s !== action.payload)
            }
        case "ADD_SKILL_LEVEL":
            return {
                ...state,
                skillLevel: [...state.skillLevel, action.payload]
            }
        case "REMOVE_SKILL_LEVEL":
            return {
                ...state,
                skillLevel: state.skillLevel.filter(sl=> sl !== action.payload)
            }
    
        default:
            return state;
    }
}

export const ProfileProvider = (props) => {
    const [state, dispatch] = useReducer(ProfileReducer, INITIAL_STATE);

    useEffect(()=>{
        localStorage.setItem("currentUser", JSON.stringify({ ...currentUser, profilePic: state.profilePic }))
    }, [state])

    return (
        <ProfileContext.Provider value={
            { state, dispatch }
        }>
            {props.children}
        </ProfileContext.Provider>
    );
};

export default ProfileContext;