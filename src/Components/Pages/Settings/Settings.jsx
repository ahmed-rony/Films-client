import React, { useContext, useState } from "react";
import "./Settings.scss";
import upload from "../../Utilities/upload";
import { newRequest } from "../../Utilities/newRequest";
import { useMutation, useQueryClient } from "react-query";
import { useLocation, useNavigate } from "react-router-dom";
import ProfileContext from "../../Utilities/Reducers/ProfileReducer";
import AuthContext from "../../Utilities/Reducers/AuthReducer";

const Settings = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [profileCover, setProfileCover] = useState(null);
  const [uploading, setUploading] = useState(false);

  const { currentUser } = useContext(AuthContext);
  const { state, dispatch } = useContext(ProfileContext);
  console.log({state});

  const userId = useLocation().pathname.split('/')[2];
  const navigate = useNavigate();
  

  const handleChange = (e) => {
    dispatch({
      type: "CHANGE_INPUT",
      payload: { name: e.target.name, value: e.target.value },
    });
  };
  const handleLanguage = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_LANGUAGE",
      payload: e.target[0].value,
    });
    e.target[0].value = "";
  };
  const handleSkills = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_SKILLS",
      payload: e.target[0].value,
    });
    e.target[0].value = "";
  };
  const handleSkillLevel = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_SKILL_LEVEL",
      payload: e.target[0].value,
    });
    e.target[0].value = "";
  };
  
  const handleUpload = async () => {
    setUploading(true);
    try {
      const profile_Pic = await upload(profilePic);
      const profile_Cover = await upload(profileCover);
      await dispatch({
        type: "ADD_IMAGE",
        payload: { profilePic: profile_Pic, profileCover: profile_Cover },
      });
      setUploading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (userSettings) => {
      return newRequest.put(`http://localhost:30000/api/users/${userId}`, userSettings)
    },
    onSuccess:()=>{
      queryClient.invalidateQueries(["userProfile"])
    }
  });

  const handleSubmit = async () => {
    try {
        const {_id, ...data} = state;
        mutation.mutate(data);
        console.log({data});
        navigate(`/profile/${currentUser._id}`)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="settings">
      <div className="container">
        <h1>Profile Settings</h1>
        <div className="profile">
          <div className="left">
            <div className="item">
              <label htmlFor="">Full Name</label>
              <input
                type="text"
                name="fullName"
                placeholder={currentUser?.fullName}
                onChange={handleChange}
              />
            </div>
            <div className="item">
              <label htmlFor="">Talent Title</label>
              <input
                type="text"
                name="talentTitle"
                placeholder={currentUser?.talentTitle || "e.g. Graphic Designer"}
                onChange={handleChange}
              />
            </div>
            <div className="item">
              <label htmlFor="">Profile Picture</label>
              <input
                type="file"
                onChange={(e) => setProfilePic(e.target.files[0])}
              />
              {profilePic && (
                <img src={URL.createObjectURL(profilePic)} alt="" />
              )}
            </div>
            <div className="item">
              <label htmlFor="">Cover Picture</label>
              <input
                type="file"
                onChange={(e) => setProfileCover(e.target.files[0])}
              />
              {profileCover && (
                <img src={URL.createObjectURL(profileCover)} alt="" />
              )}
              <button onClick={handleUpload}>{uploading ? "Uploading" : "Upload"}</button>
            </div>
            <div className="item">
              <label htmlFor="">Availability</label>
              <select name="availability" onChange={handleChange}>
                <option disabled>Select</option>
                <option value="looking for work">Looking for work</option>
                <option value="on a project">On a project</option>
                <option value="on vacation">On vacation</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="">Location</label>
              <select name="location" onChange={handleChange}>
              <option disabled>Select</option>
                <option value="england">England</option>
                <option value="france">France</option>
                <option value="usa">USA</option>
                <option value="italy">Italy</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="">Language</label>
              <form onSubmit={handleLanguage}>
                <input
                  name="language"
                  className="adding-inp"
                  type="text"
                  placeholder="e.g. English"
                />
                <button type="submit" className="brand-btn adding-btn">
                  Add
                </button>
              </form>
              <div className="added_item">
                <div className="addings">
                  {state?.language?.map((l, index) => (
                    <button
                      key={index}
                      onClick={() =>
                        dispatch({ type: "REMOVE_LANGUAGE", payload: l })
                      }
                    >
                      {l} <span>X</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="item">
              <label htmlFor="">Upload CV/Resume</label>
              <input type="file" />
            </div>
            <div className="item">
              <label htmlFor="">Skills</label>
              <form onSubmit={handleSkills}>
                <input
                  name="skills"
                  type="text"
                  className="adding-inp"
                  placeholder="e.g. Illustration"
                />
                <button type="submit" className="brand-btn adding-btn">
                  Add
                </button>
              </form>
              <div className="added_item">
                <div className="addings">
                  {state?.skills?.map((s, index) => (
                    <button
                      key={index}
                      onClick={() =>
                        dispatch({ type: "REMOVE_SKILLS", payload: s })
                      }
                    >
                      {s} <span>X</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="item">
              <label htmlFor="">Skill Level</label>
              <form onSubmit={handleSkillLevel}>
                <input
                  name="skillLevel"
                  type="text"
                  className="adding-inp"
                  placeholder="e.g. Expert"
                />
                <button type="submit" className="brand-btn adding-btn">
                  Add
                </button>
              </form>
              <div className="added_item">
                <div className="addings">
                  {state?.skillLevel?.map((sl, index) => (
                    <button
                      key={index}
                      onClick={() =>
                        dispatch({ type: "REMOVE_SKILL_LEVEL", payload: sl })
                      }
                    >
                      {sl} <span>X</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="item">
              <label htmlFor="">Contract</label>
              <select name="contract" onChange={handleChange}>
                <option disabled>Select</option>
                <option value="remote">Remote</option>
                <option value="on site">On site</option>
                <option value="freelance">Freelance</option>
                <option value="hybrid">Hybrid</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="">About {currentUser?.isTalent ? "Me" : "Us"}</label>
              <textarea
                name="about"
                id=""
                cols="30"
                rows="8"
                placeholder="About you or company"
                onChange={handleChange}
              ></textarea>
            </div>
            <button onClick={handleSubmit} className="brand-btn">
              Update Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
