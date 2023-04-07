import React from "react";
import star from "../img/star.png";
import pythonImg from '../img/python.png';
import reactImg from '../img/react.svg';
import  mlImg from '../img/ml.webp';
import javaImg from '../img/JavaLogo.png';
import nodeImg from '../img/nodejs.png';
import frontendImg from '../img/frontend.png';
import backendImg from '../img/backend.png';
import dbmsImg from '../img/dbms.png';
import "./card.css";

export default function Card(propsObj) {
  const imgArr = [pythonImg,reactImg,mlImg,javaImg,nodeImg,frontendImg,backendImg,dbmsImg];
  const props = propsObj.propValues;
  console.log(props);
  return (
    <div>
      <div className="container-card">
        <div className="lable"><p>50% Off</p></div>
        <div className="img">
          <img src={imgArr[props.img]} alt="logo" />
        </div>
        <div className="rating">
          <div className="stat">
            <p>{props.enroll}K People Enrolled</p>
          </div>
          <div className="rate-container">
            <div className="rate">
              <p>{props.star}</p>

              <img src={star} alt="star" />
            </div>
          </div>
        </div>
        <div className="title">
          <h2>{props.title}</h2>
        </div>
        <div className="description">
          <p>
          {props.descp}
          </p>
        </div>
        <div className="price-sec">
          <div className="price">
            <b>Rs {props.price}</b>
          </div>
          <div className="buynow">
            <button>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
