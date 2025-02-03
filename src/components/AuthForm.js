import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../store/authSlice";
import { Container, TextField, Button, Typography, Paper } from "@mui/material";

const AuthForm = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.username && form.password) {
      dispatch(login(form));
    }
  };

  return (
    <Container maxWidth="xs">
      <Paper style={{ padding: 20, marginTop: 50 }}>
        <Typography variant="h5" align="center">Login / Signup</Typography>
        <form onSubmit={handleSubmit}>
          <TextField label="Username" name="username" fullWidth required margin="normal" onChange={handleChange} />
          <TextField label="Password" name="password" type="password" fullWidth required margin="normal" onChange={handleChange} />
          <Button type="submit" variant="contained" color="primary" fullWidth>Login / Signup</Button>
        </form>
      </Paper>
    </Container>
  );
};

export default AuthForm;
