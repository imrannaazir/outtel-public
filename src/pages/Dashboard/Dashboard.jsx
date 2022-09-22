import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import { auth } from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";
import Loading from "../../Shared/Loading";

const Dashboard = () => {
  const [user, loading] = useAuthState(auth);
  const [admin, adminLoading] = useAdmin(user);

  //loading
  if (loading || adminLoading) return <Loading />;

  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content  bg-[#F1F5F9]">
        <Outlet />

        <label
          for="my-drawer-2"
          className="btn btn-outline border-0 drawer-button absolute top-0 left-0 lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </label>
      </div>
      {/* aside sidebar */}
      <div className="drawer-side">
        <label for="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 text-base-content bg-base-100 lg:bg-transparent">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/dashboard">Edit Profile</Link>
          </li>

          {/* user's routes */}
          {!admin && (
            <div>
              <li>
                <Link to="/dashboard/orders">My Orders</Link>
              </li>
              <li>
                <Link to="/dashboard/reviews">My Reviews</Link>
              </li>
              <li>
                <Link to="/dashboard/feedback">Give Feedback</Link>
              </li>
            </div>
          )}

          {/* admin's routes */}
          {admin && (
            <div>
              <li>
                <Link to="/dashboard/manage-orders">Manage Orders</Link>
              </li>
              <li>
                <Link to="/dashboard/add-part">Add Parts</Link>
              </li>
              <li>
                <Link to="/dashboard/make-admin">Make Admin</Link>
              </li>
              <li>
                <Link to="/dashboard/manage-products">Manage Products</Link>
              </li>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
