import React from 'react';
import "./Courses.css"

const Courses = () => {
    return (
        <div className="course-container p-5 my-5">
            <div className="container text-center text-light">
                <h5>Browse Categories</h5>
                <h1>Popular topics to learn</h1>
                <div className="row my-5">
                    <div className="col-md-3">
                        <div className="card bg-dark">
                            <img src="" alt="" />
                            <h3>Computer Science</h3>
                            <h5>Price: $100</h5>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card bg-dark">
                            <img src="" alt="" />
                            <h3>Computer Science</h3>
                            <h5>Price: $100</h5>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card bg-dark">
                            <img src="" alt="" />
                            <h3>Computer Science</h3>
                            <h5>Price: $100</h5>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card bg-dark">
                            <img src="" alt="" />
                            <h3>Computer Science</h3>
                            <h5>Price: $100</h5>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Courses;