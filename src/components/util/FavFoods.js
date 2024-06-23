import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";

const rowsFruit = [
  {
    slime: "Phosphor",
    slimeImage: "placeholder.png",
    food: "Cuberry",
    foodImage: "placeholder.png",
  },
  {
    slime: "Honey",
    slimeImage: "placeholder.png",
    food: "Mint Mango",
    foodImage: "placeholder.png",
  },
  {
    slime: "Dervish",
    slimeImage: "placeholder.png",
    food: "Prickle Pear",
    foodImage: "placeholder.png",
  },
  {
    slime: "Batty",
    slimeImage: "placeholder.png",
    food: "Pomegranite",
    foodImage: "placeholder.png",
  },
];
const rowsVeggie = [
  {
    slime: "Rock",
    slimeImage: "placeholder.png",
    food: "Heart Beat",
    foodImage: "placeholder.png",
  },
  {
    slime: "Crystal",
    slimeImage: "placeholder.png",
    food: "Odd Onion",
    foodImage: "placeholder.png",
  },
  {
    slime: "Cotton",
    slimeImage: "placeholder.png",
    food: "Water Lettuce",
    foodImage: "placeholder.png",
  },
];
const rowsMeat = [
  {
    slime: "Tabby",
    slimeImage: "placeholder.png",
    food: "Stony Hen",
    foodImage: "placeholder.png",
  },
  { slime: "Boom", slimeImage: "placeholder.png", food: "Briar Hen", foodImage: "placeholder.png" },
  { slime: "Angler", slimeImage: "placeholder.png", food: "Sea Hen", foodImage: "placeholder.png" },
  {
    slime: "Saber",
    slimeImage: "placeholder.png",
    food: "Thundercluck",
    foodImage: "placeholder.png",
  },
  { slime: "Hunter", slimeImage: "placeholder.png", food: "Roostro", foodImage: "placeholder.png" },
];
const rowsNoFav = [
  { slime: "Pink", slimeImage: "placeholder.png", food: "None", foodImage: "placeholder.png" },
  {
    slime: "Flutter",
    slimeImage: "placeholder.png",
    food: "Moondew Nectar",
    foodImage: "placeholder.png",
  },
];

export default function FavFoods() {
  return (
    <div>
      <Typography variant="h6">Favorite Foods</Typography>
      <br />
      <Typography variant="body1">Fruit</Typography>
      <TableContainer component={Paper}>
        <Table size="small" aria-label="fav foods table">
          <TableBody>
            {rowsFruit.map((row) => (
              <TableRow key={row.slime} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell>
                  <img
                    srcSet={require(`../../../public/images/${row.slimeImage}`)}
                    src={require(`../../../public/images/${row.slimeImage}`)}
                    alt={row.slime}
                    witdh="20"
                    height="20"
                  />{" "}
                  {row.slime}
                </TableCell>
                <TableCell>
                  {" "}
                  <img
                    srcSet={require(`../../../public/images/${row.foodImage}`)}
                    src={require(`../../../public/images/${row.foodImage}`)}
                    alt={row.slime}
                    witdh="20"
                    height="20"
                  />{" "}
                  {row.food}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <br />
      <Typography variant="body1">Veggie</Typography>
      <TableContainer component={Paper}>
        <Table size="small" aria-label="fav foods table">
          <TableBody>
            {rowsVeggie.map((row) => (
              <TableRow key={row.slime} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell>
                  {" "}
                  <img
                    srcSet={require(`../../../public/images/${row.slimeImage}`)}
                    src={require(`../../../public/images/${row.slimeImage}`)}
                    alt={row.slime}
                    witdh="20"
                    height="20"
                  />{" "}
                  {row.slime}
                </TableCell>
                <TableCell>
                  {" "}
                  <img
                    srcSet={require(`../../../public/images/${row.foodImage}`)}
                    src={require(`../../../public/images/${row.foodImage}`)}
                    alt={row.slime}
                    witdh="20"
                    height="20"
                  />{" "}
                  {row.food}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <br />
      <Typography variant="body1">Meat</Typography>
      <TableContainer component={Paper}>
        <Table size="small" aria-label="fav foods table">
          <TableBody>
            {rowsMeat.map((row) => (
              <TableRow key={row.slime} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell>
                  {" "}
                  <img
                    srcSet={require(`../../../public/images/${row.slimeImage}`)}
                    src={require(`../../../public/images/${row.slimeImage}`)}
                    alt={row.slime}
                    witdh="20"
                    height="20"
                  />{" "}
                  {row.slime}
                </TableCell>
                <TableCell>
                  {" "}
                  <img
                    srcSet={require(`../../../public/images/${row.foodImage}`)}
                    src={require(`../../../public/images/${row.foodImage}`)}
                    alt={row.slime}
                    witdh="20"
                    height="20"
                  />{" "}
                  {row.food}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <br />
      <Typography variant="body1">None & Other</Typography>
      <TableContainer component={Paper}>
        <Table size="small" aria-label="fav foods table">
          <TableBody>
            {rowsNoFav.map((row) => (
              <TableRow key={row.slime} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell>
                  {" "}
                  <img
                    srcSet={require(`../../../public/images/${row.slimeImage}`)}
                    src={require(`../../../public/images/${row.slimeImage}`)}
                    alt={row.slime}
                    witdh="20"
                    height="20"
                  />{" "}
                  {row.slime}
                </TableCell>
                <TableCell>
                  {" "}
                  <img
                    srcSet={require(`../../../public/images/${row.foodImage}`)}
                    src={require(`../../../public/images/${row.foodImage}`)}
                    alt={row.slime}
                    witdh="20"
                    height="20"
                  />{" "}
                  {row.food}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
