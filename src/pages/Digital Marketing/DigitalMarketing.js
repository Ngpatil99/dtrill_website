import React from "react";
import "../../Assets/Styles/DigitalMarketing.css";
import { IMAGES } from "../../utils";
const DigitalMarketing = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="BestDmCrsSection">
            <div className="row">
              <div className="col-lg-6">
                <div className="bestDmCrsWrapper">
                  <h3>We Provide Best Digital Marketing Courses In Pune.</h3>
                  <p>
                    We make sure you are in the forefront because, as we all
                    know, digital strategies are constantly evolving. Our team
                    of professionals wants to help you succeed and has
                    first-hand expertise in the field. Dthrill Software
                    Solutions LLP is one of the most reputed digital marketing
                    training institutes in Pune. They offer offline courses in
                    digital marketing, including certification courses in SEO,
                    Google AdWords, social media marketing, email marketing,
                    mobile marketing, digital branding, content marketing, and
                    affiliate marketing. We also offer degrees in graphic and
                    web design, as well as digital marketing
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="bestDmCrsImageWrapper">
                  <img
                    src={IMAGES.DMLandingImage}
                    alt="landing digital marketing image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="DMCourseListSection">
          <div className="container">
            <div className="DMCourseListHeading">
              <h3>DIGITAL MARKETING COURSES IN PUNE</h3>
            </div>
            <div className="row">
              <div className="DMCourseListingWrapper">
                <div className="DMCourseListing">
                  <div className="">
                    <ul>
                      <li> 50+ Modules In Digital Marketing.</li>
                      <li> 50+ Tools In Digital Marketing.</li>
                      <li> Industrial Oriented Training.</li>
                      <li> Industrial Experienced Faculties.</li>
                    </ul>
                  </div>
                  <div className="">
                    <ul>
                      <li> Weekly New Batches For New Joiner.</li>
                      <li> Industrial Training With Live Projects.</li>
                      <li> Placements & Campus Drives.</li>
                      <li> Both Theoretical & Practical Training.</li>
                    </ul>
                  </div>
                </div>
                <div className="DMCourseListingBottom-li">
                  <ul>
                    <li> Most Trusted & Recommended Institute In Training.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="whatIsDmSection">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="whatIsDmImage">
                <img src={IMAGES.DM3} />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="whatIsDmWrapper">
                <div className="whatIsDmHeading">
                  <h3>What is Digital Marketing ?</h3>
                </div>
                <div className="whatIsDmText">
                  <p>
                    Digital marketing is the use of digital channels and
                    technologies to promote a product, service, or brand. It
                    encompasses a range of tactics and techniques to reach
                    customers and prospects online and drive engagement,
                    conversions, and sales. So enrol in the best digital
                    marketing courses in Pune at Dthrill Software Solutions LLP
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="digitalMarketing">
        <div className="container">
          <div>
            <h3>Why Digital Marketing?</h3>
          </div>
          <div>
            <p>
              There are many reasons why digital marketing has become essential
              for businesses of all sizes and industries.
              <br/> Here are a few of the
              key reasons why digital marketing is important:
            </p>
          </div>
          <div className="DMWrapper">
            <div className="row">
              <div className="col-lg-6">
                <div className="DMPoints">
                  <h5>Increased Reach</h5>
                  <p>
                    With digital marketing, businesses can reach a much larger
                    audience than traditional marketing channels. Digital
                    channels like social media, email, and search engines have
                    billions of users, allowing businesses to connect with
                    customers and prospects all over the world.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="DMPoints">
                  <h5>Greater Targeting</h5>
                  <p>
                    Digital marketing allows businesses to target their audience
                    more precisely, based on factors like age, location,
                    interests, and behavior. This means that businesses can
                    create more personalized and relevant messages that resonate
                    with their target audience and drive better results.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="DMPoints">
                  <h5>Cost-Effective</h5>
                  <p>
                    Digital marketing is often more cost-effective than
                    traditional marketing channels like TV, radio, and print.
                    Many digital marketing channels offer a range of pricing
                    options, from pay-per-click to subscription-based models,
                    allowing businesses to choose the option that best fits
                    their budget and goals
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="DMPoints">
                  <h5>Measurable Results</h5>
                  <p>
                    Digital marketing allows businesses to track and measure
                    their results more accurately than traditional marketing
                    channels. Businesses can use tools like Google Analytics to
                    track website traffic, conversions, and other metrics,
                    allowing them to optimize their campaigns and improve their
                    ROI over time.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="DMPoints">
                  <h5>Flexibility and Agility</h5>
                  <p>
                    Digital marketing offers businesses greater flexibility and
                    agility in responding to market changes and customer needs.
                    Unlike traditional marketing channels, digital marketing
                    campaigns can be launched quickly and modified in real-time
                    based on customer feedback and market trends.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p>
              Overall, digital marketing offers businesses a range of benefits
              that can help them reach their target audience, drive conversions
              and sales, and grow their business in a cost-effective and
              measurable way.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalMarketing;
