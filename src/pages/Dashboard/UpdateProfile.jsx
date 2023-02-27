import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import userIMG from "../../assets/images/user.jpg";
import { auth } from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import axios from "axios";
import Loading from "../../Shared/Loading";
import toast from "react-hot-toast";

const UpdateProfile = () => {
  const [user] = useAuthState(auth);
  // user in db
  const [userDb, setUserDb] = useState({});

  /// get api for user
  useEffect(() => {
    (async function () {
      const { data } = await axios.get(
        `https://outtel-backend.onrender.com/users/${user?.email}`
      );
      setUserDb(data);
    })();
  }, [user?.email]);

  const [imageURL, setImageURL] = useState("");
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
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ mode: onchange });

  // loading
  if (loading) return <Loading />;

  const onSubmit = (data) => {
    const updatedUser = {
      ...data,
      name: user?.displayName,
      email: user?.email,
      photoURL: user?.photoURL || imageURL || userDb?.image,
    };

    (async function () {
      const { data } = await axios.put(
        `https://outtel-backend.onrender.com/update-users/${user?.email},`,
        updatedUser
      );
      console.log(data);
      reset();
      toast.success("Successfully Updated profile!");
    })();
  };
  return (
    // <!-- component -->
    // <!-- This is an example component -->

    <div className="bg-base-100 w-[80%] mx-auto my-12 p-8">
      <p className=" text-2xl">Update Your Profile</p>
      <div className="w-full flex">
        <div className="p-8 mx-2 flex flex-col gap-4">
          <p>Profile Photo</p>
          <img
            id="showImage"
            className="max-w-xs w-32 items-center border"
            src={user?.photoURL || userDb?.photoURL || userIMG}
            alt=""
          />
          {/* product img */}
          <div className="form-control w-[65%]">
            <label className="label">
              <span className="label-text">Part Image</span>
            </label>
            <input type="file" className="" onChange={handleImageUpload} />
          </div>
        </div>
      </div>

      {/* account information */}
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        {/* name field */}
        <div className="form-control">
          <label className="input-group">
            <span className=" w-[110px] bg-white">Your Name :</span>
            <input
              type="text"
              value={user?.displayName}
              disabled
              className="input input-bordered"
            />
          </label>
        </div>
        {/* email field */}
        <div className="form-control">
          <label className="input-group">
            <span className=" w-[110px] bg-white">Your Email :</span>
            <input
              type="text"
              value={user?.email}
              disabled
              className="input input-bordered"
            />
          </label>
        </div>
        {/* phone num field */}
        <div className="form-control">
          <label className="input-group">
            <span className=" w-[110px] bg-white">Phone :</span>
            <input
              {...register("phone", {
                required: {
                  value: true,
                  message: "phone is required",
                },
              })}
              type="text"
              placeholder={userDb?.phone || "update your phone number"}
              className="input input-bordered"
            />
          </label>
          <label className="label">
            {errors.phone?.type === "required" && (
              <span className="label-text-alt text-error">
                {errors.phone.message}
              </span>
            )}
          </label>
        </div>

        {/* location field */}
        <div className="form-control">
          <label className="input-group">
            <span className=" w-[110px] bg-white">Location :</span>
            <input
              {...register("location", {
                required: {
                  value: true,
                  message: "location is required",
                },
              })}
              type="text"
              placeholder={userDb?.location || "update your location"}
              className="input input-bordered"
            />
          </label>
          <label className="label">
            {errors.location?.type === "required" && (
              <span className="label-text-alt text-error">
                {errors.location.message}
              </span>
            )}
          </label>
        </div>

        {/* education field */}
        <div className="form-control">
          <label className="input-group">
            <span className=" w-[110px] bg-white">Education :</span>
            <input
              {...register("education", {
                required: {
                  value: true,
                  message: "education is required",
                },
              })}
              type="text"
              placeholder={userDb?.education || "where was you reading"}
              className="input input-bordered"
            />
          </label>
          <label className="label">
            {errors.education?.type === "required" && (
              <span className="label-text-alt text-error">
                {errors.education.message}
              </span>
            )}
          </label>
        </div>
        {/* linkedin field */}
        <div className="form-control">
          <label className="input-group">
            <span className=" w-[110px] bg-white">LinkedIn :</span>
            <input
              {...register("linkedin", {
                required: {
                  value: true,
                  message: "linkedin is required",
                },
              })}
              type="text"
              placeholder={userDb?.linkedin || "linkedin.com/in/username"}
              className="input input-bordered"
            />
          </label>
          <label className="label">
            {errors.linkedin?.type === "required" && (
              <span className="label-text-alt text-error">
                {errors.linkedin.message}
              </span>
            )}
          </label>
        </div>
        {/* btn */}
        <div className="form-control">
          <label className="input-group">
            <span className=" w-[110px] bg-white"></span>
            <button type="submit" className="btn btn-primary rounded-none">
              Update Info
            </button>
          </label>
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;
