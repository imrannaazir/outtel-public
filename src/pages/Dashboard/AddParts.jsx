import React from "react";
import { useForm } from "react-hook-form";

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
    <div>
      {/* form */}
      <form onSubmit={handleSubmit(onSubmit)} class="card-body">
        <p className="text-center text-lg text-primary font-bold">Login</p>

        {/* email field */}
        <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input
            {...register("email", {
              required: {
                value: true,
                message: "email is required",
              },
              pattern: {
                value: /^[^@]+@[^@]+\.[^@]+$/,
                message: "invalid email",
              },
            })}
            type="text"
            placeholder="Enter email"
            class="input input-bordered w-full max-w-xs"
          />
          <label class="label">
            {errors.email?.type === "required" && (
              <span class="label-text-alt text-error">
                {errors.email.message}
              </span>
            )}
            {errors.email?.type === "pattern" && (
              <span class="label-text-alt text-error">
                {errors.email.message}
              </span>
            )}
          </label>
        </div>

        {/* password field */}
        <div class="form-control">
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input
            {...register("password", {
              required: {
                value: true,
                message: "password is required",
              },
              minLength: {
                value: 6,
                message: "password must have at least 6 characters!",
              },
            })}
            type="password"
            placeholder="Enter password"
            class="input input-bordered w-full max-w-xs"
          />
          <label class="label">
            {errors.password?.type === "required" && (
              <span class="label-text-alt text-error">
                {errors.password.message}
              </span>
            )}
            {errors.password?.type === "minLength" && (
              <span class="label-text-alt text-error">
                {errors.password.message}
              </span>
            )}
          </label>
        </div>

        <div class="form-control mt-6">
          <button class="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  );
};

export default AddParts;
