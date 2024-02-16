import React from "react";
import "../Assets/Styles/WhoCanDoThisCourse.css";
import {TbArrowBigRight} from "react-icons/tb";

const WhoCanDoThisCourse = () => {
  const course = [
    { course: "Freshers" },
    { course: "BE/ Bsc Candidate" },
    { course: "Any Engineers" },
    { course: "Any Graduate" },
    { course: "Any Post-Graduate" },
    { course: "Working Professionals" },
  ];

  return (
    <>
      <div className="who-can-do-this-course">
        <div className="course-heading">
          <h3>Training Module</h3>
          <h5>Lorem ispum Lorem ispum Lorem ispum Lorem ispum</h5>
        </div>
        <div className="course-section">
          <div className="container">
            <div className="row">
              {course?.map((c, idx) => (
                <div className="col-lg-6" key={idx}>
                  <div className="who-can-do-this-course-list">
                    <TbArrowBigRight size={25} className="course-icon"/>
                    <p>{c.course}</p>
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

export default WhoCanDoThisCourse;
