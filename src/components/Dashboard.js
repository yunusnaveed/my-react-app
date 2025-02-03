import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Typography } from "@mui/material";

const Dashboard = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>Dashboard</Typography>
      <Link to="/user-form">
        <Button variant="contained" color="primary">Go to User Data Form</Button>
      </Link>
    </Container>
  );
};

export default Dashboard;
