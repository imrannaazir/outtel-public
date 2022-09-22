import { faCalendarAlt, faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Blog = ({ blog: { title, blog, id, img, author } }) => {
  return (
    <div className="card card-side bg-base-100 shadow-xl mb-10">
      <div className="card-body">
        {/* blog */}
        <div className="lg:flex gap-6">
          {/* image and author */}
          <div
            className={`lg:w-[30%] ${
              id % 2 === 0 ? "lg:order-2" : "lg:-order-2"
            } flex flex-col justify-between`}
          >
            <img className="rounded-lg" src={img} alt="" />
            <div className="flex px-2 justify-between mt-4">
              <span>
                <FontAwesomeIcon icon={faPen} /> {author}
              </span>
              <span className="">
                <FontAwesomeIcon icon={faCalendarAlt} /> 12 April 2022
              </span>
            </div>
          </div>

          <div className="lg:w-[70%] flex flex-col justify-center border-t bottom-2 pt-4 border-primary">
            <p className="text-2xl ">{title}</p>
            <p className="">
              {blog}
              <Link
                to="https://www.programming-hero.com/blog/"
                className="link link-primary"
              >
                ..see more
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
