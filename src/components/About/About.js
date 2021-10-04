import React from 'react';
import img from '../../images/class.png'
import owner from '../../images/owner.png'
import "./About.css"

const About = () => {
    // about us section
    return (
        <div className="container py-5">
            <div className="row gx-5">
                <div className="col-md-6 px-5">
                    <h2 className="text-center bg-info text-light p-4 shadow-sm rounded-3">20+ Years Of Experience</h2>
                    <img src={img} className="img-fluid" alt="" />

                    <div className="row bg-dark text-light p-4 rounded-3 mt-5 d-flex align-items-center justify-content-center">

                        <div className="col-md-4 ps-3">
                            <div className="user-img d-flex align-items-center justify-content-center">
                                <img src={owner} alt="" />
                            </div>
                        </div>

                        <div className="col-md-8 pe-3">
                            <h3>Mr. Tanmoy Parvez</h3>
                            <p>CEO & Founder of THCTC</p>
                        </div>
                    </div>
                </div>

                {/* details */}
                <div className="col-md-6">
                    <h5 className="text-uppercase">Institute Overview</h5>
                    <h2>MODERN & LUXURY INTERIOR <span className="text-info">TUTORS</span> IN BANGLADESH</h2>
                    <p className="text-dark fs-5 my-4">We try our best to provide our students best.All of our tutors have 5years+ of experience about technology and much more.</p>

                    <h3 className="mt-5 text-uppercase">Our Characteristics:</h3>

                    <div className="row my-4">
                        <div className="col-md-12 shadow-sm border border-info rounded-3 p-3">
                            <h6><i className="fas fa-check-circle text-info"></i> Conducts round-the-clock training activities by experienced faculty</h6>
                        </div>

                        <div className="col-md-12 shadow-sm p-3 border border-info rounded-3 my-2">
                            <h6><i className="fas fa-check-circle text-info"></i> Separate computer system for each student</h6>
                        </div>

                        <div className="col-md-12 shadow-sm p-3 border-info rounded-3 border">
                            <h6><i className="fas fa-check-circle text-info"></i> Arrangement of class test examination every month</h6>
                        </div>

                        <div className="col-md-12 shadow-sm border border-info rounded-3 p-3 my-2">
                            <h6><i className="fas fa-check-circle text-info"></i> Provide free hand notes in each class</h6>
                        </div>

                        <div className="col-md-12 shadow-sm border border-info rounded-3 p-3">
                            <h6><i className="fas fa-check-circle text-info"></i> Issuance of certificate approved by the govt at the end of the course</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;