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
    slimeImage: "slimes/phosphor.png",
    food: "Cuberry",
    foodImage: "fruits/cuberry.png",
  },
  {
    slime: "Honey",
    slimeImage: "slimes/honey.png",
    food: "Mint Mango",
    foodImage: "fruits/mintMango.png",
  },
  {
    slime: "Dervish",
    slimeImage: "slimes/dervish.png",
    food: "Prickle Pear",
    foodImage: "fruits/pricklePear.png",
  },
  {
    slime: "Batty",
    slimeImage: "slimes/batty.png",
    food: "Pomegranite",
    foodImage: "fruits/pomegranite.png",
  },
  {
    slime: "Twin",
    slimeImage: "slimes/twin.png",
    food: "Polaricherry",
    foodImage: "fruits/polaricherry.png",
  },
];
const rowsVeggie = [
  {
    slime: "Rock",
    slimeImage: "slimes/rock.png",
    food: "Heart Beat",
    foodImage: "veggies/heartBeat.png",
  },
  {
    slime: "Crystal",
    slimeImage: "slimes/crystal.png",
    food: "Odd Onion",
    foodImage: "veggies/oddOnion.png",
  },
  {
    slime: "Cotton",
    slimeImage: "slimes/cotton.png",
    food: "Water Lettuce",
    foodImage: "veggies/waterLettuce.png",
  },
  {
    slime: "Hyper",
    slimeImage: "slimes/hyper.png",
    food: "Turbo Tater",
    foodImage: "veggies/turboTater.png"
  }
];
const rowsMeat = [
  {
    slime: "Tabby",
    slimeImage: "slimes/tabby.png",
    food: "Stony Hen",
    foodImage: "meats/stonyHen.png",
  },
  {
    slime: "Boom",
    slimeImage: "slimes/boom.png",
    food: "Briar Hen",
    foodImage: "meats/briarHen.png",
  },
  {
    slime: "Angler",
    slimeImage: "slimes/angler.png",
    food: "Sea Hen",
    foodImage: "meats/seaHen.png",
  },
  {
    slime: "Tangle",
    slimeImage: "slimes/tangle.png",
    food: "Painted Hen",
    foodImage: "meats/paintedHen.png",
  },
  {
    slime: "Saber",
    slimeImage: "slimes/saber.png",
    food: "Thundercluck",
    foodImage: "meats/thundercluck.png",
  },
  {
    slime: "Sloomber",
    slimeImage: "slimes/sloomber.png",
    food: "Candied Hen",
    foodImage: "meats/candiedHen.png",
  },
  {
    slime: "Hunter",
    slimeImage: "slimes/hunter.png",
    food: "Roostro",
    foodImage: "meats/roostro.png",
  },
];
const rowsNoFav = [
  { slime: "Pink", slimeImage: "slimes/pink.png", food: "None", foodImage: "other/mixed.png" },
  { slime: "Ringtail", slimeImage: "slimes/ringtail.png", food: "None", foodImage: "other/mixed.png" },
  { slime: "Puddle", slimeImage: "slimes/puddle.png", food: "None", foodImage: "other/water.png" },
  { slime: "Fire", slimeImage: "slimes/fire.png", food: "None", foodImage: "other/ash.png" },
  {
    slime: "Flutter",
    slimeImage: "slimes/flutter.png",
    food: "Moondew Nectar",
    foodImage: "other/moondewNectar.png",
  },
  { slime: "Yolky", slimeImage: "slimes/yolky.png", food: "None", foodImage: "other/none.png" },

];


export default function FavFoods() {
  return (
    <div>
      <Typography variant="body2" align="center" sx={{"margin-bottom": "10px"}}>
        Favorite Foods
      </Typography>
      <TableContainer component={Paper} sx={{"margin-bottom": "5px"}}>
        <Table size="small" aria-label="fav foods table" sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
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
                  />
                </TableCell>
                <TableCell>
                  <img
                    srcSet={require(`../../../public/images/${row.foodImage}`)}
                    src={require(`../../../public/images/${row.foodImage}`)}
                    alt={row.slime}
                    witdh="20"
                    height="20"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TableContainer component={Paper} sx={{"margin-bottom": "5px"}}>
      <Table size="small" aria-label="fav foods table" sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableBody>
            {rowsVeggie.map((row) => (
              <TableRow key={row.slime} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell>
                  <img
                    srcSet={require(`../../../public/images/${row.slimeImage}`)}
                    src={require(`../../../public/images/${row.slimeImage}`)}
                    alt={row.slime}
                    witdh="20"
                    height="20"
                  />
                </TableCell>
                <TableCell>
                  <img
                    srcSet={require(`../../../public/images/${row.foodImage}`)}
                    src={require(`../../../public/images/${row.foodImage}`)}
                    alt={row.slime}
                    witdh="20"
                    height="20"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TableContainer component={Paper} sx={{"margin-bottom": "5px"}}>
      <Table size="small" aria-label="fav foods table" sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableBody>
            {rowsMeat.map((row) => (
              <TableRow key={row.slime} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell>
                  <img
                    srcSet={require(`../../../public/images/${row.slimeImage}`)}
                    src={require(`../../../public/images/${row.slimeImage}`)}
                    alt={row.slime}
                    witdh="20"
                    height="20"
                  />
                </TableCell>
                <TableCell>
                  <img
                    srcSet={require(`../../../public/images/${row.foodImage}`)}
                    src={require(`../../../public/images/${row.foodImage}`)}
                    alt={row.slime}
                    witdh="20"
                    height="20"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TableContainer component={Paper} sx={{"margin-bottom": "5px"}}>
      <Table size="small" aria-label="fav foods table" sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableBody>
            {rowsNoFav.map((row) => (
              <TableRow key={row.slime} sx={{display:"flex", "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell align="center">

                  <img
                    srcSet={require(`../../../public/images/${row.slimeImage}`)}
                    src={require(`../../../public/images/${row.slimeImage}`)}
                    alt={row.slime}
                    height="20"
                  />
                </TableCell>
                <TableCell align="center" >
                  <img
                    srcSet={require(`../../../public/images/${row.foodImage}`)}
                    src={require(`../../../public/images/${row.foodImage}`)}
                    alt={row.slime}
                    height="20"
                  />{" "}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
