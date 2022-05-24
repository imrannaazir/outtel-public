import React from "react";
import { useForm } from "react-hook-form";
import add from "../../assets/images/add.png";
const AddParts = () => {
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
        <img src={add} class="hidden lg:block" alt="login" />

        <div class="card flex-shrink-0 w-full lg:max-w-sm shadow-2xl bg-base-100">
          {/* form */}
          <form onSubmit={handleSubmit(onSubmit)} class="card-body">
            {/* Product name field */}
            <div class="form-control">
              <label class="label">
                <span class="label-text">Product Name</span>
              </label>
              <input
                {...register("name", {
                  required: {
                    value: true,
                    message: "Product name is required",
                  },
                })}
                type="text"
                placeholder="Enter product name"
                class="input input-bordered w-full max-w-xs"
              />
              <label class="label">
                {errors.name?.type === "required" && (
                  <span class="label-text-alt text-error">
                    {errors.name.message}
                  </span>
                )}
              </label>
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
                class="input input-bordered w-full h-16 max-w-xs"
              />
              <label class="label">
                {errors.name?.type === "required" && (
                  <span class="label-text-alt text-error">
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>

            {/* quantity */}

            <div className="flex justify-between">
              {/* quantity */}
              <div class="form-control w-[40%]">
                <label class="label">
                  <span class="label-text">Product Name</span>
                </label>
                <input
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Product name is required",
                    },
                  })}
                  type="text"
                  placeholder="Enter product name"
                  class="input input-bordered w-full max-w-xs"
                />
                <label class="label">
                  {errors.name?.type === "required" && (
                    <span class="label-text-alt text-error">
                      {errors.name.message}
                    </span>
                  )}
                </label>
              </div>
              {/* quantity */}
              <div class="form-control w-[40%]">
                <label class="label">
                  <span class="label-text">Product Name</span>
                </label>
                <input
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Product name is required",
                    },
                  })}
                  type="text"
                  placeholder="Enter product name"
                  class="input input-bordered w-full max-w-xs"
                />
                <label class="label">
                  {errors.name?.type === "required" && (
                    <span class="label-text-alt text-error">
                      {errors.name.message}
                    </span>
                  )}
                </label>
              </div>
            </div>
            {/* quantity */}

            <div className="flex justify-between">
              {/* price */}
              <div class="form-control w-[40%]">
                <label class="label">
                  <span class="label-text">Price</span>
                </label>
                <input
                  {...register("price", {
                    required: {
                      value: true,
                      message: "Price name is required",
                    },
                  })}
                  type="number"
                  placeholder="price/parts"
                  class="input input-bordered w-full max-w-xs"
                />
                <label class="label">
                  {errors.name?.type === "required" && (
                    <span class="label-text-alt text-error">
                      {errors.name.message}
                    </span>
                  )}
                </label>
              </div>
              {/* quantity */}
              <div class="form-control w-[40%]">
                <label class="label">
                  <span class="label-text">Product Name</span>
                </label>
                <input
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Product name is required",
                    },
                  })}
                  type="text"
                  placeholder="Enter product name"
                  class="input input-bordered w-full max-w-xs"
                />
                <label class="label">
                  {errors.name?.type === "required" && (
                    <span class="label-text-alt text-error">
                      {errors.name.message}
                    </span>
                  )}
                </label>
              </div>
            </div>

            <div class="form-control mt-6">
              <button class="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddParts;
