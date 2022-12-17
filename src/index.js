import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Landing from "./Components/Landing";
import { Backdrop, CircularProgress } from "@mui/material";
import NavBar from "./Components/NavBar";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  const [open, setOpen] = useState(true);
  useEffect(() => {
    setTimeout(() => setOpen(false), 3000);
  }, []);
  return (
    <>
      <NavBar />
      <Landing />
      <Backdrop className="landing-progress" open={open}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
