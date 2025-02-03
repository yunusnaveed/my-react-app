import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "./store/authSlice";
import { Container, Button, AppBar, Toolbar, Typography } from "@mui/material";
import AuthForm from "./components/AuthForm";
import Counter from "./components/Counter";
import RichTextEditor from "./components/RichTextEditor";
import Dashboard from "./components/Dashboard";
import UserDataForm from "./components/UserDataForm";

const App = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  return (
    <Router>
      {user && (
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1 }}>My App</Typography>
            <Link to="/"><Button color="inherit">Counter</Button></Link>
            <Link to="/editor"><Button color="inherit">Editor</Button></Link>
            <Link to="/dashboard"><Button color="inherit">Dashboard</Button></Link>
            <Link to="/user-form"><Button color="inherit">User Form</Button></Link>
            <Button color="inherit" onClick={() => dispatch(logout())}>Logout</Button>
          </Toolbar>
        </AppBar>
      )}
      <Container>
        <Routes>
          <Route path="/" element={user ? <Counter /> : <AuthForm />} />
          <Route path="/editor" element={user ? <RichTextEditor /> : <Navigate to="/" />} />
          <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/" />} />
         <Route path="/user-form" element={user ? <UserDataForm /> : <Navigate to="/" />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
