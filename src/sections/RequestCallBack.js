import React from "react";
import "../Assets/Styles/RequestCallBack.css";
const RequestCallBack = () => {
  return (
    <>
      <div className="requestCallBack-section">
        <div className="container">
          <div>
            <div className="row">
              <div className="col-lg-6">
                <div className="requestCallBack"><h3>Request Call Back</h3></div>
                <div className="requestCallBackLeft">
                  {" "}
                  <div className="inputWrapper">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Full Name"
                      aria-label="Full Name"
                    />
                  </div>{" "}
                  <div className="inputWrapper">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Your Email"
                      aria-label="email"
                    />
                  </div>
                  <div className="inputWrapper">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Enter Mobile Number"
                      aria-label="mobile number"
                    />
                  </div>
                  <div className="inputWrapper">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Write Your Desire Course"
                      aria-label="Full Name"
                    />
                  </div>
                  <div className="inputWrapper">
                    <select name="type" className="form-select">
                      <option>Select Course Type</option>
                      <option value=" Online Training">Online Training</option>
                      <option value="Classroom Training">
                        Classroom Training
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="requestCallBackRight">
                  <div className="courseDescription-top">
                    <h3>
                      Yes!! You are Eligible For This 100% Job Oriented Course
                    </h3>
                    <p>
                      We invite you to attend the best training classes in Pune.
                      We are happy to guide you step by step regarding this
                      job-oriented course and the job placement benefits after
                      completing the course. Note: Ask for the Special Offer
                      with this Course.
                    </p>
                  </div>
                  <div className="courseDescription-bottom">
                    <div className="lowFees">
                      <div>Icon</div>
                      <div>
                        <p>Lowest Course Fees</p>
                      </div>
                    </div>
                    <div className="studyMaterial">
                      <div>Icon</div>
                      <div>
                        <p>Free Study Material</p>
                      </div>
                    </div>
                    <div className="placement">
                      <div>Icon</div>
                      <div>
                        <p>100% Placement Assistance</p>
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

export default RequestCallBack;
