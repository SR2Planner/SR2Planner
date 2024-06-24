import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Plot from "../planning/Plot";

const plotsGully = [
  { id: "plot1", top: 70, left: 325 },
  { id: "plot2", top: 135, left: 265 },
  { id: "plot2", top: 135, left: 325 },
  { id: "plot2", top: 135, left: 385 },
  { id: "plot2", top: 200, left: 325 },
];

const plotsTidepools = [
  { id: "plot1", top: 70, left: 525 },
  { id: "plot2", top: 70, left: 606 },
  { id: "plot2", top: 125, left: 554 },
  { id: "plot2", top: 125, left: 616 },
  { id: "plot2", top: 180, left: 605 },
];

const plotsConservatory = [
  { id: "plot1", top: 365, left: 190 },
  { id: "plot2", top: 365, left: 244 },
  { id: "plot2", top: 439, left: 230 },
  { id: "plot2", top: 439, left: 342 },
  { id: "plot2", top: 491, left: 178 },
  { id: "plot2", top: 491, left: 230 },
  { id: "plot2", top: 491, left: 282 },
  { id: "plot2", top: 491, left: 342 },
];

const plotsArchway = [
  { id: "plot1", top: 392, left: 584 },
  { id: "plot2", top: 470, left: 584 },
  { id: "plot2", top: 400, left: 643 },
  { id: "plot2", top: 430, left: 698 },
  { id: "plot2", top: 485, left: 643 },
];

const plotsDen = [
  { id: "plot1", top: 695, left: 370 },
  { id: "plot2", top: 695, left: 425 },
  { id: "plot2", top: 755, left: 370 },
  { id: "plot2", top: 755, left: 425 },
  { id: "plot2", top: 730, left: 480 },
];

const plotsDigsite = [
  { id: "plot1", top: 770, left: 584 },
  { id: "plot2", top: 790, left: 655 },
  { id: "plot2", top: 790, left: 710 },
  { id: "plot2", top: 735, left: 745 },
];
export default function Planner() {
  return (
    <div>
      <img src={require(`./mapnew.png`)} width="670px"></img>
      {plotsGully.map((plot) => (
        <Plot plot={plot}></Plot>
      ))}
      {plotsTidepools.map((plot) => (
        <Plot plot={plot}></Plot>
      ))}
      {plotsConservatory.map((plot) => (
        <Plot plot={plot}></Plot>
      ))}
      {plotsArchway.map((plot) => (
        <Plot plot={plot}></Plot>
      ))}
      {plotsDen.map((plot) => (
        <Plot plot={plot}></Plot>
      ))}
      {plotsDigsite.map((plot) => (
        <Plot plot={plot}></Plot>
      ))}
    </div>
  );
}
