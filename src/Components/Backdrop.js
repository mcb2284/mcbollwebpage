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
          <Typography variant="h6" sx={{ padding: "5%" }}>
            <Typography variant="h2">Welcome!</Typography>
            My name is Michael Bollinger and I am a software engineer. I served
            5 years in the 75th Ranger Regiment and I am currently a student at
            Columbia University studying Computer Science.
          </Typography>
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default BackDrop;
