// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";
// import required modules
import { EffectCoverflow, Autoplay } from "swiper";
import Review from "./Review";
import axios from "axios";
import Loading from "../../Shared/Loading";
import { useQuery } from "react-query";
import toast from "react-hot-toast";
import Heading from "./Heading";
const Reviews = () => {
  const {
    isLoading,
    error,
    data: reviews,
  } = useQuery("reviewData", () =>
    axios
      .get("https://historic-cuyahoga-valley-56137.herokuapp.com/reviews")
      .then((res) => res.data)
  );
  //is loading
  if (isLoading) return <Loading />;
  //is any error
  if (error) return toast.error(error.message);

  /*  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    (async function () {
      const { data } = await axios.get(
        "https://historic-cuyahoga-valley-56137.herokuapp.com/reviews"
      );
      setReviews(data);
    })();
  }, []);
  console.log(reviews);
  if (reviews.length === 0) return <Loading />; */
  return (
    <div className="mt-16">
      <Heading>What Our Client Say</Heading>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3.1}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: true,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[EffectCoverflow, Autoplay]}
        breakpoints={{
          0: {
            slidesPerView: 1.1,
          },
          768: {
            slidesPerView: 1.7,
          },
          1024: {
            slidesPerView: 3.1,
          },
        }}
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
