import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import React, { useState } from "react";
import logo from "../logo.svg";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [formError, setFormError] = useState({});
  const navigate = useNavigate();

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    let isValidate = true;
    setFormError({});
    if (formData.username === "") {
      isValidate = false;
      setFormError((preData) => ({
        ...preData,
        username: "User name is Required",
      }));
    }

    if (formData.password.length < 6) {
      isValidate = false;
      setFormError((preData) => ({
        ...preData,
        password: "password length must be at least 6",
      }));
    }

    if (formData.password === "") {
      isValidate = false;
      setFormError((preData) => ({
        ...preData,
        password: "password Must be Required",
      }));
    }

    console.log(Object.keys(formError).length);
    if (isValidate) navigate("/dashboard");
  };

  //show password
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => setShowPassword(!showPassword);

  return (
    <React.Fragment>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "40vh",
          mt: 5,
        }}
      >
        <Card sx={{ maxWidth: 500 }}>
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
                sx={{ my: 1.5 }}
                fullWidth
                error={formError.username !== undefined ? true : false}
                id="filled-error-helper-text"
                label="Username"
                name="username"
                value={formData.username}
                helperText={formError.username !== null && formError.username}
                variant="filled"
                onChange={handleInput}
              />

              <TextField
                sx={{ my: 1.5 }}
                fullWidth
                error={formError.password !== undefined ? true : false}
                id="filled-error-helper-text"
                type={showPassword ? "text" : "password"}
                label="Password"
                name="password"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleShowPassword}
                        edge="end"
                        aria-label="toggle password visibility"
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                value={formData.password}
                helperText={formError.password !== null && formError.password}
                variant="filled"
                onChange={handleInput}
              />

              <Button
                variant="contained"
                sx={{ m: 2, width: 100 }}
                onClick={handleLogin}
              >
                Login
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </React.Fragment>
  );
}
