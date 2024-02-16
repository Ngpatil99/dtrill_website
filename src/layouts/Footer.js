import React from "react";
import "../Assets/Styles/Footer.css";
import { Foot, IMAGES } from "../utils";
import { GrFacebookOption } from "react-icons/gr";
import { TbBrandPinterest, TbBrandLinkedin } from "react-icons/tb";
import { RiInstagramLine, RiTwitterLine } from "react-icons/ri";
const Footer = () => {
  return (
    <>
      <div className="container-fluid text-light main-footer">
        <div className="row p-5">
          <div className="col-lg-8">
            <img src={IMAGES.Foot} alt="" className="foot-logo" />
          </div>
          <div className="col-lg-4"> 
            <div className="d-flex">
                    <GrFacebookOption size={30} className="footer-icon" />
                    <RiInstagramLine size={30} className="footer-icon" />
                    <RiTwitterLine size={30} className="footer-icon" />
                    <TbBrandLinkedin size={30} className="footer-icon" />
                    <TbBrandPinterest size={30} className="footer-icon" />
                  </div>
          </div>
         
        </div>
        <hr className="mx-5"></hr>
        <div className="row px-5">
          <div className="col-lg-3 col-md-3 col-sm-12">
            <ul>
              <li>
                <p>Quick Links</p>
              </li>
              <li>
                {" "}
                <a href="#">home</a>
              </li>
              <li>
                {" "}
                <a href="#">home</a>
              </li>{" "}
              <li>
                {" "}
                <a href="#">home</a>
              </li>{" "}
              <li>
                {" "}
                <a href="#">home</a>
              </li>{" "}
              <li>
                {" "}
                <a href="#">home</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12">
            <ul>
              <li>
                <p>Services</p>
              </li>
              <li>
                {" "}
                <a href="#">home</a>
              </li>
              <li>
                {" "}
                <a href="#">home</a>
              </li>{" "}
              <li>
                {" "}
                <a href="#">home</a>
              </li>{" "}
              <li>
                {" "}
                <a href="#">home</a>
              </li>{" "}
              <li>
                {" "}
                <a href="#">home</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12">
            <ul>
              <li>
                {" "}
                <p>Courses</p>
              </li>
              <li>
                {" "}
                <a href="#">home</a>
              </li>
              <li>
                {" "}
                <a href="#">home</a>
              </li>{" "}
              <li>
                {" "}
                <a href="#">home</a>
              </li>{" "}
              <li>
                {" "}
                <a href="#">home</a>
              </li>{" "}
              <li>
                {" "}
                <a href="#">home</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12">
            <ul>
              <li>
                <p>Head Office</p>
              </li>
              <li>
                {" "}
                <a href="#">home</a>
              </li>
              <li>
                {" "}
                <a href="#">home</a>
              </li>{" "}
              <li>
                {" "}
                <a href="#">home</a>
              </li>{" "}
              <li>
                {" "}
                <a href="#">home</a>
              </li>{" "}
              <li>
                {" "}
                <a href="#">home</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
