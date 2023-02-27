import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useAuthState } from "react-firebase-hooks/auth";

import { auth } from "../../firebase.init";
import feedbackIMG from "../../assets/images/feedback .png";
import Loading from "../../Shared/Loading";
import axios from "axios";
import toast from "react-hot-toast";
const Feedback = () => {
  //user
  const [user, loading] = useAuthState(auth);
  //ratting state
  // get user data
  const [userIMG, setUserIMG] = useState("");
  useEffect(() => {
    (async function () {
      const { data } = await axios.get(
        `https://outtel-backend.onrender.com/user-image/${user?.email}`
      );
      setUserIMG(data?.image);
    })();
  }, [user?.email]);

  const [ratting, setRatting] = useState(5);

  //react hook form
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ mode: onchange });

  //handle feedback
  const onSubmit = (data) => {
    const newFeedback = {
      ...data,
      name: user?.displayName,
      email: user?.email,
      image: userIMG || user?.photoURL || "",
      ratting: ratting,
    };
    console.log(newFeedback);
    (async function () {
      const { data } = await axios.post(
        "https://outtel-backend.onrender.com/feedbacks",
        newFeedback
      );
      console.log(data);
      toast.success("You have successfully submitted a review!");
      reset();
    })();
  };
  if (loading) return <Loading />;

  return (
    <div className="flex justify-center items-center bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={feedbackIMG} className="hidden lg:block" alt="login" />

        <div className="card flex-shrink-0 w-full lg:max-w-sm shadow-2xl bg-base-100">
          {/* form */}
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            {/* Product name field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="text"
                value={user?.displayName}
                disabled
                className="input input-bordered w-full max-w-xs"
              />
            </div>

            {/* feedback des field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Feedback</span>
              </label>
              <textarea
                {...register("feedback", {
                  required: {
                    value: true,
                    message: "Please write a feedback!",
                  },
                  minLength: {
                    value: 270,
                    message: "You have to put at least 50 words",
                  },
                  maxLength: {
                    value: 290,
                    message: "You have to put under 55 words",
                  },
                })}
                type="text"
                placeholder="Write a feedback"
                className="input input-bordered w-full h-24 max-w-xs"
              />
              <label className="label">
                {errors.feedback?.type === "required" && (
                  <span className="label-text-alt text-error">
                    {errors.feedback.message}
                  </span>
                )}
                {errors.feedback?.type === "minLength" && (
                  <span className="label-text-alt text-error">
                    {errors.feedback.message}
                  </span>
                )}
                {errors.feedback?.type === "maxLength" && (
                  <span className="label-text-alt text-error">
                    {errors.feedback.message}
                  </span>
                )}
              </label>
            </div>

            <div className="flex gap-8 items-center">
              <p className="text-lg">Ratting:</p>
              <div className="rating w-full">
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star bg-orange-400"
                  onClick={() => setRatting(1)}
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star bg-orange-400"
                  onClick={() => setRatting(2)}
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star bg-orange-400"
                  onClick={() => setRatting(3)}
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star bg-orange-400"
                  onClick={() => setRatting(4)}
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star bg-orange-400"
                  onClick={() => setRatting(5)}
                />
              </div>
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary">Give Feedback</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
