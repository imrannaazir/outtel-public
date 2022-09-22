import axios from "axios";
import React from "react";
import Loading from "../../Shared/Loading";
import { useQuery } from "react-query";
import toast from "react-hot-toast";
import Part from "./Part";
import Heading from "./Heading";

const Processors = () => {
  const { isLoading, error, data } = useQuery("processorsData", () =>
    axios
      .get("https://historic-cuyahoga-valley-56137.herokuapp.com/processors")
      .then((res) => res.data)
  );
  const processors = data?.slice(0, 3);
  //is loading
  if (isLoading) return <Loading />;
  //is any error
  if (error) return toast.error(error.message);
  return (
    <div className="mt-16">
      <Heading>Processors</Heading>
      <div id="processors" className="flex justify-center gap-6 flex-wrap">
        {processors.map((part, i) => (
          <Part key={i} i={i} part={part} />
        ))}
      </div>
    </div>
  );
};

export default Processors;
