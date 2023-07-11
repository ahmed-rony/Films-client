import React, { useState } from "react";
import TalentInfoCard from "../../Component/TalentInfoCard/TalentInfoCard";
import "./CompaniesList.scss";
import { useQuery } from "react-query";
import { newRequest } from "../../Utilities/newRequest";

const CompaniesList = () => {
  const [searching, setSearching] = useState({
    searchInp: "",
    // checkedInp: [],
    isTalent: false,
  });

  const handleChange = (e) => {
    setSearching((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const {
    isLoading: compLoading,
    error: listError,
    data: list,
    refetch,
  } = useQuery({
    queryKey: ["userProfile"],
    queryFn: async () =>
      await newRequest
        .get(
          `/users?search=${searching.searchInp}&isTalent=${searching.isTalent}`
        )
        .then((res) => {
          return res.data;
        }),
  });

  const handleSearch = (e) => {
    e.preventDefault();
    refetch();
  };
  return (
    <div className="company_list">
      <div className="company_bg">
        <div className="banner-detail">
          <h1>Creative Services Directory</h1>
          <p>
            Find a company to solve your creative challenges, get a job with or
            be inspired by.
          </p>
          <form onSubmit={handleSearch} className="searching">
            <input
              type="text"
              name="searchInp"
              placeholder="Find a company"
              onChange={handleChange}
            />
            <button className="brand-btn" type="submit">
              SEARCH
            </button>
          </form>
        </div>
      </div>
      <div className="container">
        <div className="content">
          {compLoading
            ? "loading"
            : listError
            ? "Something went wrong!"
            : list?.map((t) => (<TalentInfoCard key={t?._id} data={t} />))}
        </div>
      </div>
    </div>
  );
};

export default CompaniesList;
