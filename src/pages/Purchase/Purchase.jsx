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
        `https://historic-cuyahoga-valley-56137.herokuapp.com/parts/${id.id}`
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
    const newOrder = {
      ...data,
      part: name,
      image: image,
      price: data?.quantity * price,
      name: user?.displayName,
      email: user.email,
    };

    (async function () {
      const { data } = await axios.post(
        "https://historic-cuyahoga-valley-56137.herokuapp.com/orders",
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
          className="hero min-h-[200px]"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="hero-overlay bg-primary bg-opacity-60"></div>
        </div>

        <div className="grid lg:grid-cols-2 justify-items-center my-10 w-[80%] mx-auto pb-6">
          <div className="flex justify-center items-center">
            <img src={image} className="w-full rounded-lg " alt="" />
          </div>

          <div>
            <h1 className="text-5xl font-bold">{name}</h1>
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
            <p className="mt-6">{description}</p>

            <form onSubmit={handleSubmit(onSubmit)} className="">
              {/* name field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  type="text"
                  value={user?.displayName}
                  readOnly
                  className="input input-bordered "
                />
              </div>
              {/* email field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your email</span>
                </label>
                <input
                  type="text"
                  value={user?.email}
                  readOnly
                  className="input input-bordered "
                />
              </div>

              {/* address field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Address</span>
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
                  className="input input-bordered "
                />
                <label className="label">
                  {errors.address?.type === "required" && (
                    <span className="label-text-alt text-error">
                      {errors.address.message}
                    </span>
                  )}
                </label>
              </div>
              {/*  field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone</span>
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
                  className="input input-bordered "
                />
                <label className="label">
                  {errors.phone?.type === "required" && (
                    <span className="label-text-alt text-error">
                      {errors.phone.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control">
                <label className="input-group">
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
                    className="input input-bordered"
                  />
                </label>
                <label className="label">
                  {errors.quantity?.type === "required" && (
                    <span className="label-text-alt text-error">
                      {errors.quantity.message}
                    </span>
                  )}
                  {errors.quantity?.type === "max" && (
                    <span className="label-text-alt text-error">
                      {errors.quantity.message}
                    </span>
                  )}
                  {errors.quantity?.type === "min" && (
                    <span className="label-text-alt text-error">
                      {errors.quantity.message}
                    </span>
                  )}
                </label>
              </div>

              <div className="form-control mt-6">
                <button
                  disabled={disabled && "true"}
                  className="btn btn-primary"
                >
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
