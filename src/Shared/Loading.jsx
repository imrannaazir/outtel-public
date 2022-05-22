import React from "react";
import loadingIMG from "../assets/images/loading.gif";
const Loading = () => {
  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-white">
      <img className="w-80" src={loadingIMG} alt="Loading" />
    </div>
  );
};

export default Loading;
