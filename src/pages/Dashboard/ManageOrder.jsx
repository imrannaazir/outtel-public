import React from "react";

const ManageOrder = ({
  i,
  setSelectedOrder,
  order: { image, part, email, _id, status },
}) => {
  return (
    <tr>
      <th>{i + 1}</th>
      <td>
        <img className="w-8 h-8 rounded-full" src={image} alt="" />
      </td>
      <td>{part}</td>
      <td>{email}</td>
      <td>{status === "delivered" ? "delivered" : "Pending"}</td>
      <td>
        <label
          onClick={() => setSelectedOrder(_id)}
          for="deliver-modal"
          class={`btn btn-xs ${status === "delivered" && "btn-disabled"}`}
        >
          Deliver Now
        </label>
      </td>
    </tr>
  );
};

export default ManageOrder;
