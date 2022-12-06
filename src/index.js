import React from "react";
import ReactDOM from "react-dom/client";
import ResponsiveAppBar from "./components/NavigationBar";
import "./index.css";
import Container from "@mui/material/Container";

function App() {
  return (
    <Container>
      <ResponsiveAppBar />
    </Container>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
