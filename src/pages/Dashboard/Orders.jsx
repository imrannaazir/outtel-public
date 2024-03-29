import axios from "axios";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { auth } from "../../firebase.init";
import Loading from "../../Shared/Loading";
import CancelModal from "./CancelModal";
import Order from "./Order";

const Orders = () => {
  const [user, loading] = useAuthState(auth);
  const [selectedCancel, setSelectedCancel] = useState("");
  const { isLoading, error, data, refetch } = useQuery("getOrders", () =>
    axios.get(`https://outtel-backend.onrender.com/Orders/${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
  );

  //order
  const orders = data?.data;

  //error
  if (error) {
    console.log(error);
  }

  // loading
  if (isLoading || loading) return <Loading />;
  return (
    <div className="w-[95%] px-4 mx-auto mt-8 bg-base-100">
      <p className="text-lg py-4"> Your Orders</p>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>SL</th>
              <th>Image</th>
              <th>Product</th>
              <th>Email</th>
              <th>Status</th>
              <th>Pay</th>
              <th>Cancel</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            {orders.map((order, i) => (
              <Order
                key={i}
                i={i}
                order={order}
                setSelectedCancel={setSelectedCancel}
              />
            ))}
          </tbody>
        </table>
      </div>
      <CancelModal refetch={refetch} selectedCancel={selectedCancel} />
    </div>
  );
};

export default Orders;
