import React, { useState, useEffect } from "react";
import { Button, Typography, Box, Paper } from "@mui/material";
import { useSpring, animated } from "@react-spring/web";

const Counter = () => {
  const [count, setCount] = useState(() => Number(localStorage.getItem("counter")) || 0);

  // Background color intensity based on count
  const colorLevel = Math.min(count * 10, 255); // Prevents exceeding 255
  const animatedBg = useSpring({ backgroundColor: `rgb(${colorLevel}, ${colorLevel}, 180)` });

  // Persist counter value
  useEffect(() => {
    localStorage.setItem("counter", count);
  }, [count]);

  // Handlers for increment, decrement, and reset
  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count > 0 ? count - 1 : 0);
  const handleReset = () => setCount(0);

  return (
    <animated.div style={{ ...animatedBg, minHeight: "100vh", padding: "20px" }}>
      <Paper elevation={3} style={{ padding: "20px", margin: "20px", borderRadius: "8px" }}>
        <Typography variant="h4" align="center" gutterBottom>
          Counter
        </Typography>
        <Box display="flex" justifyContent="center" alignItems="center" padding={2} border={1} borderRadius={4} sx={{ backgroundColor: "lightgrey" }}>
          <Typography variant="h5">Counter Value: {count}</Typography>
        </Box>
        <Box display="flex" justifyContent="center" mt={2} gap={2}>
          <Button variant="contained" onClick={handleIncrement}>Increment</Button>
          <Button variant="contained" onClick={handleDecrement}>Decrement</Button>
          <Button variant="outlined" color="error" onClick={handleReset}>Reset</Button>
        </Box>
      </Paper>
    </animated.div>
  );
};

export default Counter;

