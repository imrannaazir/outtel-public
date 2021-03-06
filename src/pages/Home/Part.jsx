import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";

const Part = ({ part: { image, name, description, price, _id } }) => {
  const navigate = useNavigate();
  return (
    <div class="group card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          className="w-full h-80 group-hover:scale-110 duration-200"
          alt="Shoes"
        />
      </figure>
      <div class="card-body">
        <div class="badge badge-secondary">NEW</div>
        <h2 class="card-title">{name}</h2>
        <p>{description.slice(0, 90)}..</p>
        <div className="flex gap-2 text-xl">
          <span className="text-success">${price}</span>
          <span className="line-through text-error">
            ${parseInt(price) + 103}
          </span>
        </div>
        <div class="card-actions justify-end">
          <button
            onClick={() => navigate(`/purchase/${_id}`)}
            class="btn btn-primary btn-outline btn-sm flex justify-center items-center gap-1"
          >
            buy now <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Part;
