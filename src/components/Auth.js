import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUp, login } from "../redux/authSlice";
import { Button, TextField, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [formData, setFormData] = useState({ username: "", password: "" });
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      dispatch(signUp(formData));
    } else {
      dispatch(login(formData));
    }
    navigate("/");
  };

  if (user) return <Typography variant="h5">You are already logged in!</Typography>;

  return (
    <Container>
      <Typography variant="h4">{isSignUp ? "Sign Up" : "Login"}</Typography>
      <form onSubmit={handleSubmit}>
        <TextField label="Username" name="username" onChange={handleChange} fullWidth required />
        <TextField label="Password" name="password" type="password" onChange={handleChange} fullWidth required />
        <Button type="submit" variant="contained" color="primary">{isSignUp ? "Sign Up" : "Login"}</Button>
      </form>
      <Button onClick={() => setIsSignUp(!isSignUp)}>{isSignUp ? "Already have an account? Login" : "Need an account? Sign Up"}</Button>
    </Container>
  );
};

export default Auth;
