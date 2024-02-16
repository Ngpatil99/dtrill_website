import React, { useState } from "react";
import "../Assets/Styles/FAQs.css";
import { IMAGES } from "../utils";
import { MdRemove, MdAdd } from "react-icons/md";

const FAQs = () => {
  const [subMenuOpen, setSubMenuOpen] = useState(-1);
  const toggleMenu = (x) => setSubMenuOpen(subMenuOpen === x ? -1 : x);

  const faq = [
    {
      id: 1,
      que: "How About the Placement Assistance?",
      ans: "All the Courses Are Merged With Placement Assistance",
    },
    {
      id: 2,
      que: "Is The Course Fees In My Budget?",
      ans: "We Are Committed For Lowest Course Fees in the Market",
    },
    {
      id: 3,
      que: "Do you Provide Institutional Certification After the course?",
      ans: "Yes! We do provide Certification straight after completion of the Course",
    },
    {
      id: 4,
      que: "Do you have any refund policy?",
      ans: "Sorry! We don’t refund fees in any Condition.",
    },
    {
      id: 5,
      que: "How about the Discount offer on this Course?",
      ans: "Yes, this Course has heavy Offer discount in fees if you pay in One Shot/ Group Admission!",
    },
    {
      id: 6,
      que: "I Am Worried About Fees Installment Option If Any?",
      ans: "Don’t Worry! We Do Have Flexible Fees Installment Option",
    },
    {
      id: 7,
      que: "Do We Get Practical Session For This Course?",
      ans: "Yes! This Course Comes With Live Practical Sessions And Labs",
    },
    {
      id: 8,
      que: "Is the Course Comes With Global Certification?",
      ans: "Sure! Most of our Course Comes with Global Certification for which you have to give Exam at the End of the Course",
    },
    {
      id: 9,
      que: "Will your institute conduct the Exam for Global Certification?",
      ans: "Yes we do have different Exam Conducting Department where you can apply for certain course’s Exam",
    },
  ];

  return (
    <>
      <div className="faqs">
        <div className="container">
          <div className="faq-heading">
            <h3>Frequently Ask Questions</h3>
            <h5>Lorem ispum Lorem ispum Lorem ispum Lorem ispum</h5>
          </div>
          <div className="faqs-section">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="faq-outer-wrapper">
                {faq?.map((f, idx) => (
                  <div className="main-que" key={idx}>
                    <div className="que-icon" onClick={() => toggleMenu(f.id)}>
                      <h5>{f.que}</h5>
                      <div>
                        {subMenuOpen === f.id ? (
                          <MdRemove size={30} className="faq-minus-plus-icon" />
                        ) : (
                          <MdAdd size={30} className="faq-minus-plus-icon" />
                        )}
                      </div>
                    </div>

                    <div
                      className={`sub-menu ${
                        subMenuOpen === f.id ? "is-open" : ""
                      }`}
                    >
                      <div>
                        <p className="">{f.ans}</p>
                      </div>
                    </div>
                  </div>
                ))}
                </div>
              </div>

              <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="faq-outer-wrapper">
                <div className="faq-img-wrapper">
                  <img src={IMAGES.FAQs} alt="" />
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

export default FAQs;
