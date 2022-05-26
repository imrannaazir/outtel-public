import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import add from "../../assets/images/add.png";
import Loading from "../../Shared/Loading";
const AddParts = () => {
  const [imageURL, setImageURL] = useState("");
  const [loading, setLoading] = useState(false);

  //handle img
  const handleImageUpload = (e) => {
    setLoading(true);
    const image = e.target.files[0];
    const formData = new FormData();

    formData.set("key", "bc4e13960b983e1fcc8bbf.696232d413");
    formData.set("image", image);

    //upload image to image bb
    axios
      .post("https://api.imgbb.com/1/upload", formData)
      .then(function (response) {
        const imageLink = response.data.data.display_url;
        setImageURL(imageLink);
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  //form element
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ mode: onchange });

  //handle form
  const onSubmit = (data) => {
    const partData = {
      ...data,
      image: imageURL,
    };
    // post data to db
    (async function () {
      const { data } = await axios.post(
        "http://localhost:5000/parts",
        partData
      );
      console.log(data);
      toast.success("Successfully added new part!");
    })();
    //reset field
    reset();
  };
  if (loading) return <Loading />;
  return (
    <div class="flex justify-center items-center bg-base-200">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img src={add} class="hidden lg:block" alt="login" />

        <div class="card flex-shrink-0 w-full lg:max-w-sm shadow-2xl bg-base-100">
          {/* form */}
          <form onSubmit={handleSubmit(onSubmit)} class="card-body">
            {/* Product name field */}
            <div class="form-control">
              <label class="label">
                <span class="label-text">Product Name</span>
              </label>
              <input
                {...register("name", {
                  required: {
                    value: true,
                    message: "Product name is required",
                  },
                })}
                type="text"
                placeholder="Enter product name"
                class="input input-bordered w-full max-w-xs"
              />
              <label class="label">
                {errors.name?.type === "required" && (
                  <span class="label-text-alt text-error">
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>

            {/* Product des field */}
            <div class="form-control">
              <label class="label">
                <span class="label-text">Product Description</span>
              </label>
              <textarea
                {...register("description", {
                  required: {
                    value: true,
                    message: "Product description is required",
                  },
                })}
                type="text"
                placeholder="Enter product description"
                class="input input-bordered w-full h-16 max-w-xs"
              />
              <label class="label">
                {errors.description?.type === "required" && (
                  <span class="label-text-alt text-error">
                    {errors.description.message}
                  </span>
                )}
              </label>
            </div>

            {/* quantity */}

            <div className="flex justify-between">
              {/*min quantity */}
              <div class="form-control w-[40%]">
                <label class="label">
                  <span class="label-text">Minimum Quantity</span>
                </label>
                <input
                  {...register("min_quantity", {
                    required: {
                      value: true,
                      message: "This field is required",
                    },
                  })}
                  min="1"
                  type="number"
                  placeholder="Min quantity"
                  class="input input-bordered w-full max-w-xs"
                />
                <label class="label">
                  {errors.min_quantity?.type === "required" && (
                    <span class="label-text-alt text-error">
                      {errors.min_quantity.message}
                    </span>
                  )}
                </label>
              </div>
              {/* quantity */}
              <div class="form-control w-[40%]">
                <label class="label">
                  <span class="label-text">Available Quantity</span>
                </label>
                <input
                  {...register("quantity", {
                    required: {
                      value: true,
                      message: "This field is required",
                    },
                  })}
                  min="1"
                  type="number"
                  placeholder="Quantity"
                  class="input input-bordered w-full max-w-xs"
                />
                <label class="label">
                  {errors.quantity?.type === "required" && (
                    <span class="label-text-alt text-error">
                      {errors.quantity.message}
                    </span>
                  )}
                </label>
              </div>
            </div>

            {/* price and image */}

            <div className="flex justify-between">
              {/* price */}
              <div class="form-control w-[30%]">
                <label class="label">
                  <span class="label-text">Price</span>
                </label>
                <input
                  {...register("price", {
                    required: {
                      value: true,
                      message: "Price is required",
                    },
                  })}
                  min="1"
                  type="number"
                  placeholder="price"
                  class="input input-bordered w-full max-w-xs"
                />
                <label class="label">
                  {errors.price?.type === "required" && (
                    <span class="label-text-alt text-error">
                      {errors.price.message}
                    </span>
                  )}
                </label>
              </div>

              {/* product img */}
              <div class="form-control w-[65%]">
                <label class="label">
                  <span class="label-text">Part Image</span>
                </label>
                <input type="file" class="" onChange={handleImageUpload} />
              </div>
            </div>

            <div class="form-control mt-6">
              <button type="submit" class="btn btn-primary">
                Add New
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddParts;
