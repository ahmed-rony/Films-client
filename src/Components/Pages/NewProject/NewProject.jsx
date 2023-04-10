import React, { useContext, useState } from "react";
import "./NewProject.scss";
import { useMutation, useQueryClient } from "react-query";
import { newRequest } from "../../Utilities/newRequest";
import ProjectContext from "../../Utilities/Reducers/ProjectReducer";
import upload from "../../Utilities/upload";
import { useNavigate } from "react-router-dom";

const NewProject = () => {
  const [projectCover, setProjectCover] = useState(null);
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);

  const { state, dispatch } = useContext(ProjectContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    dispatch({
      type: "CHANGE_INPUT",
      payload: { name: e.target.name, value: e.target.value },
    });
  };
  const handleTags = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_TAGS",
      payload: e.target[0].value,
    });
    e.target[0].value = "";
  };

  const handleUpload = async () => {
    setUploading(true);
    try {
      const cover = await upload(projectCover);
      const upload_Img = await Promise.all(
        [...files].map(async (file) => {
          const url = await upload(file);
          return url;
        })
      );
      await dispatch({
        type: "ADD_IMAGES",
        payload: { projectCover: cover, uploadImg: upload_Img },
      });
      setUploading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (project) => {
      return newRequest.post(`/projects/${state.userId}`, project);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["project"]);
    },
  });

  const handleSubmit = async () => {
    try {
      mutation.mutate(state);
      navigate(`/profile/${state.userId}`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="new_project">
      <div className="container">
        <h1>Add New Project</h1>
        <div className="project">
          <div className="left">
            <div className="item">
              <label htmlFor="">Title</label>
              <input
              name="title"
                type="text"
                placeholder="Name of title"
                onChange={handleChange}
              />
            </div>
            <div className="item">
              <label htmlFor="">Category</label>
              <select name="category" id="category" onChange={handleChange}>
                <option value="design">Design</option>
                <option value="choreography">Choreography</option>
                <option value="editor">Editor</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="">Cover</label>
              <input
                type="file"
                onChange={(e) => setProjectCover(e.target.files[0])}
              />
              {projectCover && (
                <img src={URL.createObjectURL(projectCover)} alt="" />
              )}
            </div>
            <div className="item">
              <label htmlFor="">Upload Images</label>
              <input
                type="file"
                multiple
                onChange={(e) => setFiles(e.target.files)}
              />
              <button onClick={handleUpload}>
                {uploading ? "Uploading" : "Upload"}
              </button>
            </div>
          </div>
          <div className="right">
            <div className="item">
              <label htmlFor="">Youtube Video ID</label>
              <input
                type="text"
                name="videoId"
                placeholder="Video Id"
                onChange={handleChange}
              />
            </div>
            <div className="item">
              <label htmlFor="">Tags</label>
              <form onSubmit={handleTags}>
                <input
                  name="tags"
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
                  {state?.tags?.map((t, index) => (
                    <button
                      key={index}
                      onClick={() =>
                        dispatch({ type: "REMOVE_TAGS", payload: t })
                      }
                    >
                      {t} <span>X</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="item">
              <label htmlFor="">Project Description</label>
              <textarea
                name="desc"
                id=""
                cols="30"
                rows="8"
                placeholder="Description"
                onChange={handleChange}
              ></textarea>
            </div>
            <button className="brand-btn" onClick={handleSubmit}>
              Add Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProject;
