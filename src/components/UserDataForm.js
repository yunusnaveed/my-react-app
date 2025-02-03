import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveUserData } from "../store/userSlice"; // Create this Redux slice
import { TextField, Button, Container, Typography } from "@mui/material";

const UserDataForm = () => {
  const dispatch = useDispatch();
  const savedData = useSelector((state) => state.user.data);

  // Form state
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    address: "",
    email: "",
    phone: "",
  });

  const [isDirty, setIsDirty] = useState(false);

  // Generate user ID on mount
  useEffect(() => {
    const userId = "USER-" + Math.floor(Math.random() * 10000);
    setFormData((prev) => ({ ...prev, id: userId }));
  }, []);

  // Warn before closing tab with unsaved changes
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (isDirty) {
        event.preventDefault();
        event.returnValue = "You have unsaved changes!";
      }
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [isDirty]);

  // Handle input change
  const handleChange = (e) => {
    setIsDirty(true);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(saveUserData(formData));
    localStorage.setItem("userData", JSON.stringify(formData));
    setIsDirty(false);
    alert("User data saved successfully!");
  };

  return (
    <Container>
      <Typography variant="h4">User Data Form</Typography>
      <form onSubmit={handleSubmit}>
        <TextField label="Name" name="name" value={formData.name} onChange={handleChange} fullWidth required />
        <TextField label="Address" name="address" value={formData.address} onChange={handleChange} fullWidth required />
        <TextField label="Email" name="email" type="email" value={formData.email} onChange={handleChange} fullWidth required />
        <TextField label="Phone" name="phone" value={formData.phone} onChange={handleChange} fullWidth required />
        <Button type="submit" variant="contained" color="primary">Save</Button>
      </form>
    </Container>
  );
};

export default UserDataForm;
