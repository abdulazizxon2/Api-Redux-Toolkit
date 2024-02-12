import React from "react";
import { FaHeart } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="chap-navbar">
        <h1>Market</h1>
      </div>
      <div className="ong-navbar">
        <NavLink to="/">
          <b>Mahsulotlar</b>
        </NavLink>
        <NavLink to="/skidka">
          <b>Skidkakalar</b>
        </NavLink>
        <NavLink to="login">
          <b>Log In</b>
        </NavLink>
        <FaHeart />
      </div>
    </div>
  );
}
