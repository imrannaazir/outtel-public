import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase.init";
import Review from "./Review";

const Reviews = () => {
  const [user] = useAuthState(auth);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    (async function () {
      const { data } = await axios.get(
        `https://historic-cuyahoga-valley-56137.herokuapp.com/reviews/${user?.email}`
      );
      console.log(data);
      setReviews(data);
    })();
  }, [user?.email]);
  return (
    <div className="w-[95%] px-4 mx-auto mt-8 bg-base-100">
      <p className="text-lg py-4"> Your Reviews</p>
      <div class="overflow-x-auto">
        <table class="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>SL</th>
              <th>Name</th>
              <th>Feedback</th>
              <th>Star</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            {reviews.map((review, i) => (
              <Review i={i} review={review} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reviews;
