import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Container, Typography, Paper } from "@mui/material";

const RichTextEditor = () => {
  const [content, setContent] = useState("");

  return (
    <Container>
      <Paper style={{ padding: 20 }}>
        <Typography variant="h5">Rich Text Editor</Typography>
        <ReactQuill value={content} onChange={setContent} />
      </Paper>
    </Container>
  );
};

export default RichTextEditor;
