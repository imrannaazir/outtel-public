import {
  faArrowRight,
  faBagShopping,
  faWarehouse,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";

const Part = ({
  i,
  part: { image, quantity, min_quantity, name, description, price, _id },
}) => {
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
    /*  <div class="hero bg-base-200 border-2">
      <div class="grid lg:grid-cols-2 justify-items-center my-10 w-[80%] mx-auto">
        <div className={i % 2 === 0 ? "order-1" : "order-2"}>
          <img src={image} class="max-w-sm rounded-lg shadow-2xl" alt="" />
        </div>

        <div
          className={`${
            i % 2 === 0 ? "order-2 items-start" : "order-1 items-end text-right"
          } flex flex-col justify-center`}
        >
          <h1 class="text-5xl font-bold">{name}</h1>
          <p className="flex gap-6">
            <span>
              <FontAwesomeIcon icon={faWarehouse} /> Available : {quantity}
            </span>
            <span>
              <FontAwesomeIcon icon={faBagShopping} /> Order minimum :{" "}
              {min_quantity}
            </span>
          </p>
          <p class="my-6">{description}</p>
          <p className="">
            <span className="text-5xl">${price}</span>
            <span>/1</span>
          </p>

          <button
            onClick={() => navigate(`/purchase/${_id}`)}
            class="btn btn-primary mt-4"
          >
            purchase
          </button>
        </div>
      </div>
    </div> */
  );
};

export default Part;
