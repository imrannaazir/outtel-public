import { faBagShopping, faWarehouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Part = ({
  i,
  part: { image, quantity, min_quantity, name, description, price },
}) => {
  return (
    <div class="hero bg-base-200 border-2">
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

          <button class="btn btn-primary mt-4">purchase</button>
        </div>
      </div>
    </div>
  );
};

export default Part;
