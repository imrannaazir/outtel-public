import React, { useEffect, useState } from "react";
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
import axios from "axios";
const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    (async function () {
      const { data } = await axios.get("http://localhost:5000/reviews");
      console.log(data);
      setReviews(data);
    })();
  }, []);
  return (
    <div className="">
      <p className="text-4xl font-bold font-serif text-center my-6 ">
        TESTIMONIALS
      </p>
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
        {reviews.map((review, i) => (
          <SwiperSlide>
            <Review key={i} review={review} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
