import { faBagShopping, faWarehouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

const Purchase = () => {
  const id = useParams();
  console.log(id);
  // load a parts
  const [part, setPart] = useState({});
  const { _id, name, description, quantity, min_quantity, price, image } = part;
  useEffect(() => {
    (async function () {
      const { data } = await axios.get(`http://localhost:5000/parts/${id.id}`);
      setPart(data[0]);
    })();
  }, [id]);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: onchange });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div class="hero bg-base-200 border-2 mt-16">
      <div class="grid lg:grid-cols-2 justify-items-center my-10 w-[80%] mx-auto">
        <div className="flex justify-center items-center">
          <img src={image} class="max-w-sm rounded-lg shadow-2xl" alt="" />
        </div>

        <div>
          <h1 class="text-5xl font-bold">{name}</h1>
          <p className="flex gap-6">
            <span>
              <FontAwesomeIcon icon={faWarehouse} /> Available : {quantity}
            </span>
            <span>
              <FontAwesomeIcon icon={faBagShopping} /> Order minimum :{" "}
              {min_quantity}
            </span>
            <span>Price : ${price}</span>
          </p>
          <p class="mt-6">{description}</p>

          <form onSubmit={handleSubmit(onSubmit)} class="c">
            {/* name field */}
            <div class="form-control">
              <label class="label">
                <span class="label-text">Your Name</span>
              </label>
              <input
                type="text"
                value="Your name"
                readOnly
                class="input input-bordered "
              />
            </div>
            {/* email field */}
            <div class="form-control">
              <label class="label">
                <span class="label-text">Your email</span>
              </label>
              <input
                type="text"
                value="Your@email.com"
                readOnly
                class="input input-bordered "
              />
            </div>

            {/* address field */}
            <div class="form-control">
              <label class="label">
                <span class="label-text">Address</span>
              </label>
              <input
                {...register("address", {
                  required: {
                    value: true,
                    message: "address is required",
                  },
                })}
                type="text"
                placeholder="Enter your current address"
                class="input input-bordered "
              />
              <label class="label">
                {errors.address?.type === "required" && (
                  <span class="label-text-alt text-error">
                    {errors.address.message}
                  </span>
                )}
              </label>
            </div>
            {/*  field */}
            <div class="form-control">
              <label class="label">
                <span class="label-text">Phone</span>
              </label>
              <input
                {...register("phone", {
                  required: {
                    value: true,
                    message: "phone is required",
                  },
                })}
                type="text"
                placeholder="Enter phone number"
                class="input input-bordered "
              />
              <label class="label">
                {errors.phone?.type === "required" && (
                  <span class="label-text-alt text-error">
                    {errors.phone.message}
                  </span>
                )}
              </label>
            </div>
            <div class="form-control">
              <label class="input-group">
                <span>Quantity</span>
                <input
                  {...register("quantity", {
                    required: {
                      value: true,
                      message: "quantity is required",
                    },
                  })}
                  type="number"
                  min="150"
                  placeholder="150"
                  max="160"
                  class="input input-bordered"
                />
              </label>
              <label class="label">
                {errors.phone?.type === "required" && (
                  <span class="label-text-alt text-error">
                    {errors.quantity.message}
                  </span>
                )}
              </label>
            </div>

            <div class="form-control mt-6">
              <button class="btn btn-primary">Place Order</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
