import React from "react";
import { HashLink } from "react-router-hash-link";

const NavLinks = () => {
  return (
    <>
      <li>
        <HashLink to="/#home" smooth>
          Home
        </HashLink>
      </li>
      <li>
        <HashLink to="/#rockets" smooth>
          Rockets
        </HashLink>
      </li>
      <li>
        <HashLink to="/#drones" smooth>
          Drones
        </HashLink>
      </li>
      <li>
        <HashLink to="/#partners" smooth>
          Partners
        </HashLink>
      </li>
      <li>
        <HashLink to="/#join" smooth>
          Join
        </HashLink>
      </li>
    </>
  );
};

export default NavLinks;
