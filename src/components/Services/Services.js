import React from 'react';
import { Link } from 'react-router-dom';
import useServices from '../../hooks/useServices';

const Services = () => {
    const [services, setServices] = useServices([])
    return (
        <div className="p-5 my-1">
            <div className="container text-center">
                <h1 className="text-uppercase">Explore Our Popular <span className="text-info">Services</span> </h1>
                <h4>Popular Services We Provide</h4>
                <div className="row my-5">
                    {
                        services.map(course => <div className="col-md-4 gy-5">
                            <div className="card d-flex align-items-center text-light">
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
                    <button className="btn btn-info py-2 px-4 fw-bold fs-5">Back to Home</button>
                </Link>
            </div>
        </div>
    );
};

export default Services;