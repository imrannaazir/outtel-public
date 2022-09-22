import React from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImage from "../../assets/images/login.png";
import { auth } from "../../firebase.init";
import useToken from "../../hooks/useToken";
import Loading from "../../Shared/Loading";
const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  // sign in with email and pass
  const [signInWithEmailAndPassword, eUser, eLoading, eError] =
    useSignInWithEmailAndPassword(auth);

  //sign in with google
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  //token
  const [token] = useToken(eUser?.user || gUser?.user);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: onchange });

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };
  if (eLoading || gLoading) return <Loading />;
  if (eError || gError) {
    console.log(eError);
  }
  if (token || gUser || eUser) {
    navigate(from);
  }
  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={loginImage} className="hidden lg:block" alt="login" />

        <div className="card flex-shrink-0 w-full lg:max-w-sm shadow-2xl bg-base-100">
          {/* form */}
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <p className="text-center text-lg text-primary font-bold">Login</p>

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
                <span className="label-text">Password</span>
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

            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
              <p className="text-center text-sm my-3">
                Have't any account?
                <Link className="text-primary" to="/register">
                  Please register
                </Link>
              </p>
            </div>
          </form>
          <div className="divider w-full max-w-xs mx-auto">Or</div>
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-outline btn-primary w-full max-w-xs mx-auto mb-6 "
          >
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
