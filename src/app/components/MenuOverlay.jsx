import React from "react";
import NavLink from "./NavLink";

const MenuOverlay = ({ links }) => {
  return (
    <ul className="flex flex-col py-4 px-4 items-center w-full bg-[#121212]/95 border-b border-cyber">
      {links.map((link, index) => (
        <li key={index} className="my-2">
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
