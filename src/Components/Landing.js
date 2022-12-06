import React from "react";
import { CssBaseline, Grid } from "@mui/material";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import laptopSVG from "../Icons/workspace.svg";

function Landing() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box
          sx={{
            height: "100vh",
          }}
        >
          <Box
            sx={{
              bgcolor: "#ebebeb",
              margin: "20px",
              padding: "30px",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: "300",
              }}
            >
              {" "}
              Welcome! My name is
            </Typography>
            <Typography
              variant="h4"
              display="inline"
              sx={{ fontFamily: "roboto" }}
            >
              {" "}
              Michael Bollinger.
            </Typography>
            <Grid container>
              <Grid item xs={6} sm={6}>
                <Typography variant="body1">
                  {" "}
                  I am a software engineer. I served 5 years in the 75th Ranger
                  Regiment and I am currently a student at Columbia University
                  studying Computer Science.
                </Typography>
              </Grid>
            </Grid>
            <img
              className="landing-img"
              src={laptopSVG}
              alt="laptop"
              style={{ height: 200 }}
            />
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default Landing;
