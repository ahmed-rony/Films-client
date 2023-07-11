import React, { useState } from "react";
import JobCard from "../../Component/JobCard/JobCard";
import "./JobList.scss";
import { useQuery } from "react-query";
import { newRequest } from "../../Utilities/newRequest";

const JobList = () => {
  const [searching, setSearching] = useState({
    searchInp: "",
    // checkedInp: [],
  });

  const handleChange = (e) => {
    setSearching((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const {
    isLoading: jobsLoading,
    error: jobsError,
    data: jobs,
    refetch,
  } = useQuery({
    queryKey: ["jobs"],
    queryFn: async () =>
      await newRequest
        .get(`/jobs?search=${searching.searchInp}`)
        .then((res) => {
          return res.data;
        }),
  });

  const handleSearch = (e) => {
    e.preventDefault();
    refetch();
  };

  return (
    <div className="job_list">
      <div className="job_bg">
        <div className="banner-detail">
          <h1>Life-changing Jobs and Gigs</h1>
          <p>Find your dream job. Hire your perfect candidate.</p>
          <form onSubmit={handleSearch} className="searching">
            <input
              type="text"
              name="searchInp"
              placeholder="Find a job"
              onChange={handleChange}
            />
            <button type="submit" className="brand-btn">
              SEARCH
            </button>
          </form>
        </div>
      </div>
      <div className="container">
        <div className="content">
          {jobsLoading
            ? "loading"
            : jobsError
            ? "Something went wrong!"
            : jobs?.map((j) => <JobCard key={j?._id} job={j} />)}
        </div>
      </div>
    </div>
  );
};

export default JobList;
