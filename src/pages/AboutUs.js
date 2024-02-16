import React from "react";
import "../Assets/Styles/AboutUs.css";
import { IMAGES } from "../utils";
import { Carousel } from "react-bootstrap";

const AboutUs = () => {
  return (
    <>
      <section>
        <div className="slider-desktop">
          <Carousel controls={false} indicators={false} className="relative">
            <Carousel.Item>
              <div className="videoSlider">
                <video
                  width="100%"
                  class="elVideo"
                  loop="loop"
                  autoPlay
                  playsInline
                  muted
                  src="https://www.youtube.com/embed/FsrMPexJkI4"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  // src="https://video.wixstatic.com/video/2b2e29_67857aa3bb16417ea7909ddc8d01b6e0/720p/mp4/file.mp4"
                  id="video-slider-1"
                ></video>
              </div>

              <div className="carousel-text1">
                <div className="carousel-inner-wrapper1">
                  <h3>Pune Digital Internet Marketing Agency</h3>
                  <p>Grow Your ROI With the best digital Marketing solution</p>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="videoSlider">
                <video
                  width="100%"
                  class="elVideo"
                  loop="loop"
                  autoPlay
                  playsInline
                  muted
                  src="https://ak.picdn.net/shutterstock/videos/1025732684/preview/stock-footage-two-male-colleagues-employees-cooperating-in-office-talking-working-together-at-workplace-smiling.webm"
                  id="video-slider-1"
                ></video>
              </div>
              <div className="carousel-text2">
                <div className="carousel-inner-wrapper2">
                  <h3>Pune Digital Internet Marketing Agency</h3>
                  <p>Grow Your ROI With the best digital Marketing solution</p>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="videoSlider">
                <video
                  width="100%"
                  class="elVideo"
                  loop="loop"
                  autoPlay
                  playsInline
                  muted
                  src="https://ak.picdn.net/shutterstock/videos/1033204736/preview/stock-footage-closeup-coding-on-screen-man-hands-coding-html-and-programming-on-screen-laptop-development-web.webm"
                  id="video-slider-1"
                ></video>
              </div>
              <div className="carousel-text3">
                <div className="carousel-inner-wrapper3">
                  <h3>Pune Digital Internet Marketing Agency</h3>
                  <p>Grow Your ROI With the best digital Marketing solution</p>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </section>
      <section className="aboutSection-1">
        <div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="technology-text-wrapper">
                <div className="technology-text">
                  <p>
                    Developers Thrill Software Solutions, a Graphic Designing,
                    Digital Marketing, Web Design and Development Training
                    Institute in Pune with Real-time Training on Online
                    Marketing Training. DThrill a community which thrive to help
                    people who are interested in Learning and implementing
                    digital marketing practices in their Business and Career.
                    Developers Thrill Software Solutions started its journey as
                    Website designing company, with several clients all over the
                    Pune. DThrill even fortunate to work for many NGO and
                    service oriented industries. DThrill only aims to unit and
                    educate more people with Online.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div>
                <img
                  src={IMAGES.aboutUsSection1}
                  alt=""
                  className="technology-col-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="setion-company-info">
        <div className="container">
          <div className="row">
            <div className="company-info-wrapper">
              <p>
                DThrill Is The Knowledge Center To Learn And Implement Graphic
                Designing, Digital Marketing, Web Design And Development
                Strategies To Your Business. We Teach What We Do. We Train
                People On Real-Time Projects And Place Them In TOP MNC
                Companies.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="AboutSection-2">
        <div className="container">
          <div className=" AboutSection-2_bg">
            <div className="AboutSection-2Wrapper">
              <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <div className="AboutSection-2_imageWrapper">
                    <div className="AboutSection-2_Img">
                      <img src={IMAGES.aboutUsSection2} />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <div className="aboutsectionTextWrapper">
                    <div className="aboutsectionText">
                      <h3>About Our Company </h3>
                      <p>
                        Ultricies leo integer malesuada nunc vel risus commodo
                        viverra maecenas. Lobortis elementum nibh tellus
                        molestie nunc non. Aliquet bibendum
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="aboutusSection-2_cardsBody">
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  <div className="cardsWrapper">
                    <div className="training">
                      <h3>Training</h3>
                      <p>
                        We are established with Vision to Educate people with
                        Right Technical and Practical Skills, So that they can
                        reduce the Gap Between the Skills provided by Education
                        System and The Skills required by The Job Industry.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="cardsWrapper">
                    <div className="consulting">
                      <h3>Consulting</h3>{" "}
                      <p>
                        {" "}
                        Many confuse two things. Either to hire an In-house team
                        or Outsource it to a Consultancy. We are the solution
                        for it. We are consultants, will work with your In-house
                        team to Deliver Results.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="cardsWrapper">
                    <div className="placement">
                      <h3>Placements</h3>
                      <p>
                        {" "}
                        Some Placement agents still work on the same Job Portals
                        for Recruiting potential candidates. We go beyond the
                        Portals. We have a network pool of candidates database
                        from Freshers to Executives.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="AboutSection-3">
        <div className="whatElse-body">
          <div className="row">
            <div className="col-lg-6"></div>
            <div className="col-lg-6">
              <div className="whatElseWeDo-right">
                <div className="whatElseWeDo-right-content">
                  <div className="whatElseHeading">
                    <h3>WHAT ELSE DO WE DO? CORPORATE TRAINING</h3>
                  </div>
                  <div className="whatElseText">
                    <p>
                      Are you preparing for Training and Development interview?
                      Training and Development is a general term used to every
                      person. One should get trained in technology that he/she
                      is interested in. There are many such technologies that
                      can be trained on. People are choosing their interested
                      one and finding the jobs. Not only specific to technical
                      knowledge, people should improve their personal skills in
                      order to move ahead in life. Many institutions are
                      offering courses on training and development. Human
                      resource management is one key sector for this. There is
                      huge demand for this technology in the market. Good
                      knowledge on their technology will fetch the desired job.
                      Our Human Resources Development solutions help to
                      identify, build, and best utilize your employees’
                      knowledge and skills. Our Training and Development
                      Solutions help to train your employees for their current
                      jobs and develop skills for their future roles and
                      responsibilities
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
