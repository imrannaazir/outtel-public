import axios from "axios";
import React from "react";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading";
import TopBanner from "../../Shared/TopBanner";
import Heading from "../Home/Heading";
import Part from "../Home/Part";

const Explore = () => {
  const { isLoading, error, data } = useQuery("partsData", () =>
    axios
      .get("https://historic-cuyahoga-valley-56137.herokuapp.com/parts")
      .then((res) => res?.data)
  );
  //is loading
  if (isLoading) return <Loading />;
  //is any error
  if (error) return toast.error(error?.message);
  return (
    <div className=" bg-white">
      <TopBanner
        img="https://storage.googleapis.com/afs-prod/media/afs:Medium:6906200015/775.jpeg"
        pageName="Explore Our Parts"
      />
      <div className="flex justify-center gap-6 flex-wrap my-16">
        {data.map((part, i) => (
          <Part key={i} i={i} part={part} />
        ))}
      </div>
    </div>
  );
};

export default Explore;
