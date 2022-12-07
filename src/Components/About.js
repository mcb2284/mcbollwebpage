import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";

function About() {
  return (
    <>
      <Typography
        variant="h3"
        sx={{
          margin: "0 6vw",
          fontFamily: "roboto",
        }}
      >
        About
      </Typography>
      <Box
        className="landing-sec"
        id="About"
        sx={{
          margin: "0 5vw",
          padding: "30px",
        }}
      ></Box>
    </>
  );
}

export default About;
