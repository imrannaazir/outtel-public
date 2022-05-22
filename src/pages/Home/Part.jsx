import { faBagShopping, faWarehouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Part = ({ i }) => {
  return (
    <div class="hero bg-base-200 border-2">
      <div class="grid lg:grid-cols-2 justify-items-center my-10 w-[80%] mx-auto">
        <div className={i % 2 === 0 ? "order-1" : "order-2"}>
          <img
            src="https://api.lorem.space/image/movie?w=260&h=400"
            class="max-w-sm rounded-lg shadow-2xl"
            alt=""
          />
        </div>

        <div
          className={`${
            i % 2 === 0 ? "order-2 items-start" : "order-1 items-end text-right"
          } flex flex-col justify-center`}
        >
          <h1 class="text-5xl font-bold">Box Office News!</h1>
          <p className="flex gap-6">
            <span>
              <FontAwesomeIcon icon={faWarehouse} /> Available : 150
            </span>
            <span>
              <FontAwesomeIcon icon={faBagShopping} /> Order minimum : 15
            </span>
          </p>
          <p class="my-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <p className="">
            <span className="text-5xl">$5</span>
            <span>/1</span>
          </p>
          <form class="form-control my-4">
            <label class="input-group">
              <span>Quantity</span>
              <input
                type="number"
                min="150"
                placeholder="150"
                max="160"
                class="input input-bordered"
              />
            </label>
            <button class="btn btn-primary mt-4">purchase</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Part;
