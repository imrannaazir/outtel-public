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
  console.log(userDb);

  /// get api for user
  useEffect(() => {
    (async function () {
      const { data } = await axios.get(
        `http://localhost:5000/users/${user?.email}`
      );
      setUserDb(data);
    })();
  }, [user?.email]);

  console.log(user.photoURL);
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
        console.log(imageLink);
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

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ mode: onchange });

  // loading
  if (loading) return <Loading />;

  const onSubmit = (data) => {
    console.log(data);
    const updatedUser = {
      ...data,
      name: user?.displayName,
      email: user?.email,
      photoURL: user?.photoURL || imageURL || userDb?.image,
    };
    console.log(updatedUser);
    (async function () {
      const { data } = await axios.patch(
        `http://localhost:5000/update-users/${user?.email},`,
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

    <div class="bg-base-100 w-[80%] mx-auto my-12 p-8">
      <p className=" text-2xl">Update Your Profile</p>
      <div class="w-full flex">
        <div class="p-8 mx-2 flex flex-col gap-4">
          <p>Profile Photo</p>
          <img
            id="showImage"
            class="max-w-xs w-32 items-center border"
            src={user?.photoURL || userDb?.photoURL || userIMG}
            alt=""
          />
          {/* product img */}
          <div class="form-control w-[65%]">
            <label class="label">
              <span class="label-text">Part Image</span>
            </label>
            <input type="file" class="" onChange={handleImageUpload} />
          </div>
        </div>
      </div>

      {/* account information */}
      <form onSubmit={handleSubmit(onSubmit)} class="flex flex-col gap-4">
        {/* name field */}
        <div className="form-control">
          <label class="input-group">
            <span className=" w-[110px] bg-white">Your Name :</span>
            <input
              type="text"
              value={user?.displayName}
              disabled
              class="input input-bordered"
            />
          </label>
        </div>
        {/* email field */}
        <div className="form-control">
          <label class="input-group">
            <span className=" w-[110px] bg-white">Your Email :</span>
            <input
              type="text"
              value={user?.email}
              disabled
              class="input input-bordered"
            />
          </label>
        </div>
        {/* phone num field */}
        <div className="form-control">
          <label class="input-group">
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
              class="input input-bordered"
            />
          </label>
          <label class="label">
            {errors.phone?.type === "required" && (
              <span class="label-text-alt text-error">
                {errors.phone.message}
              </span>
            )}
          </label>
        </div>

        {/* location field */}
        <div className="form-control">
          <label class="input-group">
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
              class="input input-bordered"
            />
          </label>
          <label class="label">
            {errors.location?.type === "required" && (
              <span class="label-text-alt text-error">
                {errors.location.message}
              </span>
            )}
          </label>
        </div>

        {/* education field */}
        <div className="form-control">
          <label class="input-group">
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
              class="input input-bordered"
            />
          </label>
          <label class="label">
            {errors.education?.type === "required" && (
              <span class="label-text-alt text-error">
                {errors.education.message}
              </span>
            )}
          </label>
        </div>
        {/* linkedin field */}
        <div className="form-control">
          <label class="input-group">
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
              class="input input-bordered"
            />
          </label>
          <label class="label">
            {errors.linkedin?.type === "required" && (
              <span class="label-text-alt text-error">
                {errors.linkedin.message}
              </span>
            )}
          </label>
        </div>
        {/* btn */}
        <div className="form-control">
          <label class="input-group">
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
