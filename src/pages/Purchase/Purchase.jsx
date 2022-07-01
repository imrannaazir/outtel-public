import { faBagShopping, faWarehouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { auth } from "../../firebase.init";
import Loading from "../../Shared/Loading";
import Navbar from "../../Shared/Navbar";

const Purchase = () => {
  const [user, loading] = useAuthState(auth);

  //disabled
  const [disabled, setDisabled] = useState(true);

  //useParams
  const id = useParams();

  // load a parts
  const [part, setPart] = useState({});
  const { name, description, quantity, min_quantity, price, image } = part;

  /// get selected data to purchase

  useEffect(() => {
    (async function () {
      const { data } = await axios.get(
        `https://rocky-waters-98626.herokuapp.com/parts/${id.id}`
      );
      setPart(data[0]);
    })();
  }, [id]);

  // hook form
  const {
    register,
    watch,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: onchange });

  // handle order
  const onSubmit = (data) => {
    console.log(data);
    const newOrder = {
      ...data,
      part: name,
      image: image,
      price: data?.quantity * price,
      name: user?.displayName,
      email: user.email,
    };
    console.log(newOrder);
    (async function () {
      const { data } = await axios.post(
        "https://rocky-waters-98626.herokuapp.com/orders",
        newOrder
      );
      console.log(data);
      toast.success("Successfully added new order!");
    })();
    //reset field
    reset();
  };

  // quantity watch
  const inputQuantity = watch("quantity");

  //validate
  useEffect(() => {
    if (
      parseInt(min_quantity) <= parseInt(inputQuantity) &&
      parseInt(quantity) >= parseInt(inputQuantity)
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [inputQuantity, min_quantity, quantity]);

  //loading
  if (loading) return <Loading />;

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-base-100">
        <div
          class="hero min-h-[200px]"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div class="hero-overlay bg-primary bg-opacity-60"></div>
        </div>

        <div class="grid lg:grid-cols-2 justify-items-center my-10 w-[80%] mx-auto pb-6">
          <div className="flex justify-center items-center">
            <img src={image} class="w-full rounded-lg " alt="" />
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

            <form onSubmit={handleSubmit(onSubmit)} class="">
              {/* name field */}
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Your Name</span>
                </label>
                <input
                  type="text"
                  value={user?.displayName}
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
                  value={user?.email}
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
                      min: {
                        value: min_quantity,
                        message: `we are shipped at least ${min_quantity}`,
                      },
                      max: {
                        value: quantity,
                        message: `not available! available in stock ${quantity}`,
                      },
                    })}
                    type="number"
                    min="0"
                    placeholder={`${min_quantity}-${quantity}`}
                    // max="160"
                    class="input input-bordered"
                  />
                </label>
                <label class="label">
                  {errors.quantity?.type === "required" && (
                    <span class="label-text-alt text-error">
                      {errors.quantity.message}
                    </span>
                  )}
                  {errors.quantity?.type === "max" && (
                    <span class="label-text-alt text-error">
                      {errors.quantity.message}
                    </span>
                  )}
                  {errors.quantity?.type === "min" && (
                    <span class="label-text-alt text-error">
                      {errors.quantity.message}
                    </span>
                  )}
                </label>
              </div>

              <div class="form-control mt-6">
                <button disabled={disabled && "true"} class="btn btn-primary">
                  Place Order
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
