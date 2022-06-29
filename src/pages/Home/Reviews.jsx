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
const Reviews = () => {
  const {
    isLoading,
    error,
    data: reviews,
  } = useQuery("reviewData", () =>
    axios
      .get("https://rocky-waters-98626.herokuapp.com/reviews")
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
        "https://rocky-waters-98626.herokuapp.com/reviews"
      );
      setReviews(data);
    })();
  }, []);
  console.log(reviews);
  if (reviews.length === 0) return <Loading />; */
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
