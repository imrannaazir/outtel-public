import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";

const Part = ({ part: { image, name, description, price, _id } }) => {
  const navigate = useNavigate();
  return (
    <div
      // data-aos="zoom-in"
      className="group card w-96 bg-base-100 shadow-primary hover:shadow-primary shadow-md hover:shadow-lg "
    >
      <figure>
        <img
          src={image}
          className="w-[70%] h-64 pt-4 group-hover:scale-110 duration-200"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <div className="badge badge-secondary">NEW</div>
        <h2 className="card-title">{name}</h2>
        <p>{description.slice(0, 90)}..</p>
        <div className="flex gap-2 text-xl">
          <span className="text-success">${price}</span>
          <span className="line-through text-error">
            ${parseInt(price) + 103}
          </span>
        </div>
        <div className="card-actions justify-end">
          <button
            onClick={() => navigate(`/purchase/${_id}`)}
            className="btn btn-primary btn-outline btn-sm flex justify-center items-center gap-1"
          >
            buy now <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Part;
