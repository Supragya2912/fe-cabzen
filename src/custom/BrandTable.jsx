// BrandTable.js
import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const BrandTable = ({ data }) => {

    console.log(data);
  return (
    <TableContainer component={Paper}>
      <Table aria-label="brand table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((brand) => (
            <TableRow key={brand._id}>
              <TableCell>{brand.name}</TableCell>
              <TableCell>{brand.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BrandTable;
