import React from "react";
import bannerIMG from "../../assets/images/banner.webp";

const Newsletter = () => {
  return (
    <div
      id="join"
      style={{ backgroundImage: `url(${bannerIMG})` }}
      className="hero bg-cover h-screen gap-10 bg-fixed"
    >
      <div className="hero-overlay bg-primary bg-opacity-75"></div>
      <div className="hero-content text-center text-neutral-content  lg:flex-row-reverse">
        <div className="text-center lg:text-left hidden lg:block text-base-100">
          <h1 className="text-5xl font-bold">Contact Us!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Message</span>
              </label>
              <textarea
                type="text"
                placeholder="message"
                className="input input-bordered h-[100px]"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
