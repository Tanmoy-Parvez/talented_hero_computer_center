import React from 'react';
import banner from '../../images/banner.png'
import "./Banner.css"

const Banner = () => {
    return (
        <div>
            <div className="row px-5">
                <div className="col-md-6 p-5">
                    <h1 className="title fw-normal">Creating a better</h1>
                    <h1 className="title text-primary fw-bold">IT solutions</h1>
                    <p className="description my-3">Computer training professionals instruct and help users acquire proficiency in a wide array of areas</p>
                    <div className="info">
                        <button className="btn btn-primary px-5 py-2 fs-5 my-4 text-light fw-bold">About Us</button>
                        <div className="ms-5 d-flex align-items-center text-primary">
                            <i class="fas fa-phone-alt mx-2"></i>
                            <h3>+0123 456 76</h3>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <img src={banner} alt="" className="ms-5 w-75" />
                </div>
            </div>
        </div>
    );
};

export default Banner;