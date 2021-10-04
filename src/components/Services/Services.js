import React from 'react';
import { Link } from 'react-router-dom';
import useServices from '../../hooks/useServices';

const Services = () => {
    const [services, setServices] = useServices([])
    return (
        <div className="course-container p-5 my-1">
            <div className="container text-center text-light">
                <h1>Explore Our Popular Services</h1>
                <h5 className="text-primary">Popular Services We Provide</h5>
                <div className="row my-5">
                    {
                        services.map(course => <div className="col-md-4 gy-5">
                            <div className="card d-flex align-items-center">
                                <div className="bg-light my-4 card-logo">
                                    <img src={course.img} alt="" />
                                </div>
                                <div>
                                    <h3>{course.title}</h3>
                                    <h6>{course.subTitle}</h6>
                                    <h4>Price: ${course.price}</h4>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
                <Link to="/home">
                    <button className="btn btn-primary py-2 px-4 fw-bold fs-5">Back to Home</button>
                </Link>
            </div>
        </div>
    );
};

export default Services;