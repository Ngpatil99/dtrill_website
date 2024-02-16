import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./layouts/Header";
import AboutUs from "./pages/AboutUs";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Placements from "./pages/Placements";
import DigitalMarketing from "./pages/Digital Marketing/DigitalMarketing";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import Footer from "./layouts/Footer";
import Slider from "./layouts/Slider";

function App() {
  return (
    <>
      <Header />
      {/* <Slider/> */}
      {/* <Footer/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/courses" element={<Courses/>} />
        <Route path="/placements" element={<Placements />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact-us" element={<ContactUs />} />

        <Route path="/digital-marketing" element={<DigitalMarketing />} />
       
      </Routes>
    </>
  );
}

export default App;
