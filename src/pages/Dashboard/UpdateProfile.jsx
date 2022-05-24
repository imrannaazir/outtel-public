import React from "react";
import { useForm } from "react-hook-form";
import userIMG from "../../assets/images/user.jpg";

const UpdateProfile = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: onchange });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    // <!-- component -->
    // <!-- This is an example component -->

    <div class="bg-base-100 w-[80%] mx-auto mt-12">
      <p>Your Profile</p>
      <div class="w-full flex p-4shadow-md">
        <div class="p-8 mx-2 flex flex-col">
          <p>Your Photo</p>
          <img
            id="showImage"
            class="max-w-xs w-32 items-center border"
            src={userIMG}
            alt=""
          />
          <button className="btn btn-primary">Update </button>
        </div>
      </div>

      {/* account information */}
      <form onSubmit={handleSubmit(onSubmit)} class="c">
        {/* name field */}
        <div className="form-control">
          <label class="input-group">
            <span className=" w-[110px] bg-white">Your Name :</span>
            <input
              type="text"
              value="info@gmail.com"
              readOnly
              class="input input-bordered"
            />
          </label>
        </div>
        {/* name field */}
        <div className="form-control">
          <label class="input-group">
            <span className=" w-[110px] bg-white">Your Email :</span>
            <input
              type="text"
              placeholder="info@site.com"
              class="input input-bordered"
            />
          </label>
        </div>
        {/* name field */}
        <div className="form-control">
          <label class="input-group">
            <span className=" w-[110px] bg-white">Location :</span>
            <input
              type="text"
              placeholder="info@site.com"
              class="input input-bordered"
            />
          </label>
        </div>
        {/* name field */}
        <div className="form-control">
          <label class="input-group">
            <span className=" w-[110px] bg-white">Education :</span>
            <input
              type="text"
              placeholder="info@site.com"
              class="input input-bordered"
            />
          </label>
        </div>
        {/* name field */}
        <div className="form-control">
          <label class="input-group">
            <span className=" w-[110px] bg-white">LinkedIn :</span>
            <input
              type="text"
              placeholder="info@site.com"
              class="input input-bordered"
            />
          </label>
        </div>
        {/* btn */}
        <div className="form-control">
          <label class="input-group">
            <span className=" w-[110px] bg-white"></span>
            <button className="btn btn-primary rounded-none">
              Update Info
            </button>
          </label>
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;
