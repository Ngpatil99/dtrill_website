import React from "react";
import { IMAGES } from "../utils";
import "../Assets/Styles/Header.css";
import { MdOutlineWatchLater } from "react-icons/md";
import { GrFacebookOption } from "react-icons/gr";
import { TbBrandPinterest, TbBrandLinkedin } from "react-icons/tb";
import { RiInstagramLine, RiTwitterLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header-height">
        <div className="header">
          <div className="header-wrapper">
            <div className="top-header">
              <div className="top-header-wrapper">
                <div className="top-header-left-wrapper">
                  <span></span>
                  <marquee direction="left">
                    <h4 className="addmission-text">Addmission Open</h4>
                  </marquee>
                </div>
                <div className="top-header-right-wrapper">
                  <div className="d-flex header-time">
                    <MdOutlineWatchLater size={20} className="header-watch" />
                    <p>Working: 10.00am - 07.00pm</p>
                  </div>
                  <div className="d-flex">
                    <GrFacebookOption size={25} className="header-icon" />
                    <RiInstagramLine size={25} className="header-icon" />
                    <RiTwitterLine size={25} className="header-icon" />
                    <TbBrandLinkedin size={25} className="header-icon" />
                    <TbBrandPinterest size={25} className="header-icon" />
                  </div>
                </div>
              </div>
            </div>
            <div className="main-header">
              <div className="header-logo-wrapper">
                <img src={IMAGES.Logo} alt="" className="logo" />
              </div>
              <div className="header-menu">
                <ul>
                  <li>
                    <Link to="/">
                      <p>Header</p>
                    </Link>
                  </li>
                  <li>
                    <Link to="/about-us">
                      <p>About Us</p>
                    </Link>
                  </li>
                  <li>
                    <Link to="/courses">
                      <p>Courses</p>
                    </Link>
                  </li>
                  <li>
                    <Link to="/placements">
                      <p>Placements</p>
                    </Link>
                  </li>
                  <li>
                    <Link to="/services">
                      <p>Services</p>
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact-us">
                      <p>Contact Us</p>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="header-right-wrapper">
              
                <div className="header-btn-wrapper">
                  <button>Get in Touch</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
