import React from 'react';
import logo from "../Home/image/Picture3.png";
import pizza from "../Home/image/Picture1.png";
import redBorder from "../Home/image/Picture2.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Info.css";

function Info() {
  return (
    <div className="container">
      <img className="logo-img" alt="Company Logo" src={logo} />
      <div className="infoText">
        <h1 className='Text'>Discover the <span className='redText'>Best</span> Food and Drinks</h1>
        <p>Naturally made Healthcare Products for the better care & support of your body</p>
        <button type="button" className="btn btn-danger">Explore!</button>
      </div>
      <img className="pizza-img" alt="Delicious Pizza" src={pizza} />
      <img className="red-border-img" alt="Red Border" src={redBorder} />
    </div>
  )
}

export default Info;
