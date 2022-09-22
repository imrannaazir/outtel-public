import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImage from "../../assets/images/login.png";
import { auth } from "../../firebase.init";
import useToken from "../../hooks/useToken";
import Loading from "../../Shared/Loading";
const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  // useCreateWith email and pass
  const [createUserWithEmailAndPassword, eUser, eLoading, eError] =
    useCreateUserWithEmailAndPassword(auth);
  // profile update
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  //sign in with google
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  //token
  const [token] = useToken(eUser?.user || gUser?.user);

  //hook form
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: onchange });

  // watch pass
  const password = watch("password");

  // form handle
  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
  };
  //loading
  if (updating || eLoading || gLoading) return <Loading />;
  //error
  if (updateError || eError) {
    console.log(updateError || eError || gError);
  }
  //token = navigate
  if (token) {
    navigate(from);
  }

  return (
    <div className="flex items-center justify-center gap-4 bg-base-200 min-h-screen pt-[80px]">
      <div className="bg-base-100 lg:px-8 rounded-2xl shadow-xl py-2">
        {/* form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <p className="text-center text-lg text-primary font-bold">Register</p>

          {/* email field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text w-full max-w-xs">Full Name</span>
            </label>
            <input
              {...register("name", {
                required: {
                  value: true,
                  message: "name is required",
                },
              })}
              type="text"
              placeholder="Create username"
              className="input input-bordered w-full max-w-xs lg:w-[350px]"
            />
            <label className="label">
              {errors.name?.type === "required" && (
                <span className="label-text-alt text-error">
                  {errors.name.message}
                </span>
              )}
            </label>
          </div>
          {/* email field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
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
              className="input input-bordered w-full max-w-xs"
            />
            <label className="label">
              {errors.email?.type === "required" && (
                <span className="label-text-alt text-error">
                  {errors.email.message}
                </span>
              )}
              {errors.email?.type === "pattern" && (
                <span className="label-text-alt text-error">
                  {errors.email.message}
                </span>
              )}
            </label>
          </div>

          {/* password field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text w-full max-w-xs">Password</span>
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
              className="input input-bordered w-full max-w-xs"
            />
            <label className="label">
              {errors.password?.type === "required" && (
                <span className="label-text-alt text-error">
                  {errors.password.message}
                </span>
              )}
              {errors.password?.type === "minLength" && (
                <span className="label-text-alt text-error">
                  {errors.password.message}
                </span>
              )}
            </label>
          </div>

          {/*confirm password field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text w-full max-w-xs">
                Confirm Password
              </span>
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
              className="input input-bordered w-full max-w-xs"
            />
            <label className="label">
              {errors.confirm_password?.type === "required" && (
                <span className="label-text-alt text-error">
                  {errors.confirm_password.message}
                </span>
              )}
              {errors.confirm_password?.type === "validate" && (
                <span className="label-text-alt text-error">
                  {errors.confirm_password.message}
                </span>
              )}
            </label>
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-primary w-full max-w-xs">
              Register
            </button>
            <span className="text-center text-sm my-3 w-full max-w-xs">
              Have an account?
              <Link className="text-primary" to="/login">
                Please log in
              </Link>
            </span>
          </div>
        </form>
        <div className="divider">OR</div>
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-outline btn-primary btn-block"
        >
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
