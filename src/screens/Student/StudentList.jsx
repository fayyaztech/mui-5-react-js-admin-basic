import {
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  ButtonGroup,
  Button,
} from "@mui/material";

import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import SearchIcon from "@mui/icons-material/Search";

function createData(studName, studId, stdClass, gender, studPhone, studEmail) {
  return { studName, studId, stdClass, gender, studPhone, studEmail };
}

const rows = [
  createData("Rudraksh", 159, 6, "Male", 1234567890, "rudra@gmail.com"),
  createData("Vaishali", 237, 9, "Female", 2345678901, "vaish@gmail.com"),
  createData("Neha", 262, 6, "Female", 3456789012, "neha@gmail.com"),
  createData("Om", 305, 3, "Male", 4567890123, "om@gmail.com"),
  createData("Natasha", 356, 1, "Female", 5678901234, "nat@gmail.com"),
];

export default function StudentList() {
  return (
    <React.Fragment>
      <Typography paragraph>
        <h1>Student List</h1>
      </Typography>

      <TableContainer component={Paper}>
        <ButtonGroup
          variant="contained"
          aria-label="Basic button group"
          sx={{ float: "flex", m: 2 }}
        >
          <Button>PDF</Button>
          <Button>Excel</Button>
          <Button>.json</Button>
        </ButtonGroup>
        <TextField
          id="outlined-search"
          label="Search field"
          type="search"
          sx={{
            float: "right",
            m: 2,
            "& .MuiInputBase-root": {
              height: "42px",
            },
            "& .MuiInputLabel-root": {
              lineHeight: "13px",
            },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment>
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>NAME</TableCell>
              <TableCell align="center">ROLL NO</TableCell>
              <TableCell align="center">CLASS</TableCell>
              <TableCell align="center">GENDER</TableCell>
              <TableCell align="center">PHONE NO</TableCell>
              <TableCell align="center">EMAIL</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.studName}
                </TableCell>
                <TableCell align="center">{row.studId}</TableCell>
                <TableCell align="center">{row.stdClass}</TableCell>
                <TableCell align="center">{row.gender}</TableCell>
                <TableCell align="center">{row.studPhone}</TableCell>
                <TableCell align="center">{row.studEmail}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
}
