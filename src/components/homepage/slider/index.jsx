"use client";
import Image from "next/image";
import React from "react";
import { Carousel } from "react-bootstrap";

const Slider = () => {
  
  return (
    <Carousel>
      <Carousel.Item>
        <Image
          src="/images/slider-01.jpg"
          alt="slider 1"
          width={900}
          height={400}
          className="slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          src="/images/slider-02.jpg"
          alt="slider 2"
          width={900}
          height={400}
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
