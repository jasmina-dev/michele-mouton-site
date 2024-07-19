import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  return (
    <div className="nav">
      <Link to="/about">ABOUT</Link>
      <Link to="/stats">STATS</Link>
    </div>
  );
}
