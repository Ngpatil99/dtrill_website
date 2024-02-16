import Carousel from 'react-bootstrap/Carousel';
import { IMAGES } from "../utils";
import "../Assets/Styles/Slider.css";


const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item>
      <img src={IMAGES.Img1} alt="" className="slider-img" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={IMAGES.Img2} alt="" className="slider-img" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={IMAGES.Img2} alt="" className="slider-img" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;