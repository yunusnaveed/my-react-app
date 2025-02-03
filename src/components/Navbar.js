import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/authSlice";
import { Button } from "@mui/material";

const Navbar = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  return (
    <nav style={{ display: "flex", gap: "10px", padding: "10px" }}>
      <Link to="/">Counter</Link>
      <Link to="/form">Form</Link>
      <Link to="/editor">Editor</Link>
      <Link to="/dashboard">Dashboard</Link>
      {!user ? <Link to="/auth">Login</Link> : <Button onClick={() => dispatch(logout())}>Logout</Button>}
    </nav>
  );
};

export default Navbar;
