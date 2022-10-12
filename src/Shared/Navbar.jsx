import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import NavLinks from "./NavLinks";
import Loading from "./Loading";
import { Link } from "react-router-dom";
import DropdownLinks from "./DropdownLinks";
import { auth } from "../firebase.init";

const Navbar = () => {
  const [nav, setNav] = useState(true);
  const [user, loading] = useAuthState(auth);
  // handle header bg by scrolling
  const handleNavBg = () => {
    if (window.scrollY > 80) {
      setNav(false);
    } else {
      setNav(true);
    }
  };
  window.addEventListener("scroll", handleNavBg);
  //loading
  if (loading) {
    return <Loading />;
  }

  return (
    <div
      className={`navbar text-base-100 transform duration-200 px-8 text-lg ${
        nav || "bg-primary"
      } fixed top-0 z-50 w-[100%] border-b border-primary flex justify-between`}
    >
      {/* first part of navbar ,, logo here */}
      <div className="navbar-start">
        <Link to="/home" className="text-4xl font-[Satisfy] ">
          Outtel
        </Link>
      </div>

      {/* middle part of nav bar ,,, navlinks here */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0 flex gap-6 uppercase">
          <NavLinks />
        </ul>
      </div>

      {/* last part of navbar here,,  */}
      <div className="my-0 py-0">
        {/* large screen */}
        <div className="hidden lg:block">
          {user ? (
            <div className="dropdown dropdown-hover dropdown-end">
              <label tabIndex="0" className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 lg:hidden"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>

                {/*  avatar : placeholder */}
                {user?.photoURL ? (
                  <div className="avatar hidden lg:block">
                    <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src={user?.photoURL} alt="" />
                    </div>
                  </div>
                ) : (
                  <div className="avatar placeholder">
                    <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                      <span className="text-3xl uppercase">
                        {user.email.slice(0, 1)}
                      </span>
                    </div>
                  </div>
                )}
              </label>
              <ul
                tabIndex="0"
                className="dropdown-content  shadow-xl bg-base-100 text-primary rounded-xl  w-64"
              >
                {/* profile */}
                <DropdownLinks user={user} />
              </ul>
            </div>
          ) : (
            <Link className="uppercase ml-6" to="/login">
              Login
            </Link>
          )}
        </div>
        {/* small screen */}
        <div className="lg:hidden">
          <div className="dropdown dropdown-hover dropdown-end">
            <label tabIndex="0" className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 lg:hidden"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>

              {/*  avatar : placeholder */}
            </label>
            <ul
              tabIndex="0"
              className="dropdown-content  shadow-xl bg-base-100 text-primary rounded-xl  w-64"
            >
              {/* profile */}
              <DropdownLinks user={user} />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
