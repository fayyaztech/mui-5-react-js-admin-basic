import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import logo from "../logo.svg";

export default function Login() {
  return (
    <React.Fragment>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "40vh",
        }}
      >
        <Card sx={{ maxWidth: 400, mt: 10, paddingX: 6 }}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="30vh"
          >
            <CardMedia
              component="img"
              image={logo}
              alt="logo"
              sx={{ width: 200 }}
            />
          </Box>
          <CardContent>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Typography
                variant="h2"
                component="h1"
                sx={{ fontSize: "h4.fontSize" }}
              >
                Login
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                "& > *": {
                  m: 1,
                },
              }}
            >
              <TextField
                id="username"
                label="Username"
                variant="outlined"
                type="text"
                fullWidth
                sx={{ m: 1 }}
              />
              <TextField
                id="password"
                label="Password"
                variant="outlined"
                type="password"
                fullWidth
                sx={{ m: 1 }}
              />
              <Button variant="contained" sx={{ m: 2 }}>
                Login
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </React.Fragment>
  );
}
