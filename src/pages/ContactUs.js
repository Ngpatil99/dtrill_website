import React from "react";
import "../Assets/Styles/ContactUs.css";
import {FiPhoneCall} from "react-icons/fi";
import{SlLocationPin} from "react-icons/sl";
import{BsClockHistory} from "react-icons/bs";
const ContactUs = () => {
    return (
        <>
            <div className="main-contactus-page">
                <div className="main-contactus-inner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="main-contact-detail">
                                    <ul>
                                        <li>
                                            <div className="contact-call-us">
                                            <span><FiPhoneCall className="contact-form-icon"/></span>
                                            <h5>CALL US</h5>
                                            </div>
                                            <p>1 (234) 567-891, 1 (234) 987-654</p>
                                        </li>
                                        <li>
                                            <div className="contact-call-us">
                                            <span><SlLocationPin className="contact-form-icon"/></span>
                                            <h5>LOCATION</h5>
                                            </div>
                                            <p>121 Rock Sreet, 21 Avenue, New York, NY 92103-9000</p>
                                        </li><li>
                                            <div className="contact-call-us">
                                            <span><BsClockHistory className="contact-form-icon"/></span>
                                            <h5>BUSINESS HOURS</h5>
                                            </div>
                                            <p>Mon – Fri …… 10 am – 8 pm, Sat, Sun ....… Closed</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <form className="p-5 bg-white main-contactform">
                                    <div class="row form-group">
                                        <div className="col-md-12 mb-3 mb-md-0 form-content">
                                            <label className="" for="fullname">Full Name</label>
                                            <input type="text" id="fullname" className="form-control" placeholder="Full Name" />
                                        </div>
                                    </div>
                                    <div className="row form-group">
                                        <div className="col-md-12 form-content">
                                            <label className="" for="email">Email</label>
                                            <input type="email" id="email" className="form-control" placeholder="Email Address" />
                                        </div>
                                    </div>
                                    <div class="row form-group">
                                        <div className="col-md-12 form-content">
                                            <label className="" for="message">Message</label>
                                            <textarea name="message" id="message" cols="30" rows="5" className="form-control" placeholder="Say hello to us"></textarea>
                                        </div>
                                    </div>

                                    <div className="row form-group">
                                        <div className="col-md-12 form-content">
                                            {/* <input type="submit" value="Send" class="btn btn-primary" /> */}
                                            <a href="#" class="animated-button1">
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                                Send
                                            </a>
                                        </div>
                                    </div>


                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default ContactUs;
