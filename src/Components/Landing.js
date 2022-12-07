import React from "react";
import Container from "@mui/material/Container";
import Intro from "./Intro";
import About from "./About";

function Landing() {
  return (
    <>
      <Container maxWidth="xl" sx={{ marginTop: "15vh" }}>
        <Intro />
        <About />
      </Container>
    </>
  );
}

export default Landing;
