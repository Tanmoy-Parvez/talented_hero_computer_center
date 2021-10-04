import React from 'react';
import { Link } from 'react-router-dom';
import useServices from '../../hooks/useServices';
import "./Courses.css"

const Courses = () => {
    // few services section
    const [services, setServices] = useServices([]) // custom hook
    return (
        <div className="p-5 my-5">
            <div className="container text-center">
                <h5>Browse Categories</h5>
                <h1 className="text-uppercase">Popular Services We Provide</h1>
                {/* few services card */}
                <div className="row my-5">
                    {
                        services.slice(0, 4).map(course =>
                            <div className="col-md-3">
                                <div className="card d-flex align-items-center text-light">
                                    <div className="bg-light my-4 card-logo">
                                        <img src={course.img} alt="" />
                                    </div>
                                    <div>
                                        <h4>{course.title}</h4>
                                        <h6>{course.subTitle}</h6>
                                        <h4>Price: ${course.price}</h4>
                                    </div>
                                </div>
                            </div>
                        )}
                </div>
                <Link to="/services">
                    <button className="btn btn-info text-light py-2 px-4 fw-bold fs-5">Explore More</button>
                </Link>
            </div>
        </div>
    );
};

export default Courses;