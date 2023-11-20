import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "../css/login.css";
import FormComponent from "./FormComponent";

const defaultTheme = createTheme();

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function Signin() {
  return (
    <div className="login-main">
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs" className="login-container">
          <CssBaseline />
          <FormComponent />
        </Container>
      </ThemeProvider>
      <div className="login-rightside">
        <div className="login-border">
          <div className="login-text">
            <h1 style={{ color: "#e71e4a" }}>Nova</h1>
            <h1 style={{ color: "#e71e4a" }}>Techset</h1>
            <h1 style={{ color: "#737170" }}>Examination</h1>
            <h1 style={{ color: "#737170" }}>System</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
