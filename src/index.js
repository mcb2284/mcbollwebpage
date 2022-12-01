import React from "react";
import ReactDOM from "react-dom/client";
import Button from "@mui/material/Button";
import ResponsiveAppBar from "./components/NavigationBar";
import "./index.css";
import Box from "@mui/material/Box";
import { CssBaseline } from "@mui/material";
import Container from "@mui/material/Container";

function App() {
  return (
    <>
      <ResponsiveAppBar />
      <SimpleContainer />
    </>
  );
}

function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{ bgcolor: "#ebebeb", height: "100vh" }} />
      </Container>
    </React.Fragment>
  );
}

function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("You clicked submit.");
  }

  return (
    <form onSubmit={handleSubmit}>
      <Button variant="contained" type="submit">
        Submit
      </Button>
    </form>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
