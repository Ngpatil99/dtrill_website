import React from "react";
import "../Assets/Styles/Services.css";
import { IMAGES } from "../utils";
import { FaRegBell } from "react-icons/fa";
import { SiSimpleanalytics } from "react-icons/si";
import { FaList } from "react-icons/fa";
import { BsLaptop } from "react-icons/bs";
import { MdOutlineContentCopy } from "react-icons/md";
import { ImArrowRight2 } from "react-icons/im";
import{BsChevronRight} from "react-icons/bs";
import{AiOutlineLeft} from "react-icons/ai";
import Carousel from 'react-bootstrap/Carousel';


const Services = () => {
  let span = document.getElementsByTagName('span');
	let product = document.getElementsByClassName('product')
	let product_page = Math.ceil(product.length/4);
	let l = 0;
	let movePer = 25.34;
	let maxMove = 203;
	// mobile_view	
	let mob_view = window.matchMedia("(max-width: 768px)");
	if (mob_view.matches)
	 {
	 	movePer = 50.36;
	 	maxMove = 504;
	 }

	let right_mover = ()=>{
		l = l + movePer;
		if (product == 1){l = 0; }
		for(const i of product)
		{
			if (l > maxMove){l = l - movePer;}
			i.style.left = '-' + l + '%';
		}

	}
	let left_mover = ()=>{
		l = l - movePer;
		if (l<=0){l = 0;}
		for(const i of product){
			if (product_page>1){
				i.style.left = '-' + l + '%';
			}
		}
	}
	span[1].onclick = ()=>{right_mover();}
	span[0].onclick = ()=>{left_mover();}

  return (
    <>
      <div className="Services">
        <div className="container-fluid">
          <div className="service-heading">
            <h3>Blogs</h3>
            <h5>Lorem ispum Lorem ispum Lorem ispum Lorem ispum</h5>
          </div>
          <div className="service-section">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div>
                  <img src={IMAGES.Servicebg} alt="" className="service-col-img" />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="service-col-text">
                  <div className="service-inner-text">
                    <div>
                      <h3 className="service-blog-heading"> How we help you to grow</h3>
                    </div>
                    <ul>
                      <li className="service-main-text">
                        <h4>A roof over your head</h4>
                        <p className="service-text-p">Behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated</p>
                      </li>
                      <li className="service-main-text">
                        <h4>A roof over your head</h4>
                        <p className="service-text-p">Behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated</p>
                      </li>
                      <li className="service-main-text">
                        <h4>A roof over your head</h4>
                        <p className="service-text-p">Behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated</p>
                      </li>

                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section id="benefits" className="benefits-area">
            <div className="container">
              <div className="sec-title text-center">
                <h2>Benefits for Account Holders</h2>
                <div className="sub-title">
                  <p>We help businesses and customers achieve more.</p>
                </div>
              </div>
              <ul className="row benefits-content text-center">
                <li className="col-xl-4 single-benefits-box-colum">
                  <div className="single-benefits-box">
                    <div className="icon">
                      <span><SiSimpleanalytics className="icon-high" /></span>
                    </div>
                    <div className="text">
                      <h3>Analysis</h3>
                      <p>The first step is always about information gathering, identifying things like the website purpose, website goals and target audience.</p>
                    </div>
                  </div>
                </li>

                <li className="col-xl-4 single-benefits-box-colum">
                  <div className="single-benefits-box">
                    <div className="icon">
                      <span><FaList className="icon-notification" /></span>
                    </div>
                    <div className="text">
                      <h3>Design</h3>
                      <p>Not only do we focus on wire frame models and the usual style in this stage but also on the usability of the user interface for the best possible user experience.</p>
                    </div>
                  </div>
                </li>

                <li className="col-xl-4 single-benefits-box-colum">
                  <div className="single-benefits-box">
                    <div className="icon">
                      <span><BsLaptop className="icon-safebox" /></span>

                    </div>
                    <div className="text">
                      <h3>Development</h3>
                      <p>Here we actually create the website using in the hypertext markup language and cascading style sheer with the help from databases and other technologies as well if needed.</p>                    </div>
                  </div>
                </li>

                <li className="col-xl-4 single-benefits-box-colum">
                  <div className="single-benefits-box">
                    <div className="icon">
                      <span><BsLaptop className="icon-devlop" /></span>

                    </div>
                    <div className="text">
                      <h3>
                        Deployment</h3>
                      <p>After we launch the site our job is definitely not done yer. We always monitor whats happening after the start, enabling us to fix any possible deficiencies and if you want we can also manage to future maintenance and updates for you</p>
                    </div>
                  </div>
                </li>

                <li className="col-xl-4 single-benefits-box-colum">
                  <div className="single-benefits-box">
                    <div className="icon">
                      <span><FaRegBell className="icon-shield" /></span>

                    </div>
                    <div className="text">
                      <h3>Testing</h3>
                      <p>We test all the technical features like code and scripts compatibility with major browsers, but we also ask ourselves if the website really its purpose.</p>
                    </div>
                  </div>
                </li>

                <li className="col-xl-4 single-benefits-box-colum">
                  <div className="single-benefits-box">
                    <div className="icon">
                      <span><MdOutlineContentCopy className="icon-paperless" /></span>

                    </div>
                    <div className="text">
                      <h3>Content</h3>
                      <p>Content is a very important part of the process in choosing to write text, photos or videos all optimised not only for your visitors but also for search engines.</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section className="individual-corporate-banking-area" id="services">
            <div className="container">
              <div className="row">
                <div className="individual-banking">
                  <div className="individual-banking-bg"></div>
                  <div className="individual-banking__inner">
                    <div className="sec-title">
                      <h2>Banking for Individuals</h2>
                      <div className="sub-title">
                        <p>Offers a wide range of personal banking services.</p>
                      </div>
                    </div>
                    <div className="individual-banking__inner-content">
                      <ul>
                        <li>
                          <div className="single-features-of-banking">
                            <div className="icon-holder">
                              <img decoding="async" src="https://fastwpdemo.com/newwp/finbank/wp-content/uploads/2022/09/banking-features-v1-1.png" alt="Awesome Image" />
                            </div>
                            <h3><a href=" ">Savings &amp; CDs</a></h3>
                            <div className="btn-box">
                              <a href=" "><span><ImArrowRight2 className="icon-right-arrow" /></span></a>

                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="single-features-of-banking">
                            <div className="icon-holder">
                              <img decoding="async" src="https://fastwpdemo.com/newwp/finbank/wp-content/uploads/2022/09/banking-features-v1-2.png" alt="Awesome Image" />
                            </div>
                            <h3><a href=" ">Online &amp; Mobile</a></h3>
                            <div className="btn-box">
                              <a href=" "><span><ImArrowRight2 className="icon-right-arrow" /></span></a>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="single-features-of-banking">
                            <div className="icon-holder">
                              <img decoding="async" src="https://fastwpdemo.com/newwp/finbank/wp-content/uploads/2022/09/banking-features-v1-3.png" alt="Awesome Image" />
                            </div>
                            <h3><a href=" ">Cosumer Loan</a></h3>
                            <div className="btn-box">
                              <a href=" "><span><ImArrowRight2 className="icon-right-arrow" /></span></a>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="single-features-of-banking">
                            <div className="icon-holder">
                              <img decoding="async" src="https://fastwpdemo.com/newwp/finbank/wp-content/uploads/2022/09/banking-features-v1-4.png" alt="Awesome Image" />
                            </div>
                            <h3><a href=" ">Invest &amp; Insure</a></h3>
                            <div className="btn-box">
                              <a href=" "><span><ImArrowRight2 className="icon-right-arrow" /></span></a>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="single-features-of-banking">
                            <div className="icon-holder">
                              <img decoding="async" src="https://fastwpdemo.com/newwp/finbank/wp-content/uploads/2022/09/banking-features-v1-5.png" alt="Awesome Image" />
                            </div>
                            <h3><a href=" ">Credit &amp; Debit Cards</a></h3>
                            <div className="btn-box">
                              <a href=" "><span><ImArrowRight2 className="icon-right-arrow" /></span></a>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="single-features-of-banking">
                            <div className="icon-holder">
                              <img decoding="async" src="https://fastwpdemo.com/newwp/finbank/wp-content/uploads/2022/09/banking-features-v1-4.png" alt="Awesome Image" />
                            </div>
                            <h3><a href="">Invest &amp; Insure</a></h3>
                            <div className="btn-box">
                              <a href=""><span><ImArrowRight2 className="icon-right-arrow" /></span></a>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-12">
                <div className="corporate-banking">
                  <div className="corporate-banking-bg"></div>
                  <div className="corporate-banking__inner">
                    <div className="sec-title">
                      <h2>Banking for Corporate</h2>
                      <div className="sub-title">
                        <p>High end banking solutions to large corporate.
                        </p></div>
                    </div>
                    <div className="corporate-banking__inner-content">
                      <ul>
                        <li>
                          <div className="single-features-of-banking single-features-of-banking--style2">
                            <div className="icon-holder">
                              <img decoding="async" src="https://fastwpdemo.com/newwp/finbank/wp-content/uploads/2022/09/banking-features-v2-1.png" alt="Awesome Image" />
                            </div>
                            <h3><a href=" ">Commercial<br></br> C/A</a></h3>
                            <div className="btn-box">
                              <a href=" "><span><ImArrowRight2 className="icon-right-arrow" /></span></a>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="single-features-of-banking single-features-of-banking--style2">
                            <div className="icon-holder">
                              <img decoding="async" src="https://fastwpdemo.com/newwp/finbank/wp-content/uploads/2022/09/banking-features-v2-2.png" alt="Awesome Image" />
                            </div>
                            <h3><a href=" ">Online &amp;<br></br> Mobile</a></h3>
                            <div className="btn-box">
                              <a href=" "><span><ImArrowRight2 className="icon-right-arrow" /></span></a>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="single-features-of-banking single-features-of-banking--style2">
                            <div className="icon-holder">
                              <img decoding="async" src="https://fastwpdemo.com/newwp/finbank/wp-content/uploads/2022/09/banking-features-v2-3.png" alt="Awesome Image" />
                            </div>
                            <h3><a href=" ">Business <br></br>Loan</a></h3>
                            <div className="btn-box">
                              <a href=" "><span><ImArrowRight2 className="icon-right-arrow" /></span></a>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="single-features-of-banking single-features-of-banking--style2">
                            <div className="icon-holder">
                              <img decoding="async" src="https://fastwpdemo.com/newwp/finbank/wp-content/uploads/2022/09/banking-features-v2-4.png" alt="Awesome Image" />
                            </div>
                            <h3><a href=" ">Invest &amp; <br></br>Insure</a></h3>
                            <div className="btn-box">
                              <a href=" "><span><ImArrowRight2 className="icon-right-arrow" /></span></a>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="single-features-of-banking single-features-of-banking--style2">
                            <div className="icon-holder">
                              <img decoding="async" src="https://fastwpdemo.com/newwp/finbank/wp-content/uploads/2022/09/banking-features-v2-5.png" alt="Awesome Image" />
                            </div>
                            <h3><a href=" ">Cash<br></br> Management</a></h3>
                            <div className="btn-box">
                              <a href=" "><span><ImArrowRight2 className="icon-right-arrow" /></span></a>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="single-features-of-banking single-features-of-banking--style2">
                            <div className="icon-holder">
                              <img decoding="async" src="https://fastwpdemo.com/newwp/finbank/wp-content/uploads/2022/09/banking-features-v2-3.png" alt="Awesome Image" />
                            </div>
                            <h3><a href=" ">Business<br></br> Loan</a></h3>
                            <div className="btn-box">
                              <a href=" "><span><ImArrowRight2 className="icon-right-arrow" /></span></a>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </section>

          <section>
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-12">
                  <div className="team-9">
                    <div className="team-img">
                      <img src={IMAGES.Servicebg} alt="" className="" />
                    </div>
                    <div className="team-content">
                      <h2>Josh Dunn</h2>
                      <h3>CEO &amp; Founder</h3>
                    </div>
                    <div className="team-overlay">
                      <p>Some text goes here that describes about team member</p>
                      <div className="team-social">

                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12">
                  <div className="team-9">
                    <div className="team-img">
                      <img src={IMAGES.Servicebg} alt="" className="" />
                    </div>
                    <div className="team-content">
                      <h2>Mollie Ross</h2>
                      <h3>Art Director</h3>
                    </div>
                    <div className="team-overlay">
                      <p>Some text goes here that describes about team member</p>
                      <div className="team-social">

                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12">
                  <div className="team-9">
                    <div className="team-img">
                      <img src={IMAGES.Servicebg} alt="" className="" />
                    </div>
                    <div className="team-content">
                      <h2>Dylan Adams</h2>
                      <h3>Developer</h3>
                    </div>
                    <div className="team-overlay">
                      <p>Some text goes here that describes about team member</p>
                      <div className="team-social">

                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12">
                  <div className="team-9">
                    <div className="team-img">
                      <img src={IMAGES.Servicebg} alt="" className="" />
                    </div>
                    <div className="team-content">
                      <h2>Jennifer Page</h2>
                      <h3>Designer</h3>
                    </div>
                    <div className="team-overlay">
                      <p>Some text goes here that describes about team member</p>
                      <div className="team-social">

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="container">

              <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-12">
                  <div className="team-3">
                    <div className="team-img">
                      <img src={IMAGES.Servicebg} alt="" className="" />
                      <div className="team-social">

                      </div>
                    </div>
                    <div className="team-content">
                      <h2>Josh Dunn</h2>
                      <h3>CEO &amp; Founder</h3>
                      <p>Some text goes here that describes about team member</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12">
                  <div className="team-3">
                    <div className="team-img">
                      <img src={IMAGES.Servicebg} alt="" className="" />
                      <div className="team-social">

                      </div>
                    </div>
                    <div className="team-content">
                      <h2>Mollie Ross</h2>
                      <h3>Art Director</h3>
                      <p>Some text goes here that describes about team member</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12">
                  <div className="team-3">
                    <div className="team-img">
                      <img src={IMAGES.Servicebg} alt="" className="" />
                      <div className="team-social">

                      </div>
                    </div>
                    <div className="team-content">
                      <h2>Dylan Adams</h2>
                      <h3>Developer</h3>
                      <p>Some text goes here that describes about team member</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12">
                  <div className="team-3">
                    <div className="team-img">
                      <img src={IMAGES.Servicebg} alt="" className="" />
                      <div className="team-social">

                      </div>
                    </div>
                    <div className="team-content">
                      <h2>Jennifer Page</h2>
                      <h3>Designer</h3>
                      <p>Some text goes here that describes about team member</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <Carousel variant="dark">
              <Carousel.Item>
                <div className="row">
                  <div className="col-lg-3 col-md-3 col-sm-12">
                    <div className="team-3">
                      <div className="team-img">
                        <img src={IMAGES.Servicebg} alt="" className="" />
                        <div className="team-social">

                        </div>
                      </div>
                      <div className="team-content">
                        <h2>Josh Dunn</h2>
                        <h3>CEO &amp; Founder</h3>
                        <p>Some text goes here that describes about team member</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-12">
                    <div className="team-3">
                      <div className="team-img">
                        <img src={IMAGES.Servicebg} alt="" className="" />
                        <div className="team-social">

                        </div>
                      </div>
                      <div className="team-content">
                        <h2>Josh Dunn</h2>
                        <h3>CEO &amp; Founder</h3>
                        <p>Some text goes here that describes about team member</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-12">
                    <div className="team-3">
                      <div className="team-img">
                        <img src={IMAGES.Servicebg} alt="" className="" />
                        <div className="team-social">

                        </div>
                      </div>
                      <div className="team-content">
                        <h2>Josh Dunn</h2>
                        <h3>CEO &amp; Founder</h3>
                        <p>Some text goes here that describes about team member</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-12">
                    <div className="team-3">
                      <div className="team-img">
                        <img src={IMAGES.Servicebg} alt="" className="" />
                        <div className="team-social">

                        </div>
                      </div>
                      <div className="team-content">
                        <h2>Josh Dunn</h2>
                        <h3>CEO &amp; Founder</h3>
                        <p>Some text goes here that describes about team member</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="row">
                  <div className="col-lg-3 col-md-3 col-sm-12">
                    <div className="team-3">
                      <div className="team-img">
                        <img src={IMAGES.Servicebg} alt="" className="" />
                        <div className="team-social">

                        </div>
                      </div>
                      <div className="team-content">
                        <h2>Josh Dunn</h2>
                        <h3>CEO &amp; Founder</h3>
                        <p>Some text goes here that describes about team member</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-12">
                    <div className="team-3">
                      <div className="team-img">
                        <img src={IMAGES.Servicebg} alt="" className="" />
                        <div className="team-social">

                        </div>
                      </div>
                      <div className="team-content">
                        <h2>Josh Dunn</h2>
                        <h3>CEO &amp; Founder</h3>
                        <p>Some text goes here that describes about team member</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-12">
                    <div className="team-3">
                      <div className="team-img">
                        <img src={IMAGES.Servicebg} alt="" className="" />
                        <div className="team-social">

                        </div>
                      </div>
                      <div className="team-content">
                        <h2>Josh Dunn</h2>
                        <h3>CEO &amp; Founder</h3>
                        <p>Some text goes here that describes about team member</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-12">
                    <div className="team-3">
                      <div className="team-img">
                        <img src={IMAGES.Servicebg} alt="" className="" />
                        <div className="team-social">

                        </div>
                      </div>
                      <div className="team-content">
                        <h2>Josh Dunn</h2>
                        <h3>CEO &amp; Founder</h3>
                        <p>Some text goes here that describes about team member</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel.Item>

              <Carousel.Item>
                <div className="row">
                  <div className="col-lg-3 col-md-3 col-sm-12">
                    <div className="team-3">
                      <div className="team-img">
                        <img src={IMAGES.Servicebg} alt="" className="" />
                        <div className="team-social">

                        </div>
                      </div>
                      <div className="team-content">
                        <h2>Josh Dunn</h2>
                        <h3>CEO &amp; Founder</h3>
                        <p>Some text goes here that describes about team member</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-12">
                    <div className="team-3">
                      <div className="team-img">
                        <img src={IMAGES.Servicebg} alt="" className="" />
                        <div className="team-social">

                        </div>
                      </div>
                      <div className="team-content">
                        <h2>Josh Dunn</h2>
                        <h3>CEO &amp; Founder</h3>
                        <p>Some text goes here that describes about team member</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-12">
                    <div className="team-3">
                      <div className="team-img">
                        <img src={IMAGES.Servicebg} alt="" className="" />
                        <div className="team-social">

                        </div>
                      </div>
                      <div className="team-content">
                        <h2>Josh Dunn</h2>
                        <h3>CEO &amp; Founder</h3>
                        <p>Some text goes here that describes about team member</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-12">
                    <div className="team-3">
                      <div className="team-img">
                        <img src={IMAGES.Servicebg} alt="" className="" />
                        <div className="team-social">

                        </div>
                      </div>
                      <div className="team-content">
                        <h2>Josh Dunn</h2>
                        <h3>CEO &amp; Founder</h3>
                        <p>Some text goes here that describes about team member</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </section>

          <section>
            <div className="container main-faq-bg">
              <div>
                <h3 className="text-center">Frequency Ask Qutions</h3>
                <p className="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br></br>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </p>
              </div>
              <div className="row faqsection">

                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="faq-text">
                    <h5>Do you arrange a Demo Class?</h5>
                    <p>Yes, we organize demo classes, this session gives you understanding of the whole course.
                    </p>
                    <h5>Do you provide Placement ?
                    </h5>
                    <p>Yes, we provide placement to our students after completing this course from our institute & Depends On Students Capacity
                    </p>
                    <h5>Which Certificates will I get?
                    </h5>
                    <p>We Provide ISO Certificates after Completion of the Graphics Designing Course.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="faq-text">
                    <h5>What if I miss some lectures?
                    </h5>
                    <p>The lectures/topics which are missed can be covered by attending other batches.

                    </p>
                    <h5>Do you provide Internships?

                    </h5>
                    <p>Yes, we provide Internships after completion of course.

                    </p>
                    <h5>Is installment available?

                    </h5>
                    <p>Yes, 3 installments are available for Graphics Designing long term courses
                    </p>
                  </div>

                </div>
              </div>
              <div className="text-center"><p>Still have Qutions?<b>Ask Your Qutions here</b></p></div>
            </div>
          </section>
          {/* auto carousel1 */}
          <section class="img-slider">
            <div class="slider-container">
              <div class="slide">
                <div className="row">
                  <div className="col-lg-3 col-md-3 col-sm-12">
                    <div className="team-3">
                      <div className="team-img">
                      <img src={IMAGES.Servicebg} alt="" className="" />
                        <div className="team-social">

                        </div>
                      </div>
                      <div className="team-content">
                        <h2>Josh Dunn</h2>
                        <h3>CEO &amp; Founder</h3>
                        <p>Some text goes here that describes about team member</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-12">
                    <div className="team-3">
                      <div className="team-img">
                        <img src={IMAGES.Servicebg} alt="" className="" />
                        <div className="team-social">

                        </div>
                      </div>
                      <div className="team-content">
                        <h2>Josh Dunn</h2>
                        <h3>CEO &amp; Founder</h3>
                        <p>Some text goes here that describes about team member</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-12">
                    <div className="team-3">
                      <div className="team-img">
                        <img src={IMAGES.Servicebg} alt="" className="" />
                        <div className="team-social">

                        </div>
                      </div>
                      <div className="team-content">
                        <h2>Josh Dunn</h2>
                        <h3>CEO &amp; Founder</h3>
                        <p>Some text goes here that describes about team member</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-12">
                    <div className="team-3">
                      <div className="team-img">
                        <img src={IMAGES.Servicebg} alt="" className="" />
                        <div className="team-social">

                        </div>
                      </div>
                      <div className="team-content">
                        <h2>Josh Dunn</h2>
                        <h3>CEO &amp; Founder</h3>
                        <p>Some text goes here that describes about team member</p>
                      </div>
                    </div>
                  </div>
                </div>    </div>

              <div class="slide">
                <div className="row">
                  <div className="col-lg-3 col-md-3 col-sm-12">
                    <div className="team-3">
                      <div className="team-img">
                        <img src={IMAGES.Servicebg} alt="" className="" />
                        <div className="team-social">

                        </div>
                      </div>
                      <div className="team-content">
                        <h2>Josh Dunn</h2>
                        <h3>CEO &amp; Founder</h3>
                        <p>Some text goes here that describes about team member</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-12">
                    <div className="team-3">
                      <div className="team-img">
                        <img src={IMAGES.Servicebg} alt="" className="" />
                        <div className="team-social">

                        </div>
                      </div>
                      <div className="team-content">
                        <h2>Josh Dunn</h2>
                        <h3>CEO &amp; Founder</h3>
                        <p>Some text goes here that describes about team member</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-12">
                    <div className="team-3">
                      <div className="team-img">
                        <img src={IMAGES.Servicebg} alt="" className="" />
                        <div className="team-social">

                        </div>
                      </div>
                      <div className="team-content">
                        <h2>Josh Dunn</h2>
                        <h3>CEO &amp; Founder</h3>
                        <p>Some text goes here that describes about team member</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-12">
                    <div className="team-3">
                      <div className="team-img">
                        <img src={IMAGES.Servicebg} alt="" className="" />
                        <div className="team-social">

                        </div>
                      </div>
                      <div className="team-content">
                        <h2>Josh Dunn</h2>
                        <h3>CEO &amp; Founder</h3>
                        <p>Some text goes here that describes about team member</p>
                      </div>
                    </div>
                  </div>
                </div>    </div>

              <div class="slide">
                <div className="row">
                  <div className="col-lg-3 col-md-3 col-sm-12">
                    <div className="team-3">
                      <div className="team-img">
                        <img src={IMAGES.Servicebg} alt="" className="" />
                        <div className="team-social">

                        </div>
                      </div>
                      <div className="team-content">
                        <h2>Josh Dunn</h2>
                        <h3>CEO &amp; Founder</h3>
                        <p>Some text goes here that describes about team member</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-12">
                    <div className="team-3">
                      <div className="team-img">
                        <img src={IMAGES.Servicebg} alt="" className="" />
                        <div className="team-social">

                        </div>
                      </div>
                      <div className="team-content">
                        <h2>Josh Dunn</h2>
                        <h3>CEO &amp; Founder</h3>
                        <p>Some text goes here that describes about team member</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-12">
                    <div className="team-3">
                      <div className="team-img">
                        <img src={IMAGES.Servicebg} alt="" className="" />
                        <div className="team-social">

                        </div>
                      </div>
                      <div className="team-content">
                        <h2>Josh Dunn</h2>
                        <h3>CEO &amp; Founder</h3>
                        <p>Some text goes here that describes about team member</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-12">
                    <div className="team-3">
                      <div className="team-img">
                        <img src={IMAGES.Servicebg} alt="" className="" />
                        <div className="team-social">

                        </div>
                      </div>
                      <div className="team-content">
                        <h2>Josh Dunn</h2>
                        <h3>CEO &amp; Founder</h3>
                        <p>Some text goes here that describes about team member</p>
                      </div>
                    </div>
                  </div>
                </div>    </div>

            </div>
          </section>

          <main>

            <header>
              <h1>Top Hottest Products</h1>
              <p>
                <span><AiOutlineLeft/></span>
                <span><BsChevronRight/></span>
              </p>
            </header>
            <section>
              <div class="product">
                <picture>
                <img src={IMAGES.Servicebg} alt="" className="" />
                </picture>
                <div class="detail">
                  <p>
                    <b>Product One</b>
                      <small>New arrival</small>
                  </p>
                  <samp>$45.00</samp>
                </div>
                <div class="button">
                  <p class="star">
                    <strong>&star;</strong>
                    <strong>&star;</strong>
                    <strong>&star;</strong>
                    <strong>&star;</strong>
                    <strong>&star;</strong>
                  </p>
                  <a href="#">Add-cart</a>
                </div>
              </div>
              <div class="product">
                <picture>
                <img src={IMAGES.Servicebg} alt="" className="" />
                </picture>
                <div class="detail">
                  <p>
                    <b>Product Two</b>
                      <small>New arrival</small>
                  </p>
                  <samp>$45.00</samp>
                </div>
                <div class="button">
                  <p class="star">
                    <strong>&star;</strong>
                    <strong>&star;</strong>
                    <strong>&star;</strong>
                    <strong>&star;</strong>
                    <strong>&star;</strong>
                  </p>
                  <a href="#">Add-cart</a>
                </div>
              </div>
              <div class="product">
                <picture>
                <img src={IMAGES.Servicebg} alt="" className="" />
                </picture>
                <div class="detail">
                  <p>
                    <b>Product Three</b>
                      <small>New arrival</small>
                  </p>
                  <samp>$45.00</samp>
                </div>
                <div class="button">
                  <p class="star">
                    <strong>&star;</strong>
                    <strong>&star;</strong>
                    <strong>&star;</strong>
                    <strong>&star;</strong>
                    <strong>&star;</strong>
                  </p>
                  <a href="#">Add-cart</a>
                </div>
              </div>
              <div class="product">
                <picture>
                <img src={IMAGES.Servicebg} alt="" className="" />
                </picture>
                <div class="detail">
                  <p>
                    <b>Product Four</b>
                      <small>New arrival</small>
                  </p>
                  <samp>$45.00</samp>
                </div>
                <div class="button">
                  <p class="star">
                    <strong>&star;</strong>
                    <strong>&star;</strong>
                    <strong>&star;</strong>
                    <strong>&star;</strong>
                    <strong>&star;</strong>
                  </p>
                  <a href="#">Add-cart</a>
                </div>
              </div>
              <div class="product">
                <picture>
                <img src={IMAGES.Servicebg} alt="" className="" />
                </picture>
                <div class="detail">
                  <p>
                    <b>Product Five</b>
                      <small>New arrival</small>
                  </p>
                  <samp>$45.00</samp>
                </div>
                <div class="button">
                  <p class="star">
                    <strong>&star;</strong>
                    <strong>&star;</strong>
                    <strong>&star;</strong>
                    <strong>&star;</strong>
                    <strong>&star;</strong>
                  </p>
                  <a href="#">Add-cart</a>
                </div>
              </div>
              <div class="product">
                <picture>
                <img src={IMAGES.Servicebg} alt="" className="" />
                </picture>
                <div class="detail">
                  <p>
                    <b>Product Six</b>
                      <small>New arrival</small>
                  </p>
                  <samp>$45.00</samp>
                </div>
                <div class="button">
                  <p class="star">
                    <strong>&star;</strong>
                    <strong>&star;</strong>
                    <strong>&star;</strong>
                    <strong>&star;</strong>
                    <strong>&star;</strong>
                  </p>
                  <a href="#">Add-cart</a>
                </div>
              </div>
              <div class="product">
                <picture>
                <img src={IMAGES.Servicebg} alt="" className="" />
                </picture>
                <div class="detail">
                  <p>
                    <b>Product Seven</b>
                      <small>New arrival</small>
                  </p>
                  <samp>$45.00</samp>
                </div>
                <div class="button">
                  <p class="star">
                    <strong>&star;</strong>
                    <strong>&star;</strong>
                    <strong>&star;</strong>
                    <strong>&star;</strong>
                    <strong>&star;</strong>
                  </p>
                  <a href="#">Add-cart</a>
                </div>
              </div>
              <div class="product">
                <picture>
                <img src={IMAGES.Servicebg} alt="" className="" />
                </picture>
                <div class="detail">
                  <p>
                    <b>Product Eight</b>
                      <small>New arrival</small>
                  </p>
                  <samp>$45.00</samp>
                </div>
                <div class="button">
                  <p class="star">
                    <strong>&star;</strong>
                    <strong>&star;</strong>
                    <strong>&star;</strong>
                    <strong>&star;</strong>
                    <strong>&star;</strong>
                  </p>
                  <a href="#">Add-cart</a>
                </div>
              </div>
              <div class="product">
                <picture>
                <img src={IMAGES.Servicebg} alt="" className="" />
                </picture>
                <div class="detail">
                  <p>
                    <b>Product Nine</b>
                      <small>New arrival</small>
                  </p>
                  <samp>$45.00</samp>
                </div>
                <div class="button">
                  <p class="star">
                    <strong>&star;</strong>
                    <strong>&star;</strong>
                    <strong>&star;</strong>
                    <strong>&star;</strong>
                    <strong>&star;</strong>
                  </p>
                  <a href="#">Add-cart</a>
                </div>
              </div>
              <div class="product">
                <picture>
                <img src={IMAGES.Servicebg} alt="" className="" />
                </picture>
                <div class="detail">
                  <p>
                    <b>Product Ten</b>
                      <small>New arrival</small>
                  </p>
                  <samp>$45.00</samp>
                </div>
                <div class="button">
                  <p class="star">
                    <strong>&star;</strong>
                    <strong>&star;</strong>
                    <strong>&star;</strong>
                    <strong>&star;</strong>
                    <strong>&star;</strong>
                  </p>
                  <a href="#">Add-cart</a>
                </div>
              </div>
              <div class="product">
                <picture>
                <img src={IMAGES.Servicebg} alt="" className="" />
                </picture>
                <div class="detail">
                  <p>
                    <b>Product Eleven</b>
                      <small>New arrival</small>
                  </p>
                  <samp>$45.00</samp>
                </div>
                <div class="button">
                  <p class="star">
                    <strong>&star;</strong>
                    <strong>&star;</strong>
                    <strong>&star;</strong>
                    <strong>&star;</strong>
                    <strong>&star;</strong>
                  </p>
                  <a href="#">Add-cart</a>
                </div>
              </div>
              <div class="product">
                <picture>
                <img src={IMAGES.Servicebg} alt="" className="" />
                </picture>
                <div class="detail">
                  <p>
                    <b>Product Twelve</b>
                      <small>New arrival</small>
                  </p>
                  <samp>$45.00</samp>
                </div>
                <div class="button">
                  <p class="star">
                    <strong>&star;</strong>
                    <strong>&star;</strong>
                    <strong>&star;</strong>
                    <strong>&star;</strong>
                    <strong>&star;</strong>
                  </p>
                  <a href="#">Add-cart</a>
                </div>
              </div>
            </section>
          </main>

        </div>
      </div>

    </>
  );
};

export default Services;
