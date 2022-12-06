import React from "react";
import { CssBaseline } from "@mui/material";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function BackDrop() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box
          sx={{
            bgcolor: "#ebebeb",
            height: "100vh",
          }}
        >
          <Typography variant="h2">Welcome!</Typography>
          <Typography variant="h6">
            My name is Michael Bollinger and I am a software engineer.
          </Typography>
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default BackDrop;
