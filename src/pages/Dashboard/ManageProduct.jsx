import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React from "react";

const ManageProduct = ({
  i,
  refetch,
  part: { _id, name, image, quantity },
}) => {
  //handle delete
  const handleDelete = (id) => {
    (async function () {
      const { data } = await axios.delete(`http://localhost:5000/parts/${id}`);
      console.log(data);
    })();
  };
  return (
    <tr>
      <th>{i + 1}</th>
      <td>
        <img className="w-12 h-12 rounded-full" src={image} alt="" />
      </td>
      <td>{name}</td>
      <td>{quantity}</td>
      <td>
        <FontAwesomeIcon onClick={() => handleDelete(_id)} icon={faTrash} />
      </td>
    </tr>
  );
};

export default ManageProduct;
