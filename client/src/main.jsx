import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#8b55c5",
      mainT: "#8a5dd2",
      nav: "#191919",
      bgMain: "#212123",
      bgCard: "#27262b",
      textColorT: "#787b86",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
