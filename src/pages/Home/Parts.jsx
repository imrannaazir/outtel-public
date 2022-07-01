import axios from "axios";
import React from "react";
import Loading from "../../Shared/Loading";
import { useQuery } from "react-query";
import toast from "react-hot-toast";
import Part from "./Part";

const Parts = () => {
  const { isLoading, error, data } = useQuery("partsData", () =>
    axios
      .get("https://rocky-waters-98626.herokuapp.com/parts")
      .then((res) => res.data)
  );
  const parts = data?.slice(0, 6);
  console.log(parts);
  //is loading
  if (isLoading) return <Loading />;
  //is any error
  if (error) return toast.error(error.message);
  return (
    <div>
      <p className="text-3xl text-center font-semibold my-6">New Araivals</p>
      <div id="parts" className="flex justify-center gap-6 flex-wrap">
        {parts.map((part, i) => (
          <Part key={i} i={i} part={part} />
        ))}
      </div>
    </div>
  );
};

export default Parts;
