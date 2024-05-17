import React from "react";
import { ReactComponent as MyIcon } from "../Assests/logoicon.svg";
import "./Style/footer.css";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-left">
          <p className="footer-left-para">
            <h5>CodePen</h5>
            <span>About</span>
            <span>Blog</span>
            <span>Podcast</span>
            <span>Documentation</span>
          </p>
          <p className="footer-left-para">
            <h5>For</h5>
            <span>Teams</span>
            <span>Education</span>
            <span>Privacy</span>
            <span>Embeds</span>
          </p>
          <p className="footer-left-para">
            <h5>Social</h5>
            <span>YouTube</span>
            <span>Instagram</span>
            <span>Mastodon</span>
          </p>
          <p className="footer-left-para">
            <h5>Community</h5>
            <span>Spark</span>
            <span>Challenges</span>
            <span>Topics</span>
          </p>
        </div>
        <div className="footer-right">
          <div className="footer-logo">{<MyIcon />}</div>
          <div className="copyright-container">
            <span> ©2024 CodePen-Clone</span>
            <span>AryaWebDeveloper</span>
            <span>Terms of Service · Privacy Policy</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
