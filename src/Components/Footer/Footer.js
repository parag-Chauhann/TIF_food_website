import React from 'react';
import "./Footer.css";
import logo from "../Home/image/Picture3.png";
import instagram from "./img/1161953_instagram_icon.png";
import twitter from "./img/5305170_bird_social media_social network_tweet_twitter_icon.png";
import fb from "./img/5305153_fb_facebook_facebook logo_icon.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="Company Logo" />
        </div>
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434</p>
          <p>Email: info@example.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className="footer-more">
          <h3>More</h3>
          <ul>
            <li><a href="top">About Us</a></li>
            <li><a href="top">Products</a></li>
            <li><a href="top">Career</a></li>
            <li><a href="top">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.instagram.com"><img className="social-logo-insta" src={instagram} alt='socil-logo' /></a>
            <a href="https://www.twitter.com"><img className="social-logo-twitter" src={twitter} alt='socil-logo' /></a>
            <a href="https://www.facebook.com"><img className="social-logo-fb" src={fb} alt='socil-logo' /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2022 Food Truck Example
      </div>
    </footer>
  );
};

export default Footer;
