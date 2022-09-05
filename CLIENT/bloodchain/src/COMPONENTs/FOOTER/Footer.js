import React from "react";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import "./footer.css";
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="goTo_up_icon">
        <ArrowCircleUpIcon style={{ fontSize: 50 }} onClick={scrollToTop} />
      </div>
      <footer className="footer_main bgBlack colorWhite">
        <em>Copyright &#169; 2022 BloodChain Pakistan</em>
      </footer>
    </>
  );
};

export default Footer;
