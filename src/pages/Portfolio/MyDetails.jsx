import React from "react";
import me from "../../assets/images/me.png";

const MyDetails = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={me} className="w-[50%]" alt="" />
        <div className="w-full">
          <h1 className="text-5xl font-bold w-full">Who Am I!</h1>
          <p className="pt-6 text-3xl font-semibold text-primary">
            Imran Nazir Emon
          </p>
          <p className="mb-5 text-xl">Frontend Developer, React JS.</p>
          <p className="text-primary font-semibold">
            AGE: <span className="text-black font-normal">19</span>{" "}
          </p>
          <p className="text-primary font-semibold">
            PHONE:{" "}
            <span className="text-black font-normal">(+880) 1405580607</span>{" "}
          </p>
          <p className="text-primary font-semibold">
            EMAIL:{" "}
            <span className="text-black font-normal">
              imrannaaziremon@gmail.com
            </span>{" "}
          </p>
          <p className="text-primary font-semibold mb-6">
            ADDRESS:{" "}
            <span className="text-black font-normal">
              Jashore, Khulna,Bangladesh
            </span>{" "}
          </p>

          <button className="btn btn-primary">Contact me</button>
        </div>
      </div>
    </div>
  );
};

export default MyDetails;
