import React from "react";
import quote from "../../assets/icons/quote.svg";
const Review = () => {
  return (
    <div class="card w-[350px] bg-base-100 shadow-xl">
      <div className="w-16 mt-4 ml-4">
        <img src={quote} alt="" />
      </div>

      <p className=" mx-12 font-thin text-lg mt-4 text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt omnis
        corrupti facilis enim qui consequuntur nulla fuga soluta molestiae
        expedita fugiat, laudantium consequatur itaque beatae atque cumque
        eaque, iusto dolores?
      </p>

      <div className="mx-12 flex items-center my-8">
        <div class="avatar">
          <div class="w-16 h-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="https://api.lorem.space/image/face?hash=3174" alt="" />
          </div>
          <div className="ml-4 pt-2">
            <p className="text-xl text-primary">Full Name</p>
            <p>Our Customer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
