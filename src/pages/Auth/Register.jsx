import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import loginImage from "../../assets/images/login.png";
const Register = () => {
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: onchange });

  const onSubmit = (data) => {
    console.log(data);
  };

  const password = watch("password");

  return (
    <div class="flex justify-center items-center min-h-screen bg-base-200">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img src={loginImage} class="hidden lg:block" alt="login" />

        <div class="card flex-shrink-0 w-full lg:max-w-sm shadow-2xl bg-base-100">
          {/* form */}
          <form onSubmit={handleSubmit(onSubmit)} class="card-body">
            <p>Register</p>

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

            {/*confirm password field */}
            <div class="form-control">
              <label class="label">
                <span class="label-text">Confirm Password</span>
              </label>
              <input
                {...register("confirm_password", {
                  required: {
                    value: true,
                    message: "confirm password is required",
                  },
                  validate: (value) =>
                    value === password || "passwords do not match!",
                })}
                type="password"
                placeholder="Enter password"
                class="input input-bordered w-full max-w-xs"
              />
              <label class="label">
                {errors.confirm_password?.type === "required" && (
                  <span class="label-text-alt text-error">
                    {errors.confirm_password.message}
                  </span>
                )}
                {errors.confirm_password?.type === "validate" && (
                  <span class="label-text-alt text-error">
                    {errors.confirm_password.message}
                  </span>
                )}
              </label>
            </div>

            <div class="form-control mt-6">
              <button class="btn btn-primary">Register</button>
              <p className="text-center text-sm my-3">
                Have an account?
                <Link className="text-primary" to="/login">
                  Please log in
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
