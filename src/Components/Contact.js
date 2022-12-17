import Box from "@mui/material/Box";
import React from "react";
import Typography from "@mui/material/Typography";

export default function Contact() {
  return (
    <>
      <Typography
        variant="h3"
        id="About"
        sx={{
          margin: "0 6vw",
          fontFamily: "roboto",
        }}
      >
        Contact
      </Typography>
      <Box
        className="landing-sec"
        id="Contact"
        sx={{
          margin: "0 5vw",
          padding: "30px",
        }}
      ></Box>
    </>
  );
}
