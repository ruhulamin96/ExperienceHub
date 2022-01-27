import React from "react";
import './Footer.css'
function Footer() {
  return (
    <div className="mt-5">
      <div className="container-fluid">
        <div className="row footer-style">
          <div className="col-md-4">
            <h3>How It Works</h3>
            <div>
              <p> WHY CHOOSE US?</p>
              <p>TRIP PLANNING PROCESS</p>
              <p>HOW MUCH DOES IT COST?</p>
              <p>MY BOOKING</p>
            </div>
          </div>
          <div className="col-md-4">
            <h3>About Us</h3>
            <div>
              <p> OUR STORY</p>
              <p>OUR TEAM</p>
              <p>OUR REVIEWS</p>
              <p>OUR PROMISE</p>
            </div>
          </div>
          <div className="col-md-4">
            <h3>Get Social</h3>
            <div>
              <p> VISIT US ON FACEBOOK</p>
              <p>VIEW @EXPTRAV TWITTER FEED</p>
              <p>VISIT OUR TRAVEL BLOG</p>
              <p>FOLLOW OUR INSTAGRAM PAGE</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
