import React from "react";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import ".//menuBar.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";

const MenuBar = () => {
  return (
    <div className="mainDiv">
      <div className="wrapper ">
        <div className="rowOne colorWhite bgBlack">
          <li className="li">
            <CallIcon style={{ fontSize: 17 }} /> | +1 (123) 456 7890
          </li>

          <li className="li">
            <EmailIcon style={{ fontSize: 17 }} /> | company@domain.com
          </li>

          <li className="location">
            <LocationOnIcon style={{ fontSize: 17 }} />| Gulberg 3,LAHORE
          </li>
        </div>

        <div className="rowTwo colorWhite bgRed">
          <b>Follow Now</b>

          <a
            className="colorWhite"
            href="https://www.facebook.com/BloodChainPK"
            rel="noreferrer"
            target="_blank"
          >
            <FacebookIcon style={{ fontSize: 35 }} className="icons" />
          </a>
          <a
            className="colorWhite"
            href="https://twitter.com/PakistanChain"
            target="_blank"
            rel="noreferrer"
          >
            <TwitterIcon style={{ fontSize: 35 }} className="icons" />
          </a>
          <a
            className="colorWhite"
            href="https://www.instagram.com/bloodchainpk/"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramIcon style={{ fontSize: 35 }} className="icons" />
          </a>
          <a
            className="colorWhite"
            href="https://pk.linkedin.com/company/bloodchainpk"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon style={{ fontSize: 35 }} className="icons linkedin" />
          </a>
        </div>
      </div>

      <div className="wrapper">
        <div className="rowThree colorWhite bgRed">
          <Link to="/" className=" colorWhite noStyle">
            <h2 className="heading">BLOOD CHAIN PAKISTAN</h2>
          </Link>
        </div>

        <div className="rowFour  ">
          <Link to="/" className=" MenunoStyle ">
            <li>Home</li>
          </Link>

          <Link to="" className=" MenunoStyle">
            <li>About Us</li>
          </Link>

          <Link to="" className=" MenunoStyle">
            <li>Campaign</li>
          </Link>

          <Link to="" className=" MenunoStyle">
            <li>Pages</li>
          </Link>

          <Link to="" className=" MenunoStyle">
            <li>Blog</li>
          </Link>

          <Link to="" className=" MenunoStyle">
            <li>Contact</li>
          </Link>
        </div>
      </div>

      {/* <div className="lewanay bgBlack colorWhite">
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
      </div> */}
    </div>
  );
};

export default MenuBar;
