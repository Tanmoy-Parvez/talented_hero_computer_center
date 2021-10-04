import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer-container bg-dark text-light p-4">
            <div className="row">
                <div className="col-md-5">
                    <h4>
                        <span className="text-info">Talented Hero</span> Computer Training Center
                    </h4>
                    <h6 className="fw-normal">AR Corner 2nd Floor, Pabna, Dhaka, Bangladesh.</h6>
                    <h6 className="fw-normal">Official: thctc@gmail.com</h6>
                    <h6 className="fw-normal">Helpline : +01700112233 (Available : 09:00am to 8:00pm)</h6>
                </div>
                <div className="col-md-2">
                    <h4>Social Links</h4>
                </div>
                <div className="col-md-5">
                    <img src="" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Footer;