import * as React from "react";
import Plot from "../planning/Plot";

const plotsGully = [
  { id: "plot1", top: 67, left: 375 },
  { id: "plot2", top: 130, left: 305 },
  { id: "plot2", top: 130, left: 360 },
  { id: "plot2", top: 130, left: 425 },
  { id: "plot2", top: 200, left: 375 },
];

const plotsTidepools = [
  { id: "plot1", top: 67, left: 580 },
  { id: "plot2", top: 67, left: 655 },
  { id: "plot2", top: 125, left: 620 },
  { id: "plot2", top: 125, left: 675 },
  { id: "plot2", top: 183, left: 655 },
];

const plotsConservatory = [
  { id: "plot1", top: 385, left: 222 },
  { id: "plot2", top: 385, left: 275 },
  { id: "plot2", top: 460, left: 365 },
  { id: "plot2", top: 513, left: 365 },
  { id: "plot2", top: 488, left: 250 },
  { id: "plot2", top: 541, left: 197 },
  { id: "plot2", top: 541, left: 250 },
  { id: "plot2", top: 541, left: 303 },
];

const plotsArchway = [
  { id: "plot1", top: 409, left: 647 },
  { id: "plot2", top: 480, left: 625 },
  { id: "plot2", top: 426, left: 708 },
  { id: "plot2", top: 480, left: 745 },
  { id: "plot2", top: 510, left: 690 },
];

const plotsDen = [
  { id: "plot1", top: 733, left: 400 },
  { id: "plot2", top: 733, left: 453 },
  { id: "plot2", top: 785, left: 400 },
  { id: "plot2", top: 785, left: 453 },
  { id: "plot2", top: 785, left: 518 },
];

const plotsDigsite = [
  { id: "plot1", top: 650, left: 693 },
  { id: "plot2", top: 730, left: 681 },
  { id: "plot2", top: 785, left: 681 },
  { id: "plot2", top: 785, left: 734 },
];
export default function Planner() {
  return (
    <div >

      <img src={require(`./mapDetail.png`)} width="780px"></img>
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
