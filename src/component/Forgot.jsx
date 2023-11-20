import * as React from "react";

import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import nts from "../images/nts.png";
import "../css/forgot.css";

const defaultTheme = createTheme();

export default function ChangePass() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <div className="forgot-main">
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs" className="forgot-container">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 5,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img src={nts} alt="NovatectSet" />
            <Typography
              component="h1"
              variant="h5"
              fontSize={30}
              color={"#737170"}
            >
              Change Password
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 2 }}
            >
              <Grid className="forgot-input" container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="current-password"
                    label="Current Password"
                    type="password"
                    id="c-password"
                    autoComplete="current-password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="new-password"
                    label="New Password"
                    type="password"
                    id="n-password"
                    autoComplete="current-password"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Update Password
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="login" variant="body2">
                    Login
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="register" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
      <div className="forgot-rightside">
        <div className="forgot-border">
          <div className="forgot-text">
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
