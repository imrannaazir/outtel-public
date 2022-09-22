import React from "react";

const Category = ({ category: { name, img, id } }) => {
  return (
    <div className=" w-96 bg-gradient-to-r from-primary to-secondary shadow-xl flex justify-between items-center rounded-2xl p-4 text-base-100">
      <p className="text-3xl">{name}</p>
      <img className="w-24" src={img} alt="" />
    </div>
  );
};

export default Category;
