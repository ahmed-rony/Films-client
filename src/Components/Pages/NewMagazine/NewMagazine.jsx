import React, { useContext, useState } from "react";
import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "./EditorToolbar";
import "react-quill/dist/quill.snow.css";
import "./NewMagazine.scss";
import { newRequest } from "../../Utilities/newRequest";
import { useNavigate } from "react-router-dom";
import MagazineContext from "../../Utilities/Reducers/MagazineReducer";
import { useMutation, useQueryClient } from "react-query";
import upload from "../../Utilities/upload";

const NewMagazine = () => {
  const [magazineCover, setMagazineCover] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [desc, setDesc] = useState("");
  const [editor, setEditor] = useState({
    description: "",
  });

  const { state, dispatch } = useContext(MagazineContext);

  const navigate = useNavigate();

  const [isError, setError] = useState(null);

  const handleChange = (e) => {
    dispatch({
      type: "CHANGE_INPUT",
      payload: { name: e.target.name, value: e.target.value },
    });
  };
  const ondescription = (value) => {
    dispatch({
      type: "CHANGE_DESC",
      payload: { desc: value },
    });
  };
  const handleUpload = async () => {
    setUploading(true);
    try {
      const cover = await upload(magazineCover);
      dispatch({
        type: "ADD_IMAGES",
        payload: { magazineCover: cover },
      });
      setUploading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (magazine) => {
      return newRequest.post(`/magazines`, magazine);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["magazine"]);
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await mutation.mutateAsync(state);
      navigate(`/profile/${state.userId}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="magazine">
      <div className="container">
            <h1> Add New Post </h1>
            <div className="magazine_content">
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
                  <label htmlFor="">Cover</label>
                  <div className="cover">
                    <input
                      type="file"
                      onChange={(e) => setMagazineCover(e.target.files[0])}
                    />
                    <button onClick={handleUpload}>
                      {uploading ? "Uploading" : "Upload"}
                    </button>
                  </div>
                  {magazineCover && (
                    <img src={URL.createObjectURL(magazineCover)} alt="" />
                  )}
                </div>
              </div>
              <div className="right">
                <div className="item">
                  <label htmlFor="">Category</label>
                  <select name="category" id="category" onChange={handleChange}>
                    <option value="design">Design</option>
                    <option value="choreography">Choreography</option>
                    <option value="editor">Editor</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="description">
              <label>Description</label>
              <EditorToolbar toolbarId={"t1"} />
              <ReactQuill
                theme="snow"
                value={state?.desc}
                name="desc"
                onChange={ondescription}
                placeholder={"Write something awesome..."}
                modules={modules("t1")}
                formats={formats}
                className="desc"
              />
              {isError !== null && <div className="errors"> {isError} </div>}
              <button onClick={handleSubmit} className="brand-btn post-btn">
                Submit
              </button>
            </div>
      </div>
    </div>
  );
};

export default NewMagazine;
