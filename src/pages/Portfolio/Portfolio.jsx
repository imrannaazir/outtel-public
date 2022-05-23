import React from "react";
import me from "../../assets/images/profile-photo.jpg";
import github from "../../assets/images/github.png";
import twitter from "../../assets/images/twitter.png";
import linkedin from "../../assets/images/linkedin.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const Portfolio = () => {
  return (
    <div>
      <div className=" relative w-full h-[350px] bg-gradient-to-r from-gray-500 to-red-500">
        <img
          className=" absolute left-36 top-24 w-[300px] rounded-xl shadow-xl"
          src={me}
          alt=""
        />
        <div className=" absolute left-[470px] lg:left-[600px]  top-24 text-white">
          <p className=" text-5xl font-semibold">Imran Nazir Emon_</p>
          <p className=" text-xl font-mono mb-6">
            frontend developer, React JS.{" "}
          </p>
          <p>
            {" "}
            <span className=" font-bold text-gray-300 font-serif w-[150px]  inline-block">
              AGE:
            </span>{" "}
            <span className=" font-normal text-white font-mono ">19</span>
          </p>
          <p>
            {" "}
            <span className=" font-bold text-gray-300 font-serif w-[150px]  inline-block">
              PHONE:
            </span>{" "}
            <span className=" font-normal text-white font-mono ">
              +91_05456545
            </span>
          </p>
          <p>
            {" "}
            <span className=" font-bold text-gray-300 font-serif w-[150px]  inline-block">
              EMAil:
            </span>{" "}
            <span className=" font-normal text-white font-mono ">
              imrannaaziremon@gmail.com
            </span>
          </p>
          <p>
            {" "}
            <span className=" font-bold text-gray-300 font-serif w-[150px]  inline-block">
              ADDRESS:
            </span>{" "}
            <span className=" font-normal text-white font-mono ">
              Jashore, Khulna,Bangladesh
            </span>
          </p>
          <div className="flex gap-6 mt-3">
            <a href="">
              <img className=" w-6" src={github} alt="" />
            </a>
            <a href="">
              <img className=" w-6" src={twitter} alt="" />
            </a>
            <a href="">
              <img className=" w-6" src={linkedin} alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className=" mt-20 w-[90%] mx-auto">
        <p className=" text-5xl text-gray-300 mb-12 font-mono">Hello_</p>
        <p className=" text-lg text-gray-300">
          I am a Junior frontend, React JS developer who able to build a Web
          Application from the ground up - from concept, navigation, layout.
          Skilled at writing well-designed, testable and efficient code using
          current best practices in Web development. Fast learner, hard worker
          and team player whose aim in last 1 year, to build a lot of web
          Applications using React JS. I wanna join a software company as a
          Junior frontend web developer and make theme amazed by showing my Hard
          working , Fast learn specialty. I wanna work from home in a western
          country.{" "}
        </p>
        <button className=" bg-[#DF1F2D] px-6 py-2 rounded-full my-6 text-white ">
          Get Resume <FontAwesomeIcon icon={faDownload} />
        </button>
      </div>
    </div>
  );
};

export default Portfolio;
