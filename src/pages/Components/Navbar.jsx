import React from "react";
import { FaHeart } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { IoSearch } from "react-icons/io5";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="chap-navbar">
        <h1 className="logo">O.Market</h1>
        <div className="search">
          <input type="text" name="" id="" />
          <button>
            <IoSearch />
          </button>
        </div>
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
