"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ProductItem from "./product-item";

const ProductInSameCategory = ({ products }) => {


  return (
    <Swiper
     
      spaceBetween={50}
      slidesPerView={3}
     
      
    >
      {products.map((item) => (
        <SwiperSlide key={item.id}>
          <ProductItem {...item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductInSameCategory;
