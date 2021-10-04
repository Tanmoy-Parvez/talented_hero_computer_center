import React from 'react';

const Contact = () => {
    return (
        <div className="container my-5">
            <h1 className="ms-5">Get <span className="text-info">Intouch</span></h1>
            <p className="ms-5">Have a question or just want to say hi? We'd love to hear from you.</p>
            <div className="row gx-5 p-5">
                <div className="col-md-7">
                    <div className="d-flex">
                        <input type="text" className="form-control me-5 bg-light py-3" placeholder="Your Name" />
                        <input type="text" className="form-control bg-light py-3" placeholder="Your Email" />
                    </div>
                    <input type="text" className="form-control my-3 bg-light py-3" placeholder="Your Address" />
                    <input type="text" className="form-control my-3 bg-light py-3" placeholder="Subject" />
                    <textarea className="form-control bg-light py-3 h-50" placeholder="Enter Your Message" ></textarea>
                    <button className="btn btn-info mt-3">Send Message</button>
                </div>

                <div className="col-md-5 ps-5">
                    <div className="row shadow-lg rounded-3 px-5 py-5">
                        <div className="col-md-12">
                            <h4><i className="fas fa-map-marker-alt text-info"></i> Head Office</h4>
                            <h6 className="ps-4">AR Corner 2nd Floor, Pabna, Dhaka, Bangladesh</h6>
                        </div>
                        <div className="col-md-12 my-4">
                            <h4><i className="fas fa-envelope text-info"></i> Email us directly</h4>
                            <h6 className="ps-4">support@gctc.com</h6>
                            <h6 className="ps-4">info@gctc.com</h6>
                        </div>
                        <div className="col-md-12">
                            <h4><i className="fas fa-phone-alt fs-4 text-info"></i> Phone</h4>
                            <h6 className="ps-4">+123 456 789</h6>
                            <h6 className="ps-4">+017 456 321</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;