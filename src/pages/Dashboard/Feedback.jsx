import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useAuthState } from "react-firebase-hooks/auth";

import { auth } from "../../firebase.init";
import feedbackIMG from "../../assets/images/feedback .png";
import Loading from "../../Shared/Loading";
import axios from "axios";
const Feedback = () => {
  //user
  const [user, loading] = useAuthState(auth);
  //ratting state
  // get user data
  const [userIMG, setUserIMG] = useState("");
  useEffect(() => {
    (async function () {
      const { data } = await axios.get(
        `https://rocky-waters-98626.herokuapp.com/user-image/${user?.email}`
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
        "https://rocky-waters-98626.herokuapp.com/feedbacks",
        newFeedback
      );
      console.log(data);
    })();
  };
  if (loading) return <Loading />;

  return (
    <div class="flex justify-center items-center bg-base-200">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img src={feedbackIMG} class="hidden lg:block" alt="login" />

        <div class="card flex-shrink-0 w-full lg:max-w-sm shadow-2xl bg-base-100">
          {/* form */}
          <form onSubmit={handleSubmit(onSubmit)} class="card-body">
            {/* Product name field */}
            <div class="form-control">
              <label class="label">
                <span class="label-text">Your Name</span>
              </label>
              <input
                type="text"
                value={user?.displayName}
                disabled
                class="input input-bordered w-full max-w-xs"
              />
            </div>

            {/* feedback des field */}
            <div class="form-control">
              <label class="label">
                <span class="label-text">Feedback</span>
              </label>
              <textarea
                {...register("feedback", {
                  required: {
                    value: true,
                    message: "Please write a feedback!",
                  },
                })}
                type="text"
                placeholder="Write a feedback"
                class="input input-bordered w-full h-24 max-w-xs"
              />
              <label class="label">
                {errors.feedback?.type === "required" && (
                  <span class="label-text-alt text-error">
                    {errors.feedback.message}
                  </span>
                )}
              </label>
            </div>

            <div className="flex gap-8 items-center">
              <p className="text-lg">Ratting:</p>
              <div class="rating w-full">
                <input
                  type="radio"
                  name="rating-1"
                  class="mask mask-star bg-orange-400"
                  onClick={() => setRatting(1)}
                />
                <input
                  type="radio"
                  name="rating-1"
                  class="mask mask-star bg-orange-400"
                  onClick={() => setRatting(2)}
                />
                <input
                  type="radio"
                  name="rating-1"
                  class="mask mask-star bg-orange-400"
                  onClick={() => setRatting(3)}
                />
                <input
                  type="radio"
                  name="rating-1"
                  class="mask mask-star bg-orange-400"
                  onClick={() => setRatting(4)}
                />
                <input
                  type="radio"
                  name="rating-1"
                  class="mask mask-star bg-orange-400"
                  onClick={() => setRatting(5)}
                />
              </div>
            </div>

            <div class="form-control mt-6">
              <button class="btn btn-primary">Give Feedback</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
