// CabTable.js
import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const CabTable = ({ data }) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="cab table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold" }}>Brand</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Driver</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>License Plate</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Model</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Color</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((cab) => (
            <TableRow key={cab._id}>
              <TableCell>{cab.brand.name}</TableCell>
              <TableCell>{cab.driver.fullName}</TableCell>
              <TableCell>{cab.licensePlate}</TableCell>
              <TableCell>{cab.model}</TableCell>
              <TableCell>{cab.color}</TableCell>
              <TableCell>{cab.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CabTable;
