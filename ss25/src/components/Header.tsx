import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="flex items-center justify-center gap-3">

      <NavLink
        to={"/"}
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Home
      </NavLink>

      <NavLink
        className={({ isActive }) => (isActive ? "active" : "")}
        to={"/product"}
      >
        Product
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "")}
        to={"/detail"}
      >
        Detail
      </NavLink>
    </div>
  );
}