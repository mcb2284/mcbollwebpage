import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";
import { Grid } from "@mui/material";
import AboutCard from "./Card";

function About() {
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
        About
      </Typography>

      <Grid container>
        <Grid item sm={6}>
          <Box
            className="landing-sec"
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "space-around",
              margin: "0 5vw",
              padding: "30px",
            }}
          >
            <AboutCard
              title="Columbia University"
              description=" "
              dates="September, 2019 - May, 2023"
            />
          </Box>
        </Grid>
        <Grid item sm={6}>
          <Box
            className="landing-sec"
            sx={{
              margin: "0 5vw",
              padding: "30px",
            }}
          >
            <AboutCard
              title="Amazon"
              description=" "
              dates="June, 2022 - August, 2022"
            />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default About;
