import React from "react";
import { useForm } from "react-hook-form";
import feedbackIMG from "../../assets/images/feedback .png";
const Feedback = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: onchange });

  const onSubmit = (data) => {
    console.log(data);
  };
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
                placeholder="Enter product name"
                class="input input-bordered w-full max-w-xs"
              />
            </div>
            {/* Product name field */}
            <div class="form-control">
              <label class="label">
                <span class="label-text">Your Email</span>
              </label>
              <input
                type="text"
                placeholder="Enter product name"
                class="input input-bordered w-full max-w-xs"
              />
            </div>

            {/* Product des field */}
            <div class="form-control">
              <label class="label">
                <span class="label-text">Product Name</span>
              </label>
              <textarea
                {...register("name", {
                  required: {
                    value: true,
                    message: "Product name is required",
                  },
                })}
                type="text"
                placeholder="Enter product name"
                class="input input-bordered w-full h-24 max-w-xs"
              />
              <label class="label">
                {errors.name?.type === "required" && (
                  <span class="label-text-alt text-error">
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>

            <div className="flex gap-8 items-center">
              <p className="text-lg">Ratting:</p>
              <div class="rating w-full">
                <input type="radio" name="rating-1" class="mask mask-star" />
                <input
                  type="radio"
                  name="rating-1"
                  class="mask mask-star"
                  checked
                />
                <input type="radio" name="rating-1" class="mask mask-star" />
                <input type="radio" name="rating-1" class="mask mask-star" />
                <input type="radio" name="rating-1" class="mask mask-star" />
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
