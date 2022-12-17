import React from "react";
import Container from "@mui/material/Container";
import Intro from "./Intro";
import About from "./About";
import Contact from "./Contact";
import ScrollToTop from "./ScrollToTop";

function Landing() {
  return (
    <>
      <Container maxWidth="xl" sx={{ marginTop: "15vh" }}>
        <Intro />
        <About />
        <Contact />
      </Container>
    </>
  );
}

export default Landing;
