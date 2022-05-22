import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import loginImage from "../../assets/images/login.png";
import { auth } from "../../firebase.init";
const Register = () => {
  const [createUserWithEmailAndPassword, eUser, eLoading, eError] =
    useCreateUserWithEmailAndPassword(auth);

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: onchange });

  const password = watch("password");
  const onSubmit = async (data) => {
    console.log(data);
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
    console.log("update done");
  };
  if (updating || eLoading) return <p>Loading...</p>;

  return (
    <div className="flex items-center justify-center gap-4 bg-base-200 min-h-screen pt-[80px]">
      <div className="bg-base-100 lg:px-8 rounded-2xl shadow-xl py-2">
        {/* form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <p className="text-center text-lg text-primary font-bold">Register</p>

          {/* email field */}
          <div class="form-control">
            <label class="label">
              <span class="label-text w-full max-w-xs">Username</span>
            </label>
            <input
              {...register("username", {
                required: {
                  value: true,
                  message: "username is required",
                },
              })}
              type="text"
              placeholder="Create username"
              class="input input-bordered w-full max-w-xs lg:w-[350px]"
            />
            <label class="label">
              {errors.username?.type === "required" && (
                <span class="label-text-alt text-error">
                  {errors.username.message}
                </span>
              )}
            </label>
          </div>
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
              <span class="label-text w-full max-w-xs">Password</span>
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
              placeholder="Create password"
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
              <span class="label-text w-full max-w-xs">Confirm Password</span>
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
              placeholder="Confirm password"
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
            <button class="btn btn-primary w-full max-w-xs">Register</button>
            <span className="text-center text-sm my-3 w-full max-w-xs">
              Have an account?
              <Link className="text-primary" to="/login">
                Please log in
              </Link>
            </span>
          </div>
        </form>
        <div className="divider">OR</div>
        <button class="btn btn-outline btn-primary btn-block">
          Continue with Google
        </button>
      </div>
      <div>
        <img src={loginImage} alt="" />
      </div>
    </div>
  );
};

export default Register;
