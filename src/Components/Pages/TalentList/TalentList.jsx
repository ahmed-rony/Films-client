import React, { useState } from "react";
import TalentCard from "../../Component/TalentCard/TalentCard";
import TalentInfoCard from "../../Component/TalentInfoCard/TalentInfoCard";
import { talentWork } from "../../Utilities/Data";
import "./TalentList.scss";
import { useQuery } from "react-query";
import { newRequest } from "../../Utilities/newRequest";
import { useLocation } from "react-router-dom";

const TalentList = () => {
  const [tabs, setTabs] = useState(false);
  const [filterTab, setFilterTab] = useState(false);
  const [searching, setSearching] = useState({
    searchInp: "",
    checkedInp: [],
  });

  const { search } = useLocation();

  const handleChange = (e) => {
    setSearching((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleChecked = (e) => {
    const { name, checked } = e.target;
    setSearching((prev) => ({
      ...prev,
      checkedInp: checked
        ? [...prev.checkedInp, name]
        : prev.checkedInp.filter((item) => item !== name),
    }));
  };
  const {
    isLoading: talentWorkLoading,
    error: talentWorkError,
    data: talentWorks,
    refetch: talentRefetch,
  } = useQuery({
    queryKey: ["talentWorks"],
    queryFn: async () =>
      await newRequest
        .get(
          `/projects?search=${searching.searchInp}&cat=${searching.checkedInp}`
        )
        .then((res) => {
          return res.data;
        }),
  });
  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () =>
      await newRequest.get(`/users?search=${searching.searchInp}&cat=${searching.checkedInp}`).then((res) => {
        return res.data;
      }),
  });
  const handleSearch = () => {
    if(tabs){
      refetch();
    }else{
      talentRefetch();
    }
    setFilterTab(false);
  };
  console.log({data},{talentWorks});
  return (
    <div className="talent_list">
      <div className="talent_bg">
        <div className="banner-detail">
          <h1>Industry Leading Talent</h1>
          <p>Connect, collaborate and hire our community.</p>
          <div className="searching">
            <input
              type="text"
              name="searchInp"
              placeholder="Find a talent"
              onChange={handleChange}
            />
            <button className="brand-btn" onClick={handleSearch}>
              SEARCH
            </button>
          </div>
          <div className="filter">
            <span onClick={() => setFilterTab(!filterTab)}>Filter</span>
            <div className={filterTab ? "ch-box visible" : "ch-box"}>
              <div className="box-content">
                <div className="left">
                  <div className="item">
                    <input
                      type="checkbox"
                      name="design"
                      onChange={handleChecked}
                    />
                    <label htmlFor="">Design</label>
                  </div>
                  <div className="item">
                    <input
                      type="checkbox"
                      name="choreography"
                      onChange={handleChecked}
                    />
                    <label htmlFor="">Choreography</label>
                  </div>
                  <div className="item">
                    <input
                      type="checkbox"
                      name="editor"
                      onChange={handleChecked}
                    />
                    <label htmlFor="">Editor</label>
                  </div>
                  <div className="item">
                    <input type="checkbox" />
                    <label htmlFor="">Director</label>
                  </div>
                  <div className="item">
                    <input type="checkbox" />
                    <label htmlFor="">Project Manager</label>
                  </div>
                </div>
                <div className="right">
                  <div className="item">
                    <input type="checkbox" />
                    <label htmlFor="">Animator</label>
                  </div>
                  <div className="item">
                    <input type="checkbox" />
                    <label htmlFor="">Producer</label>
                  </div>
                  <div className="item">
                    <input type="checkbox" />
                    <label htmlFor="">Illustrator</label>
                  </div>
                  <div className="item">
                    <input type="checkbox" />
                    <label htmlFor="">Script Writer</label>
                  </div>
                </div>
              </div>
              <button className="brand-btn" onClick={handleSearch}>
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div
          className="content"
          style={tabs ? null : { columns: "4", columnGap: "20px" }}
        >
          <div className="tabs">
            <button className="brand-btn" onClick={() => setTabs(false)}>
              Works
            </button>
            <button className="brand-btn" onClick={() => setTabs(true)}>
              Profiles
            </button>
          </div>
          <h3>
            Searched: <span>editor</span>
          </h3>
          {tabs ? (
            isLoading ? (
              "loading"
            ) : error ? (
              "Something went wrong!"
            ) : (
              <TalentInfoCard data={data} />
            )
          ) : talentWorkLoading ? (
            "loading"
          ) : talentWorkError ? (
            "Something went wrong!"
          ) : (
            <TalentCard data={talentWorks} />
          )}
        </div>
      </div>
    </div>
  );
  333;
};

export default TalentList;
