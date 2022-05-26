import { faCancel } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Order = ({
  i,
  setSelectedCancel,
  order: { name, image, email, payment, _id },
}) => {
  return (
    <tr>
      <th>{i + 1}</th>
      <td>
        <img className="w-8 h-8 rounded-full" src={image} alt="" />
      </td>
      <td>{name}</td>
      <td>{email}</td>
      <td>
        {payment ? (
          <span className="text-success">Paid</span>
        ) : (
          <span className="text-warning">Unpaid</span>
        )}
      </td>
      <td>
        {!payment ? (
          <button className="btn btn-xs btn-success">Pay Now</button>
        ) : (
          "done"
        )}
      </td>
      <td>
        {!payment ? (
          <label
            onClick={() => setSelectedCancel(_id)}
            for="cancel-modal"
            className="cursor-pointer btn btn-error btn-xs"
          >
            <FontAwesomeIcon icon={faCancel} />
          </label>
        ) : (
          "done"
        )}
      </td>
    </tr>
  );
};

export default Order;
