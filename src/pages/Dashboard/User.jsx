import React from "react";
import toast from "react-hot-toast";
import userIMG from "../../assets/images/user.jpg";

const User = ({ i, user: { name, email, photoURL, refetch, _id } }) => {
  const handleRole = (email) => {
    console.log(email);
    fetch(`http://localhost:5000/users/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Failed to Make an admin");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          console.log(data);
          refetch();
          toast.success(`Successfully made an admin`);
        }
      });
  };
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
        <button onClick={() => handleRole(email)} className="btn btn-xs">
          Make admin
        </button>
      </td>
    </tr>
  );
};

export default User;
