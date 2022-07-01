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
        <HashLink to="/#new_arrivals" smooth>
          Explore
        </HashLink>
      </li>
      <li>
        <HashLink to="/#processors" smooth>
          Processors
        </HashLink>
      </li>
      <li>
        <HashLink to="/#graphics_cards" smooth>
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
