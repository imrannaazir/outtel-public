import React from "react";
import ManageOrder from "./ManageOrder";

const ManageOrders = () => {
  return (
    <div className="w-[95%] px-4 mx-auto mt-8 bg-base-100">
      <p className="text-lg py-4"> Manage Orders</p>
      <div class="overflow-x-auto">
        <table class="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            <ManageOrder />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageOrders;
