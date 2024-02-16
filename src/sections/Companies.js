import React from "react";
import "../Assets/Styles/Companies.css";
import { IMAGES } from "../utils";

const Companies = () => {
  const partner = [
    { img: IMAGES.AbhitaLand },
    { img: IMAGES.Legavac },
    { img: IMAGES.DreamEstate },
    { img: IMAGES.AbhitaLand },
    { img: IMAGES.Legavac },
    { img: IMAGES.DreamEstate },
    { img: IMAGES.AbhitaLand },
    { img: IMAGES.Legavac },
    { img: IMAGES.DreamEstate },
    { img: IMAGES.AbhitaLand },
    { img: IMAGES.Legavac },
    { img: IMAGES.DreamEstate },
  ];

  return (
    <>
      <div className="companies">
        <div className="container">
          <div className="companies-heading">
            <h3>Companies</h3>
            <h5>Lorem ispum Lorem ispum Lorem ispum Lorem ispum</h5>
          </div>

          <div className="companies-section">
            <div className="row">
              {partner?.map((c, idx) => (
                <div className="col-lg-2 col-md-6 col-sm-12" key={idx}>
                  <div className="companies-wrapper">
                    <img src={c.img} alt="" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Companies;
