import React from "react";
import CoursesSection from "../sections/CoursesSection";
import TrainingModule from "../sections/TrainingModule";
import Companies from "../sections/Companies";
import Video from "../sections/Video";
import SatisfactionGuarenteed from "../sections/SatisfactionGuarenteed";
import WhoCanDoThisCourse from "../sections/WhoCanDoThisCourse";
import Testimonials from "../sections/Testimonials";
import FAQs from "../sections/FAQs";
import Blogs from "../sections/Blogs";

const Home = () => {
  return (
    <>
      <CoursesSection />
      <TrainingModule />
      <Companies />
      <Video />
      <SatisfactionGuarenteed />
      <WhoCanDoThisCourse />
      <Testimonials />
      <FAQs />
      <Blogs />
    </>
  );
};

export default Home;
