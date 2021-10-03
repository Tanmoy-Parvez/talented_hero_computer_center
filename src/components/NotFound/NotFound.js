import React from 'react';
import { Link } from 'react-router-dom';
import errorImg from '../../images/404-png.png'


const NotFound = () => {
    return (
        <div className="text-center my-5">
            <div className="my-5">
                <img src={errorImg} alt="" />
            </div>
            <Link to="/home">
                <button className="btn btn-primary">Home</button>
            </Link>
        </div>
    );
};

export default NotFound;