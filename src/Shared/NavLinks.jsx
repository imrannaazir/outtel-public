import React from "react";
import { NavLink } from "react-router-dom";

const NavLinks = () => {
  const navLinks = [
    {
      id: 1,
      name: "Home",
      url: "/home",
    },
    {
      id: 2,
      name: "Explore",
      url: "/explore",
    },
    {
      id: 3,
      name: "Portfolio",
      url: "/portfolio",
    },
    {
      id: 4,
      name: "Blog",
      url: "/blogs",
    },
    {
      id: 5,
      name: "About",
      url: "/about",
    },
    {
      id: 6,
      name: "Contact",
      url: "/Contact",
    },
  ];
  const navLinkStyle = ({ isActive }) => {
    return {
      color: isActive ? "orange" : "white",
    };
  };
  return (
    <>
      {navLinks.map((link) => (
        <NavLink style={navLinkStyle} key={link.id} to={link.url}>
          {link.name}
        </NavLink>
      ))}
    </>
  );
};

export default NavLinks;
