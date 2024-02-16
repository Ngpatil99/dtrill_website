import React from "react";
import "../Assets//Styles/Testimonials.css";
import { IMAGES } from "../utils";

const Testimonials = () => {
  return (
    <>
      <div className="testimonials">
        <div className="container">
          <div className="test-heading">
            <h3>Testimonials</h3>
            <h5>Lorem ispum Lorem ispum Lorem ispum Lorem ispum</h5>
          </div>

          <div className="testimonial-section">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="testimonial-outer-wrapper">
                  <div className="testimonial-inner-wrapper">
                    <div className="testimonial-profile">
                        <img src={IMAGES.Profile} alt="" />
                        <div className="testimonial-profile-name">
                        <h4>Lorem Ispum</h4>
                        <p>Developer</p>
                        <span></span>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="testimonial-outer-wrapper">
                  <div className="testimonial-inner-wrapper">
                    <div className="testimonial-profile">
                        <img src={IMAGES.Profile} alt="" />
                        <div className="testimonial-profile-name">
                        <h4>Lorem Ispum</h4>
                        <p>Developer</p>
                        <span></span>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="testimonial-outer-wrapper">
                  <div className="testimonial-inner-wrapper">
                    <div className="testimonial-profile">
                        <img src={IMAGES.Profile} alt="" />
                        <div className="testimonial-profile-name">
                        <h4>Lorem Ispum</h4>
                        <p>Developer</p>
                        <span></span>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="testimonial-outer-wrapper">
                  <div className="testimonial-inner-wrapper">
                    <div className="testimonial-profile">
                        <img src={IMAGES.Profile} alt="" />
                        <div className="testimonial-profile-name">
                        <h4>Lorem Ispum</h4>
                        <p>Developer</p>
                        <span></span>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
