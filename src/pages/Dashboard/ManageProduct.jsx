import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ManageProduct = ({
  i,
  refetch,
  setSelectedPart,
  part: { _id, name, image, quantity },
}) => {
  return (
    <tr>
      <th>{i + 1}</th>
      <td>
        <img className="w-12 h-12 rounded-full" src={image} alt="" />
      </td>
      <td>{name}</td>
      <td>{quantity}</td>
      <td>
        <label for="delete-modal" className="btn btn-error btnxs modal-button">
          <FontAwesomeIcon
            onClick={() => setSelectedPart(_id)}
            icon={faTrash}
          />
        </label>
      </td>
    </tr>
  );
};

export default ManageProduct;
