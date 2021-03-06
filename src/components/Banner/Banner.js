import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../images/banner.png'
import "./Banner.css"
import "animate.css"

const Banner = () => {
    // site banner section
    return (
        <div>
            <div className="row px-5">
                {/* banner title */}
                <div className="col-md-6 p-5 animate__animated animate__backInLeft">
                    <h1 className="title fw-normal">Creating a better</h1>
                    <h1 className="title text-info fw-bold">IT solutions</h1>
                    <p className="description my-3 ">Computer training professionals instruct and help users acquire proficiency in a wide array of areas</p>

                    <div className="info">
                        <Link to="/about">
                            <button className="btn btn-info px-5 py-2 fs-5 my-4 text-light fw-bold">About Us</button>
                        </Link>

                        <div className="ms-5 d-flex align-items-center text-info">
                            <i className="fas fa-phone-alt mx-2"></i>
                            <h3>+0123 456 768</h3>
                        </div>
                    </div>
                </div>
                {/* banner image */}
                <div className="col-md-6 animate__animated animate__backInRight">
                    <img src={banner} alt="" className="ms-5 w-75" />
                </div>
            </div>
        </div>
    );
};

export default Banner;