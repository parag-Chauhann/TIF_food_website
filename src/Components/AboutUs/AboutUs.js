import React from 'react';
import './AboutUs.css'; // Import your CSS file
import aboutUsImage from "../Home/image/pharmasict-serving-customer-drug-store 1.png";
import 'bootstrap/dist/css/bootstrap.min.css';

function AboutUs() {
  return (
    <div className='About-container'>
      <div className='about_left'>
        <img src={aboutUsImage} alt="about-us-img" />
      </div>

      <div className='about_right'>
        <div className="aboutText">
          <h1 id="top" className='aboutHeading'>About Us</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries.
          </p>
          <button type="button" className="btn btn-danger">Read More</button>
        </div>
      </div>
    </div>
  )
}

export default AboutUs;
