import React, { useState } from "react";
import "./NewProject.scss";

const NewProject = () => {
    const [file, setFile] = useState(null);
    const [uploads, setUploads] = useState(null);
  return (
    <div className="new_project">
      <div className="container">
        <h1>Add New Project</h1>
        <div className="project">
          <div className="left">
            <div className="item">
              <label htmlFor="">Title</label>
              <input type="text" placeholder="Name of title" />
            </div>
            <div className="item">
              <label htmlFor="">Category</label>
              <select name="cats" id="cats">
                <option value="design">Design</option>
                <option value="choreography">Choreographer</option>
                <option value="editor">Editor</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="">Cover</label>
              <input type="file" onChange={(e)=> setFile(e.target.files[0])} />
              {file && <img src={URL.createObjectURL(file)} alt="" />}
            </div>
            <div className="item">
              <label htmlFor="">Upload Images</label>
              <input type="file" multiple onChange={(e)=> setUploads(e.target.files)} />
            </div>
          </div>
          <div className="right">
            <div className="item">
              <label htmlFor="">Youtube Video ID</label>
              <input type="text" placeholder="Video Id" />
            </div>
            <div className="item">
              <label htmlFor="">Project Description</label>
              <textarea name="" id="" cols="30" rows="8" placeholder="Description"></textarea>
            </div>
            <button className="brand-btn">Add Project</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProject;
