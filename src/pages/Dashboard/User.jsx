import React from "react";
import userIMG from "../../assets/images/user.jpg";

const User = ({ i, user: { name, email, photoURL } }) => {
  return (
    <tr>
      <th>{i + 1}</th>
      <th>
        <img
          className="w-8 h-8 rounded-full"
          src={photoURL || userIMG}
          alt=""
        />
      </th>

      <td>{name}</td>
      <td>{email}</td>
      <td>
        <button className="btn btn-xs">Make admin</button>
      </td>
    </tr>
  );
};

export default User;
