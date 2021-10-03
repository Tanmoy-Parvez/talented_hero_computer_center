import React from 'react';
import Banner from '../Banner/Banner';
import Courses from '../Courses/Courses';

const Home = () => {
    return (
        <div className="overflow-hidden">
            <Banner></Banner>
            <Courses></Courses>
        </div>
    );
};

export default Home;