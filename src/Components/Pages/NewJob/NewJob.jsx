import React, { useContext, useState } from "react";
import "./NewJob.scss";
import { useMutation, useQueryClient } from "react-query";
import { newRequest } from "../../Utilities/newRequest";
import { useNavigate } from "react-router-dom";
import JobContext from "../../Utilities/Reducers/JobReducer";

const NewJob = () => {
  const [error, setError] = useState(null);
  const { state, dispatch } = useContext(JobContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    dispatch({
      type: "CHANGE_INPUT",
      payload: { name: e.target.name, value: e.target.value },
    });
  };

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (job) => {
      return newRequest.post(`/jobs`, job);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["jobs"]);
    },
  });

  const handleSubmit = async () => {
    try {
      await mutation.mutateAsync(state);
      navigate(`/profile/${state.userId}`);
    } catch (err) {
      setError(err.response.data);
    }
  };
  return (
    <div className="new_job">
      <div className="container">
        <h1>Post A New Job</h1>
        <div className="job">
          <div className="left">
            <div className="item">
              <label htmlFor="">Title</label>
              <input
                name="title"
                type="text"
                placeholder="Job title"
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
              <label htmlFor="">Wages</label>
              <div className="wage">
                <input
                  type="number"
                  min={5}
                  name="minimum"
                  placeholder="Minimum"
                  onChange={handleChange}
                />
                -
                <input
                  type="number"
                  min={5}
                  name="maximum"
                  placeholder="Maximum"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="item">
              <label htmlFor="">Starting Date</label>
              <input
                type="text"
                name="startingDate"
                placeholder="e.g. 20 June 2023"
                onChange={handleChange}
              />
            </div>
            <div className="item">
              <label htmlFor="">Closing Date</label>
              <input
                type="text"
                name="closingDate"
                placeholder="e.g. 30 June 2023"
                onChange={handleChange}
              />
            </div>
            <div className="item">
              <label htmlFor="">Location</label>
              <input
                type="text"
                name="location"
                placeholder="e.g. London, England"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="right">
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
              <label htmlFor="">Age Limit</label>
              <select name="age" id="category" onChange={handleChange}>
                <option value="design">N/A</option>
                <option>10 - 20</option>
                <option>20 - 30</option>
                <option>30 - 40</option>
                <option>40 - 50</option>
                <option>50 - 60</option>
                <option>60 - 90</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="">Skill Level</label>
              <select name="skillLevel" id="category" onChange={handleChange}>
                <option value="senior">Senior</option>
                <option value="intermediate">Intermediate</option>
                <option value="junior">Junior</option>
              </select>
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
              Post Job
            </button>
            {error && error}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewJob;
