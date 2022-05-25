import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import career from "../../assets/images/career .png";
const CareerObj = () => {
  return (
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content flex-col lg:flex-row">
        <img src={career} className="w-[50%]" alt="" />
        <div>
          <h1 class="text-5xl font-bold">My Career Objective!</h1>
          <p class="py-6">
            Coding well-designed, testable, and efficient code is one of my
            strongest skills. I'm a quick learner and a hard worker whose goal
            is to build many web applications using React JS over the coming
            year. It would be my pleasure to work for you as a junior frontend
            developer and make your company amazed.
          </p>
          <button class="btn btn-primary flex gap-2">
            Get Resume <FontAwesomeIcon icon={faDownload} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CareerObj;
