import React from "react";
import "./HomeContents.scss";
import TalentCard from "../TalentCard/TalentCard";
import MagazineCard from "../MagazineCard/MagazineCard";
import { useQuery } from "react-query";
import { newRequest } from "../../Utilities/newRequest";

const HomeContents = () => {
  const {
    isLoading: talentWorkLoading,
    error: talentWorkError,
    data: talentWorks,
  } = useQuery({
    queryKey: ["project"],
    queryFn: async () =>
      await newRequest.get(`/projects`).then((res) => {
        return res.data;
      }),
  });
  const {
    isLoading: magLoading,
    error: magError,
    data: mag,
  } = useQuery({
    queryKey: ["magazine"],
    queryFn: async () =>
      await newRequest.get(`/magazines`).then((res) => {
        return res.data;
      }),
  });
  return (
    <div className="home-content">
      <div className="container">
        <div className="row gx-5">
          <div className="col-md-6">
            <h3>
              Featured <span>Work</span>
            </h3>
            <div className="feature">
              {talentWorks?.map((t) => (
                <TalentCard key={t?._id} talent={t} />
              ))}
            </div>
          </div>
          <div className="col-md-6">
            <h3>
              Latest from the <span>Magazines</span>
            </h3>
            <div className="home_magazine">
              {mag?.map((t) => (
                <MagazineCard data={t} key={t?._id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContents;
