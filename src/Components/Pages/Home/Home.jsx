import React from 'react';
import Banner from '../../Component/Banner/Banner';
import HomeContents from '../../Component/HomeContents/HomeContents';
import './Home.scss';

const Home = () => {
    return (
        <div className='home'>
            <Banner/>
            <HomeContents/>
        </div>
    );
};

export default Home;