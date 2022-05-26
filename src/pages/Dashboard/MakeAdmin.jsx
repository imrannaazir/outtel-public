import axios from "axios";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading";
import User from "./User";

const MakeAdmin = () => {
  const { isLoading, error, data, refetch } = useQuery("allUser", () =>
    axios.get("http://localhost:5000/users")
  );

  if (isLoading) return <Loading />;
  if (error) {
    console.log(error);
  }
  const users = data?.data;
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
              <User key={i} user={user} i={i} refetch={refetch} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MakeAdmin;
