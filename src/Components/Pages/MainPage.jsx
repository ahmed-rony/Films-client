import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from '../Component/Outlet/Outlet';
import CompaniesList from './CompaniesList/CompaniesList';
import Home from './Home/Home';
import JobList from './JobList/JobList';
import JobPage from './JobPage/JobPage';
import MagazineList from './MagazineList/MagazineList';
import Message from './Message/Message';
import Messages from './Messages/Messages';
import NewProject from './NewProject/NewProject';
import Page404 from './Page404/Page404';
import ProfilePage from './ProfilePage/ProfilePage';
import Register from './Register/Register';
import TalentList from './TalentList/TalentList';

const MainPage = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route path='/' element={<Home />}></Route>
                        <Route path='/talents' element={<TalentList />}></Route>
                        <Route path='/jobs' element={<JobList />}></Route>
                        <Route path='/jobs/:id' element={<JobPage />}></Route>
                        <Route path='/companies' element={<CompaniesList />}></Route>
                        <Route path='/magazine' element={<MagazineList />}></Route>
                        <Route path='/messages' element={<Messages />}></Route>
                        <Route path='/addProject' element={<NewProject />}></Route>
                        <Route path='/register' element={<Register />}></Route>
                        <Route path='*' element={<Page404 />}></Route>
                    </Route>
                        <Route path='/profile/:id' element={<ProfilePage />}></Route>
                        <Route path='/message/:id' element={<Message />}></Route>
                </Routes>
            </Router>
        </>
    );
};

export default MainPage;