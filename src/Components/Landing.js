import React from "react";
import { CssBaseline } from "@mui/material";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import About from "./About";

function Landing() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        maxWidth="xl"
        className="background-image"
        sx={{ margin: "0", width: "100vw" }}
      >
        <Box
          sx={{
            height: "100vh",
          }}
        >
          <About />
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default Landing;
