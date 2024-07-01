import * as React from "react";
import Plot from "../planning/Plot";
import FreeRange from "../planning/FreeRange";

const plotsGully = [
  { id: "gu1", top: 70, left: 290 },
  { id: "gu2", top: 130, left: 190 },
  { id: "gu3", top: 130, left: 260 },
  { id: "gu4", top: 145, left: 350 },
  { id: "gu5", top: 240, left: 290 },
];

const plotsTidepools = [
  { id: "tp1", top: 70, left: 485 },
  { id: "tp2", top: 80, left: 580 },
  { id: "tp3", top: 175, left: 540 },
  { id: "tp4", top: 175, left: 605 },
  { id: "tp5", top: 240, left: 580 },
];

const plotsConservatory = [
  { id: "cv1", top: 340, left: 185 },
  { id: "cv2", top: 340, left: 240 },
  { id: "cv3", top: 468, left: 360 },
  { id: "cv4", top: 520, left: 360 },
  { id: "cv5", top: 468, left: 233 },
  { id: "cv6", top: 520, left: 181 },
  { id: "cv7", top: 520, left: 233 },
  { id: "cv8", top: 520, left: 285 },
];

const plotsArchway = [
  { id: "aw1", top: 365, left: 500 },
  { id: "aw2", top: 390, left: 565 },
  { id: "aw3", top: 440, left: 630 },
  { id: "aw4", top: 500, left: 610 },
  { id: "aw5", top: 468, left: 460 },
];

const plotsDen = [
  { id: "dn1", top: 678, left: 193 },
  { id: "dn2", top: 655, left: 247 },
  { id: "dn3", top: 745, left: 228 },
  { id: "dn4", top: 745, left: 283 },
  { id: "dn5", top: 725, left: 350 },
];

const plotsDigsite = [
  { id: "ds1", top: 610, left: 530 },
  { id: "ds2", top: 712, left: 522 },
  { id: "ds3", top: 767, left: 522 },
  { id: "ds4", top: 790, left: 575 },
];

const freeRange = [
  { id: "frGu", top: 240, left: 190 },
  { id: "frTp", top: 240, left: 460 },
  { id: "frCv", top: 340, left: 360 },
  { id: "frAw", top: 340, left: 630 },
  { id: "frDn", top: 615, left: 360 },
  { id: "frDs", top: 615, left: 630 },
];
export default function Planner() {
  return (
    <div>
      <img src={require(`./map.png`)} alt="Slime Rancher 2 Conservatory map" height="790px"></img>
      {plotsGully.map((plot) => (
        <Plot key={plot.id} plot={plot}></Plot>
      ))}
      {plotsTidepools.map((plot) => (
        <Plot key={plot.id} plot={plot}></Plot>
      ))}
      {plotsConservatory.map((plot) => (
        <Plot key={plot.id} plot={plot}></Plot>
      ))}
      {plotsArchway.map((plot) => (
        <Plot key={plot.id} plot={plot}></Plot>
      ))}
      {plotsDen.map((plot) => (
        <Plot key={plot.id} plot={plot}></Plot>
      ))}
      {plotsDigsite.map((plot) => (
        <Plot key={plot.id} plot={plot}></Plot>
      ))}
      {freeRange.map((plot) => (
        <FreeRange key={plot.id} plot={plot}></FreeRange>
      ))}
    </div>
  );
}
