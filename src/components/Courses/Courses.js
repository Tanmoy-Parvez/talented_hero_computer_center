import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import "./Courses.css"

const Courses = () => {
    const [courses, setCourse] = useState([]);
    useEffect(() => {
        fetch('/fakeData.json')
            .then(res => res.json())
            .then(data => setCourse(data))
    }, [])
    return (
        <div className="course-container p-5 my-5">
            <div className="container text-center text-light">
                <h5>Browse Categories {courses.length}</h5>
                <h1>Popular topics to learn</h1>
                <div className="row my-5">
                    {
                        courses.slice(0, courses.length - 5).map(course => <div className="col-md-3">
                            <div className="card bg-dark">
                                <div className="bg-light card-logo">
                                    <img src={course.img} alt="" />
                                </div>
                                {/* <div>
                                    <h3>{course.title}</h3>
                                    <h5>{course.subTitle}</h5>
                                    <h5>Price: ${course.price}</h5>
                                </div> */}
                            </div>
                        </div>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Courses;