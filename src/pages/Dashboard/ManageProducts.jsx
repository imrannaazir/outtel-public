import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading";
import DeleteModal from "./DeleteModal";
import ManageProduct from "./ManageProduct";
import { useState } from "react";

const ManageProducts = () => {
  const [selectedPart, setSelectedPart] = useState("");
  const { isLoading, error, data, refetch } = useQuery("partsData", () =>
    axios.get("https://rocky-waters-98626.herokuapp.com/parts", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
  );

  if (isLoading) return <Loading />;
  if (error) {
    console.log(error);
  }
  //parts
  const parts = data?.data;
  return (
    <div className="w-[95%] px-4 mx-auto my-8 bg-base-100">
      <p className="text-lg py-4"> Manage Products</p>
      <div class="overflow-x-auto">
        <table class="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>SL</th>
              <th>Photo</th>
              <th>Product title</th>
              <th>Quantity</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            {parts.map((part, i) => (
              <ManageProduct
                key={i}
                i={i}
                part={part}
                setSelectedPart={setSelectedPart}
              />
            ))}
          </tbody>
        </table>
      </div>
      <DeleteModal refetch={refetch} selectedPart={selectedPart} />
    </div>
  );
};

export default ManageProducts;
