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
  if (token) {
    navigate(from);
  }
  return (
    <div class="flex justify-center items-center min-h-screen bg-base-200">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img src={loginImage} class="hidden lg:block" alt="login" />

        <div class="card flex-shrink-0 w-full lg:max-w-sm shadow-2xl bg-base-100">
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
              <p className="text-center text-sm my-3">
                Have't any account?
                <Link className="text-primary" to="/register">
                  Please log in
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
