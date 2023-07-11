import React, { useState } from "react";
import MagazineCard from "../../Component/MagazineCard/MagazineCard";
import { gridMag } from "../../Utilities/Data";
import "./MagazineList.scss";
import { useQuery } from "react-query";
import { newRequest } from "../../Utilities/newRequest";

const MagazineList = () => {
  const [searching, setSearching] = useState({
    searchInp: "",
    // checkedInp: [],
  });

  const handleChange = (e) => {
    setSearching((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["magazine"],
    queryFn: async () =>
      await newRequest
        .get(
          `/magazines?search=${searching.searchInp}`
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
    <div className="magazine_list">
      <div className="magazine_bg">
        <div className="banner-detail">
          <h1>For Leaders and Learners</h1>
          <p>
            The creative industry's connection to inspirational, educational and
            thought-provoking content.
          </p>
          <form onSubmit={handleSearch} className="searching">
            <input
              type="text"
              name="searchInp"
              placeholder="Find an article"
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
          {isLoading
            ? "loading"
            : error
            ? "Something went wrong!"
            : data?.map((m) => <MagazineCard key={m?._id} data={m} />)}
        </div>
      </div>
    </div>
  );
};

export default MagazineList;
