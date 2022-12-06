import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import laptopSVG from "../Icons/workspace.svg";
import React from "react";

function About() {
  return (
    <Box
      className="about"
      sx={{
        bgcolor: "#ebebeb",
        margin: "20px",
        padding: "30px",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: "300",
          fontFamily: "roboto",
        }}
      >
        {" "}
        Welcome! My name is
      </Typography>
      <Typography variant="h3" display="inline" sx={{ fontFamily: "roboto" }}>
        {" "}
        Michael Bollinger.
      </Typography>
      <Grid container>
        <Grid item xs={6} sm={6}>
          <Typography variant="h6" sx={{ fontFamily: "roboto" }}>
            {" "}
            I am a software engineer. I served 5 years in the 75th Ranger
            Regiment and I am currently a student at Columbia University
            studying Computer Science. This is my portfolio where I can share my
            projects and progress. Take a look around and feel free to reach out
            to me.
          </Typography>
        </Grid>
      </Grid>
      <img
        className="landing-img"
        src={laptopSVG}
        alt="laptop"
        style={{ height: 200, zIndex: "1" }}
      />
      <Typography
        variant="h6"
        textAlign="center"
        sx={{ fontFamily: "roboto", margin: "15px" }}
      >
        {" "}
        "The best way to predict the future is to invent it."
      </Typography>
    </Box>
  );
}

export default About;
