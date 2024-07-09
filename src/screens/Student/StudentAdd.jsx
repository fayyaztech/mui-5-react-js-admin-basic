import {
  Box,
  Button,
  TextField,
  Typography,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import React, { useState } from "react";

export default function AddStudent() {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  return (
    <React.Fragment>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          minHeight: "100vh",
          m: 0,
          p: 5,
        }}
      >
        {/* <TextField
          id="studentName"
          label="Full Name"
          variant="outlined"
          type="text"
          fullWidth
          sx={{
            m: 1,
            "& .MuiInputBase-root": {
              height: "50px", // Adjust the height as needed
            },
            "& .MuiInputLabel-root": {
              lineHeight: "15px", // Adjust the line height of the label
            },
          }}
        /> */}
        <div>
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Typography
              variant="h2"
              component="h1"
              sx={{ fontSize: "h4.fontSize" }}
            >
              Add Student
            </Typography>
          </Box>
          <Box>
            <TextField
              id="studentName"
              label="Full Name"
              variant="outlined"
              type="text"
              fullWidth
              sx={{
                m: 1,
                "& .MuiInputBase-root": {
                  height: "50px",
                  maxWidth: "600px",
                },
                "& .MuiInputLabel-root": {
                  lineHeight: "15px",
                },
              }}
            />
            <TextField
              id="studentClass"
              label="Class"
              variant="outlined"
              type="text"
              fullWidth
              sx={{
                m: 1,
                "& .MuiInputBase-root": {
                  height: "50px",
                  maxWidth: "600px",
                },
                "& .MuiInputLabel-root": {
                  lineHeight: "15px",
                },
              }}
            />
            <TextField
              id="studentPhoneNo"
              label="Phone No"
              variant="outlined"
              type="text"
              fullWidth
              sx={{
                m: 1,
                "& .MuiInputBase-root": {
                  height: "50px",
                  maxWidth: "600px",
                },
                "& .MuiInputLabel-root": {
                  lineHeight: "15px",
                },
              }}
            />
            <TextField
              id="studentEmail"
              label="Email"
              variant="outlined"
              type="text"
              fullWidth
              sx={{
                m: 1,
                "& .MuiInputBase-root": {
                  height: "50px",
                  maxWidth: "600px",
                },
                "& .MuiInputLabel-root": {
                  lineHeight: "15px",
                },
              }}
            />
            <TextField
              id="studentAddress"
              label="Address"
              variant="outlined"
              type="text"
              fullWidth
              sx={{
                m: 1,
                "& .MuiInputBase-root": {
                  height: "50px",
                  maxWidth: "600px",
                },
                "& .MuiInputLabel-root": {
                  lineHeight: "15px",
                },
              }}
            />

            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">
                Gender
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
            </FormControl>

            <Box>
              <Button variant="outlined" component="label" sx={{ m: 1 }}>
                Upload Image
                <input type="file" hidden onChange={handleFileChange} />
              </Button>
              {file && <p>Selected file: {file.name}</p>}
            </Box>
            <Button variant="contained" sx={{ mt: 2 }}>
              Add
            </Button>
          </Box>
        </div>
      </Box>
    </React.Fragment>
  );
}
