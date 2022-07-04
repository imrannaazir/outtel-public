import axios from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading";
import DeliverModal from "./DeliverModal";
import ManageOrder from "./ManageOrder";

const ManageOrders = () => {
  const [selectedOrder, setSelectedOrder] = useState("");
  const { isLoading, error, data, refetch } = useQuery("getOrders", () =>
    axios.get("https://historic-cuyahoga-valley-56137.herokuapp.com/Orders", {
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
  if (isLoading) return <Loading />;
  return (
    <div className="w-[95%] px-4 mx-auto mt-8 bg-base-100">
      <p className="text-lg py-4"> Manage Orders</p>
      <div class="overflow-x-auto">
        <table class="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>SL</th>
              <th>Image</th>
              <th>Product</th>
              <th>Email</th>
              <th>Status</th>
              <th>Deliver</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            {orders.map((order, i) => (
              <ManageOrder
                key={i}
                order={order}
                i={i}
                setSelectedOrder={setSelectedOrder}
              />
            ))}
          </tbody>
        </table>
      </div>

      <DeliverModal selectedOrder={selectedOrder} refetch={refetch} />
    </div>
  );
};

export default ManageOrders;
