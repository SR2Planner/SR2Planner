import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";

const rowsFruit = [
  { slime: "Phosphor Slime", food: "Cuberry" },
  { slime: "Honey Slime", food: "Mint Mango" },
  { slime: "Dervish Slime", food: "Prickle Pear" },
  { slime: "Batty Slime", food: "Pomegranite" },
];
const rowsVeggie = [
  { slime: "Rock Slime", food: "Heart Beat" },
  { slime: "Crystal Slime", food: "Odd Onion" },
  { slime: "Cotton Slime", food: "Water Lettuce" },
];
const rowsMeat = [
  { slime: "Tabby Slime", food: "Stony Hen" },
  { slime: "Boom Slime", food: "Briar Hen" },
  { slime: "Angler Slime", food: "Sea Hen" },
  { slime: "Saber Slime", food: "Thundercluck" },
  { slime: "Hunter Slime", food: "Roostro" },
];
const rowsNoFav = [
  { slime: "Pink Slime", food: "None" },
  { slime: "Flutter Slime", food: "Moondew Nectar" },
];

export default function FavFoods() {
  return (
    <div>
      <Typography variant="h6">Favorite Foods</Typography>
      <br/>
      <Typography variant="body1">Fruit</Typography>
      <TableContainer component={Paper}>
        <Table size="small" aria-label="fav foods table">
          <TableBody>
            {rowsFruit.map((row) => (
              <TableRow key={row.slime} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell>{row.slime}</TableCell>
                <TableCell>{row.food}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <br/>
      <Typography variant="body1">Veggie</Typography>
      <TableContainer component={Paper}>
        <Table size="small" aria-label="fav foods table">
          <TableBody>
            {rowsVeggie.map((row) => (
              <TableRow key={row.slime} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell>{row.slime}</TableCell>
                <TableCell>{row.food}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <br/>
      <Typography variant="body1">Meat</Typography>
      <TableContainer component={Paper}>
        <Table size="small" aria-label="fav foods table">
          <TableBody>
            {rowsMeat.map((row) => (
              <TableRow key={row.slime} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell>{row.slime}</TableCell>
                <TableCell>{row.food}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <br/>
      <Typography variant="body1">None & Other</Typography>
      <TableContainer component={Paper}>
        <Table size="small" aria-label="fav foods table">
          <TableBody>
            {rowsNoFav.map((row) => (
              <TableRow key={row.slime} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell>{row.slime}</TableCell>
                <TableCell>{row.food}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
