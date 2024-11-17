import React, { useState } from "react";
import defaultPhoto from "../images/MilklyWay.jpg";

import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


import marsPhoto from "../images/mars.jpg"


function SliderWithLinks() {
    const slides = [
      { img: marsPhoto, link: "/mars", title: "Mars" },
      { img: marsPhoto, link: "/mars" , title: "Mars"},
      { img: marsPhoto, link: "/mars" , title: "Mars"},
      { img: marsPhoto, link: "/mars" , title: "Mars"},
    ];
  
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 768, 
          settings: { slidesToShow: 1 }
        },
        {
          breakpoint: 100,
          settings: { slidesToShow: 1 }
        }
      ]
    };
  
    return (
      <div >
        <h2>Planets</h2>
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="slider">
                <div className="glass-box">
                    {/* <img
                        src={slide.img}
                        alt={`Slide ${index + 1}`}
                        style={{ width: "100%", borderRadius: "100%" }}
                    /> */}
                    <div 
                        className="img-holder"
                        style={{backgroundImage: `url(${slide.img})`}}
                    ></div>
                    <div className="info">
                        <h3>{slide.title}</h3>
                        <p>Summary text go here</p>
                        <Link to={slide.link} className="slider-link">
                            Learn more
                            <i className="fa-solid fa-circle-right"></i>
                        </Link>
                    </div> 
                </div>
                
              
            </div>
          ))}
        </Slider>
      </div>
    );
  }

  export default SliderWithLinks;