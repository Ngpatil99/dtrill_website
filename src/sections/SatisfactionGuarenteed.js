import React from "react";
import "../Assets/Styles/SatisfactionGuarenteed.css";
import { IMAGES } from "../utils";
import { Tb24Hours,TbMoneybag } from "react-icons/tb";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { BiBuildingHouse } from "react-icons/bi";

const SatisfactionGuarenteed = () => {
  return (
    <>
      <div className="satisfaction-guarantee">
        <div className="container">
          <div className="guarantee-heading">
            <h3>Satisfaction Guaranteed</h3>
            <h5>Lorem ispum Lorem ispum Lorem ispum Lorem ispum</h5>
          </div>
          <div className="guarantee-section">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="gurantee-outer-wrapper">
                  <div className="guarantee-inner-wrapper-tr">
                    <div className="guarantee-image-box-br">
                      <Tb24Hours className="gurantee-icon-br" />
                      <div className="guarantee-img-br">
                        <img src={IMAGES.Img2} alt="" />
                      </div>
                    </div>
                    <div className="guarantee-content-br">
                      <h4>24/7 help Desk</h4>
                      <p>
                        For any inquiry related to course, we have opened our
                        portal, accept the requests, We assure to help within
                        time.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="gurantee-outer-wrapper">
                  <div className="guarantee-inner-wrapper-bl">
                    <div className="guarantee-content-bl">
                      <h4>Money for a quality and Value</h4>
                      <p>
                        we have a policy under which we care for 100% job
                        Assistance for each course until you got your dream job,
                        Hence anyone can apply for learning with Quality
                      </p>
                    </div>
                    <div className="guarantee-image-box-bl">
                      <TbMoneybag className="gurantee-icon-bl" />
                      <div className="guarantee-img-bl">
                        <img src={IMAGES.Img2} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="gurantee-outer-wrapper">
                  <div className="guarantee-inner-wrapper-tr">
                    <div className="guarantee-image-box-tr">
                      <HiOutlineBuildingOffice2  className="gurantee-icon-tr" />
                      <div className="guarantee-img-tr">
                        <img src={IMAGES.Img2} alt="" />
                      </div>
                    </div>
                    <div className="guarantee-content-tr">
                      <h4> Placement Department</h4>
                      <p>
                        we have Separate placement department Who are
                        Continuously work on Company tie-ups and Campus
                        requritment process
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="gurantee-outer-wrapper">
                  <div className="guarantee-inner-wrapper-tl">
                    <div className="guarantee-content-tl">
                      <h4>In-House Company Benefit</h4>
                      <p>
                        We have US Based In-house Company under IT Education
                        Centre Roof, thus candidate will get Live project
                        working Environment.
                      </p>
                    </div>
                    <div className="guarantee-image-box-tl">
                      <BiBuildingHouse className="gurantee-icon-tl" />
                      <div className="guarantee-img-tl">
                        <img src={IMAGES.Img2} alt="" />
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

export default SatisfactionGuarenteed;
