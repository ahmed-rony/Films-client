import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "../Component/Outlet/Outlet";
import CompaniesList from "./CompaniesList/CompaniesList";
import Home from "./Home/Home";
import JobList from "./JobList/JobList";
import JobPage from "./JobPage/JobPage";
import Login from "./Login/Login";
import MagazineList from "./MagazineList/MagazineList";
import Message from "./Message/Message";
import Messages from "./Messages/Messages";
import NewProject from "./NewProject/NewProject";
import Page404 from "./Page404/Page404";
import ProfilePage from "./ProfilePage/ProfilePage";
import Register from "./Register/Register";
import TalentList from "./TalentList/TalentList";
import Settings from "./Settings/Settings";
import NewJob from "./NewJob/NewJob";
import {
  PrivateRouteIsTalent,
  PrivateRouteIsUser,
} from "../Utilities/PrivateRoute";
import NewMagazine from "./NewMagazine/NewMagazine";
import MagazinePage from "./MagazinePage/MagazinePage";

const MainPage = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/talents" element={<TalentList />}></Route>
            <Route path="/jobs" element={<JobList />}></Route>
            <Route path="/jobs/:id" element={<JobPage />}></Route>
            <Route path="/companies" element={<CompaniesList />}></Route>
            <Route path="/magazines" element={<MagazineList />}></Route>
            <Route path="/magazines/:id" element={<MagazinePage />}></Route>
            <Route path="/messages" element={<Messages />}></Route>
            <Route path="*" element={<Page404 />}></Route>

            {/* ===================  Private Routes  ================ */}

            <Route element={<PrivateRouteIsTalent />}></Route>

            <Route element={<PrivateRouteIsUser />}>
              <Route path="/addProject" element={<NewProject />}></Route>
              <Route path="/addJob" element={<NewJob />}></Route>
              <Route path="/addMagazine" element={<NewMagazine />}></Route>
              <Route path="/profile-setting/:id" element={<Settings />}></Route>
            </Route>

            {/* ===================  Private Routes  ================ */}
          </Route>

          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/profile/:id" element={<ProfilePage />}></Route>
          <Route path="/message/:id" element={<Message />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default MainPage;
