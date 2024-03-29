import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Loading from "../../Shared/Loading";
const AddParts = () => {
  const [imageURL, setImageURL] = useState("");
  console.log(imageURL);
  const [loading, setLoading] = useState(false);

  //handle img
  const handleImageUpload = (e) => {
    setLoading(true);
    const image = e.target.files[0];
    const formData = new FormData();

    formData.set("key", "bc4e13960b983e1fcc8bbf696232d413");
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
        "https://outtel-backend.onrender.com/parts",
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
    <div className="w-full min-h-screen bg-base-100">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body to-base-100">
        {/* product name */}
        <div className="form-control lg:w-[50%]">
          <label className="label">
            <span className="label-text">Product Name</span>
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
            className="input input-bordered w-full "
          />
          <label className="label">
            {errors.name?.type === "required" && (
              <span className="label-text-alt text-error">
                {errors.name.message}
              </span>
            )}
          </label>
        </div>
        {/* product description */}
        <div className="form-control lg:w-[50%]">
          <label className="label">
            <span className="label-text">Product Description</span>
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
            className="input input-bordered w-full h-48 pt-2 "
          />
          <label className="label">
            {errors.description?.type === "required" && (
              <span className="label-text-alt text-error">
                {errors.description.message}
              </span>
            )}
          </label>
        </div>
        {/* product description */}
        <div className="form-control lg:w-[50%]">
          <label className="label">
            <span className="label-text">Category</span>
          </label>
          <input
            {...register("category", {
              required: {
                value: true,
                message: "Category is required",
              },
            })}
            type="text"
            placeholder="Enter product description"
            className="input input-bordered w-full  "
          />
          <label className="label">
            {errors.category?.type === "required" && (
              <span className="label-text-alt text-error">
                {errors.category.message}
              </span>
            )}
          </label>
        </div>

        <div className="form-control lg:w-[50%] ">
          <label className="label">
            <span className="label-text">Minimum Quantity</span>
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
            className="input input-bordered w-full "
          />
          <label className="label">
            {errors.min_quantity?.type === "required" && (
              <span className="label-text-alt text-error">
                {errors.min_quantity.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control lg:w-[50%] ">
          <label className="label">
            <span className="label-text">Available Quantity</span>
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
            className="input input-bordered w-full "
          />
          <label className="label">
            {errors.quantity?.type === "required" && (
              <span className="label-text-alt text-error">
                {errors.quantity.message}
              </span>
            )}
          </label>
        </div>

        <div className="form-control lg:w-[50%] ">
          <label className="label">
            <span className="label-text">Price</span>
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
            className="input input-bordered w-full "
          />
          <label className="label">
            {errors.price?.type === "required" && (
              <span className="label-text-alt text-error">
                {errors.price.message}
              </span>
            )}
          </label>
        </div>

        <div className="form-control lg:w-[50%] w-[65%]">
          <label className="label">
            <span className="label-text">Part Image</span>
          </label>
          <input type="file" className="" onChange={handleImageUpload} />
        </div>

        <div className="form-control lg:w-[50%] mt-6 ">
          <button type="submit" className="btn btn-primary">
            Add New
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddParts;
