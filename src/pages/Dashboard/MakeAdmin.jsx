import axios from "axios";
import React, { useEffect, useState } from "react";
import User from "./User";

const MakeAdmin = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    (async function () {
      const { data } = await axios.get("http://localhost:5000/users");
      setUsers(data);
    })();
  }, []);
  return (
    <div className="w-[95%] px-4 mx-auto my-8 bg-base-100">
      <p className="text-lg py-4"> Make Admin</p>
      <div class="overflow-x-auto">
        <table class="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Photo</th>
              <th>Name</th>
              <th>email</th>
              <th>Make admin</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            {users.map((user, i) => (
              <User key={i} user={user} i={i} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MakeAdmin;
