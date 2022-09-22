import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import quote from "../../assets/icons/quote.svg";
import userIMG from "../../assets/images/user.jpg";
const Review = (review) => {
  return (
    <div className="card lg:w-[450px] bg-base-100 shadow-xl">
      <div className="w-16 mt-4 ml-4">
        <img src={quote} alt="" />
      </div>

      <p className=" mx-12 font-thin text-lg mt-4 text-gray-600">
        {review?.review?.feedback}
      </p>

      <div className="mx-12 flex items-center my-8">
        <div className="avatar">
          <div className="w-16 h-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={review?.review?.image || userIMG} alt="" />
          </div>
          <div className="ml-4 pt-2">
            <p className="text-xl text-primary">{review?.review?.name}</p>
            <div>
              {review?.review?.ratting == 1 && (
                <div>
                  <FontAwesomeIcon className="text-orange-500" icon={faStar} />
                  <FontAwesomeIcon className="text-gray-500" icon={faStar} />
                  <FontAwesomeIcon className="text-gray-500" icon={faStar} />
                  <FontAwesomeIcon className="text-gray-500" icon={faStar} />
                  <FontAwesomeIcon className="text-gray-500" icon={faStar} />
                </div>
              )}

              {review?.review?.ratting == 2 && (
                <div>
                  <FontAwesomeIcon className="text-orange-500" icon={faStar} />
                  <FontAwesomeIcon className="text-orange-500" icon={faStar} />
                  <FontAwesomeIcon className="text-gray-500" icon={faStar} />
                  <FontAwesomeIcon className="text-gray-500" icon={faStar} />
                  <FontAwesomeIcon className="text-gray-500" icon={faStar} />
                </div>
              )}

              {review?.review?.ratting == 3 && (
                <div>
                  <FontAwesomeIcon className="text-orange-500" icon={faStar} />
                  <FontAwesomeIcon className="text-orange-500" icon={faStar} />
                  <FontAwesomeIcon className="text-orange-500" icon={faStar} />
                  <FontAwesomeIcon className="text-gray-500" icon={faStar} />
                  <FontAwesomeIcon className="text-gray-500" icon={faStar} />
                </div>
              )}
              {review?.review?.ratting == 4 && (
                <div>
                  <FontAwesomeIcon className="text-orange-500" icon={faStar} />
                  <FontAwesomeIcon className="text-orange-500" icon={faStar} />
                  <FontAwesomeIcon className="text-orange-500" icon={faStar} />
                  <FontAwesomeIcon className="text-orange-500" icon={faStar} />
                  <FontAwesomeIcon className="text-gray-500" icon={faStar} />
                </div>
              )}

              {review?.review?.ratting == 5 && (
                <div>
                  <FontAwesomeIcon className="text-orange-500" icon={faStar} />
                  <FontAwesomeIcon className="text-orange-500" icon={faStar} />
                  <FontAwesomeIcon className="text-orange-500" icon={faStar} />
                  <FontAwesomeIcon className="text-orange-500" icon={faStar} />
                  <FontAwesomeIcon className="text-orange-500" icon={faStar} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
