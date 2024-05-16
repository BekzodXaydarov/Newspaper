import React, { useState } from "react";
import "./Navbar.css";
import NavLastest from "./NavLastest";
import menuIcon from "../../assets/menu-icon.png";

const Navbar = ({ setCategory }) => {
  const [mobile, setMobile] = useState("");
  return (
    <>
      <nav>
        <h1 className="Logo">NewsPapper</h1>
        <ul className={mobile ? "active" : ""}>
          <li onClick={() => setCategory("general")}>All</li>
          <li onClick={() => setCategory("technology")}>Technology</li>
          <li onClick={() => setCategory("business")}>Business</li>
          <li onClick={() => setCategory("health")}>Health</li>
          <li onClick={() => setCategory("sports")}>Sports</li>
          <li onClick={() => setCategory("entertainment")}>Entertainment</li>
        </ul>
        <img
          src={menuIcon}
          className="menu-icon"
          alt=""
          onClick={() => setMobile(!mobile)}
        />
      </nav>
      <NavLastest />
    </>
  );
};

export default Navbar;
