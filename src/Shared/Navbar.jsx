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
      class={`navbar text-base-100 transform duration-200 px-8 ${
        nav || "bg-primary"
      } fixed top-0 z-50 w-[100%]`}
    >
      {/* first part of navbar ,, logo here */}
      <div class="navbar-start">
        <a href="#home" class="text-2xl">
          Outtel
        </a>
      </div>

      {/* middle part of nav bar ,,, navlinks here */}
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal p-0">
          <NavLinks />
        </ul>
      </div>

      {/* last part of navbar here,,  */}
      <div class="navbar-end my-0 py-0">
        {/* Avatar  */}
        {user ? (
          <div class="dropdown dropdown-hover dropdown-end">
            <label tabindex="0" class="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 lg:hidden"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>

              {/*  avatar : placeholder */}
              {user?.photoURL ? (
                <div class="avatar hidden lg:block">
                  <div class="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={user?.photoURL} alt="" />
                  </div>
                </div>
              ) : (
                <div class="avatar placeholder">
                  <div class="bg-neutral-focus text-neutral-content rounded-full w-12">
                    <span class="text-3xl uppercase">
                      {user.email.slice(0, 1)}
                    </span>
                  </div>
                </div>
              )}
            </label>
            <ul
              tabindex="0"
              class="dropdown-content  shadow-xl bg-base-100 text-primary rounded-xl  w-64"
            >
              {/* profile */}
              <DropdownLinks user={user} />
            </ul>
          </div>
        ) : (
          <Link to="/login">Login</Link>
        )}
        {/* <NavigateAccount user={user} /> */}
      </div>
    </div>
  );
};

export default Navbar;

/* import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import userImg from "../../src/assets/images/user.jpg";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase.init";
import { signOut } from "firebase/auth";
import Loading from "./Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";

import axios from "axios";

const Navbar = ({ children }) => {
  const location = useLocation();
  const [path, setPath] = useState(false);
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (location.pathname.includes("dashboard")) {
      setPath(true);
    } else {
      setPath(false);
    }
  }, [location.pathname]);
  // userDb
  const [userImage, setUserImage] = useState("");
  useEffect(() => {
    (async function () {
      const { data } = await axios.get(
        `https://historic-cuyahoga-valley-56137.herokuapp.com/users/${user?.email}`
      );
      setUserImage(data.photoURL);
    })();
  }, [user?.email]);

  //loading
  if (loading) return <Loading />;

  //nav element
  const navElement = (
    <div className=" lg:flex gap-4">
      <li>
        <NavLink className="rounded-lg" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <a className="rounded-lg" href="#parts">
          Parts
        </a>
      </li>
      <li>
        <NavLink className="rounded-lg" to="/blogs">
          Blogs
        </NavLink>
      </li>
      <li>
        <NavLink className="rounded-lg" to="/portfolio">
          Portfolio
        </NavLink>
      </li>

      {user ? (
        <div class="dropdown lg:dropdown-end dropdown-hover">
          <label tabindex="0">
            <div class="avatar online mt-2">
              <div class="w-8 rounded-full">
                <img src={user?.photoURL || userImage || userImg} alt="" />
              </div>
            </div>
          </label>
          <ul
            tabindex="0"
            class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <div class="avatar">
              <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mx-auto">
                <img src={user?.photoURL || userImage || userImg} alt="" />
              </div>
            </div>
            <div class="divider"></div>
            <p className="text-center text-primary font-semibold">
              {user?.displayName}
            </p>
            <p className="text-center  text-xs">{user?.email}</p>
            <Link className="btn btn-block btn-outline my-2" to="/dashboard">
              <FontAwesomeIcon icon={faBarsStaggered} />
              Dashboard
            </Link>

            <button
              onClick={() => {
                signOut(auth);
                localStorage.removeItem("accessToken");
              }}
              class="btn gap-2 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              Logout
            </button>
          </ul>
        </div>
      ) : (
        <li>
          <NavLink className="rounded-lg" to="/login">
            Login
          </NavLink>
        </li>
      )}
    </div>
  );

  return (
    <div class="navbar bg-base-100">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink className="rounded-lg" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <a className="rounded-lg" href="#parts">
                Parts
              </a>
            </li>
            <li>
              <NavLink className="rounded-lg" to="/blogs">
                Blogs
              </NavLink>
            </li>
            <li>
              <NavLink className="rounded-lg" to="/portfolio">
                Portfolio
              </NavLink>
            </li>
          </ul>
        </div>
        <a class="btn btn-ghost normal-case text-xl">Outtel</a>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal p-0">
          <li>
            <NavLink className="rounded-lg" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <a className="rounded-lg" href="#parts">
              Parts
            </a>
          </li>
          <li>
            <NavLink className="rounded-lg" to="/blogs">
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink className="rounded-lg" to="/portfolio">
              Portfolio
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
 */
