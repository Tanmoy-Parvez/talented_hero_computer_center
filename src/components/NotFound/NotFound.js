import React from 'react';
import { Link } from 'react-router-dom';
import errorImg from '../../images/404-png.png'


const NotFound = () => {
    // 404 error message page
    return (
        <div className="text-center my-5">
            <div className="my-5">
                <img src={errorImg} alt="" />
            </div>
            {/* home button */}
            <Link to="/home">
                <button className="btn btn-dark">Home</button>
            </Link>
        </div>
    );
};

export default NotFound;