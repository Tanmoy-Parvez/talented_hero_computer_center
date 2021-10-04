import React from 'react';
import Banner from '../Banner/Banner';
import Courses from '../Courses/Courses';

const Home = () => {
    // main or home section
    return (
        <div className="overflow-hidden">
            <Banner></Banner>
            {/* few services section (4) */}
            <Courses></Courses>
        </div>
    );
};

export default Home;