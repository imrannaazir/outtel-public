import axios from "axios";
import React from "react";
import Loading from "../../Shared/Loading";
import { useQuery } from "react-query";
import toast from "react-hot-toast";
import Part from "./Part";
import Heading from "./Heading";

const Parts = () => {
  const { isLoading, error, data } = useQuery("partsData", () =>
    axios
      .get("https://historic-cuyahoga-valley-56137.herokuapp.com/parts")
      .then((res) => res.data)
  );
  const parts = data?.slice(0, 6);
  console.log(parts);
  //is loading
  if (isLoading) return <Loading />;
  //is any error
  if (error) return toast.error(error.message);
  return (
    <div className="mt-16">
      <Heading>new arrivals</Heading>
      <div id="parts" className="flex justify-center gap-6 flex-wrap">
        {parts.map((part, i) => (
          <Part key={i} i={i} part={part} />
        ))}
      </div>
    </div>
  );
};

export default Parts;
