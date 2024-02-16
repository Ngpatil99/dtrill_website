import React from "react";
import "../Assets/Styles/Blogs.css";
import { IMAGES } from "../utils";
import { MdOutlineCalendarMonth } from "react-icons/md";

const Blogs = () => {
  return (
    <>
      <div className="blogs">
        <div className="container">
          <div className="blogs-heading">
            <h3>Blogs</h3>
            <h5>Lorem ispum Lorem ispum Lorem ispum Lorem ispum</h5>
          </div>
          <div className="blogs-section">
            <div className="row">
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="blogs-outer-wrapper">
                  <div className="blogs-inner-wrapper">
                    <div className="blogs-img-date-wrapper">
                    <div className="blogs-img">
                      <img src={IMAGES.bgRequestcallBack} alt="" />
                      
                    </div>
                    <div className="blog-date-wrapper">
                        <MdOutlineCalendarMonth size={30} />
                        <p>May 12, 2023</p>
                      </div></div>
                    <div className="blogs-para">
                      <h4> Human Resource The Main Backbone</h4>
                      <p>
                        Rorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis ipsum suspendisse ultrices gravida ut
                        labore et dolore magna aliqua. Quis ipsum suspendisse
                        ultrices gravida....
                      </p>

                      <button>READ MORE</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="blogs-outer-wrapper">
                  <div className="blogs-inner-wrapper">
                    <div className="blogs-img-date-wrapper">
                    <div className="blogs-img">
                      <img src={IMAGES.bgRequestcallBack} alt="" />
                      
                    </div>
                    <div className="blog-date-wrapper">
                        <MdOutlineCalendarMonth size={30} />
                        <p>May 12, 2023</p>
                      </div></div>
                    <div className="blogs-para">
                      <h4> Human Resource The Main Backbone</h4>
                      <p>
                        Rorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis ipsum suspendisse ultrices gravida ut
                        labore et dolore magna aliqua. Quis ipsum suspendisse
                        ultrices gravida....
                      </p>

                      <button>READ MORE</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="blogs-outer-wrapper">
                  <div className="blogs-inner-wrapper">
                    <div className="blogs-img-date-wrapper">
                    <div className="blogs-img">
                      <img src={IMAGES.bgRequestcallBack} alt="" />
                      
                    </div>
                    <div className="blog-date-wrapper">
                        <MdOutlineCalendarMonth size={30} />
                        <p>May 12, 2023</p>
                      </div></div>
                    <div className="blogs-para">
                      <h4> Human Resource The Main Backbone</h4>
                      <p>
                        Rorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis ipsum suspendisse ultrices gravida ut
                        labore et dolore magna aliqua. Quis ipsum suspendisse
                        ultrices gravida....
                      </p>

                      <button>READ MORE</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="blogs-outer-wrapper">
                  <div className="blogs-inner-wrapper">
                    <div className="blogs-img-date-wrapper">
                    <div className="blogs-img">
                      <img src={IMAGES.bgRequestcallBack} alt="" />
                      
                    </div>
                    <div className="blog-date-wrapper">
                        <MdOutlineCalendarMonth size={30} />
                        <p>May 12, 2023</p>
                      </div></div>
                    <div className="blogs-para">
                      <h4> Human Resource The Main Backbone</h4>
                      <p>
                        Rorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis ipsum suspendisse ultrices gravida ut
                        labore et dolore magna aliqua. Quis ipsum suspendisse
                        ultrices gravida....
                      </p>

                      <button>READ MORE</button>
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

export default Blogs;
