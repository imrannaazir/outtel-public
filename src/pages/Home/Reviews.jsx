import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";
// import required modules
import { EffectCoverflow, Autoplay } from "swiper";
import Review from "./Review";
const Reviews = () => {
  const reviews = ["1", "2", "3", "4", "5", "6"];
  return (
    <div className="">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={4}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[EffectCoverflow, Autoplay]}
        className="mySwiper "
      >
        {reviews.map((review) => (
          <SwiperSlide>
            <Review />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
