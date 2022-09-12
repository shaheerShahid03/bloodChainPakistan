import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./slider.css";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import BloodtypeIcon from "@mui/icons-material/Bloodtype";
import { useNavigate } from "react-router-dom";

export default function Slider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const navigate = useNavigate();

  return (
    <div className="frontWrapper">
      <Carousel activeIndex={index} onSelect={handleSelect} indicators={false}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "500px" }}
            src={"banner.jpg"}
            alt="First slide"
          />
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "500px" }}
            src={"slide2.jpg"}
            alt="Second slide"
          />

          {/* <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "500px" }}
            src={"slide3.jpg"}
            alt="Third slide"
          />

          {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>

      <div className="wrapperr">
        <div
          className="register_now_btn bgBlack colorWhite "
          style={{ textAlign: "start" }}
          onClick={() => navigate("/registration")}
        >
          <div className="pad">
            <h5>Register Now / Donate Now</h5>
            <p>
              Now again is there anyone who loves or purses or desire to obtain
              pain of itself,because it is pain
            </p>
          </div>
          <div className="reg_icon">
            <HowToRegIcon style={{ fontSize: 35 }} />
          </div>
        </div>

        <div
          className="bgRed colorWhite donate_now_btn"
          style={{ textAlign: "start" }}
          onClick={() => navigate("/emergency_case")}
        >
          <div className="pad">
            <h5>Emergency</h5>
            <p>
              Now again is there anyone who loves or purses or desire to obtain
              pain of itself,because it is pain
            </p>
          </div>
          <div className="reg_icon">
            <BloodtypeIcon style={{ fontSize: 35 }} />
          </div>
        </div>
      </div>
    </div>
  );
}
