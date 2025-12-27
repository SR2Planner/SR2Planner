import * as React from "react";
import { useState, useEffect } from "react";
import Plot from "../planning/Plot";
import FreeRange from "../planning/FreeRange";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";


const plotsGully = [
  { id: "gu1", top: 140, left: 640 },
  { id: "gu2", top: 210, left: 520 },
  { id: "gu3", top: 210, left: 600 },
  { id: "gu4", top: 225, left: 715 },
  { id: "gu5", top: 350, left: 640 },
];

const plotsTidepools = [
  { id: "tp1", top: 140, left: 890 },
  { id: "tp2", top: 150, left: 1005 },
  { id: "tp3", top: 260, left: 955 },
  { id: "tp4", top: 260, left: 1020 },
  { id: "tp5", top: 350, left: 1005 },
];

const plotsConservatory = [
  { id: "cv1", top: 140, left: 1185 },
  { id: "cv2", top: 140, left: 1240 },
  { id: "cv3", top: 295, left: 1395 },
  { id: "cv4", top: 350, left: 1395 },
  { id: "cv5", top: 295, left: 1240 },
  { id: "cv6", top: 350, left: 1185 },
  { id: "cv7", top: 350, left: 1240 },
  { id: "cv8", top: 350, left: 1295 },
];

const plotsArchway = [
  { id: "aw1", top: 550, left: 570 },
  { id: "aw2", top: 675, left: 520 },
  { id: "aw3", top: 585, left: 650 },
  { id: "aw4", top: 635, left: 718 },
  { id: "aw5", top: 705, left: 700 },
];

const plotsDen = [
  { id: "dn1", top: 600, left: 860 },
  { id: "dn2", top: 575, left: 920 },
  { id: "dn3", top: 680, left: 900 },
  { id: "dn4", top: 685, left: 965 },
  { id: "dn5", top: 660, left: 1050 },
];

const plotsDigsite = [
  { id: "ds1", top: 517, left: 1285 },
  { id: "ds2", top: 650, left: 1267 },
  { id: "ds3", top: 705, left: 1267 },
  { id: "ds4", top: 741, left: 1321 },
];

const freeRange = [
  { id: "frGu", top: 350, left: 520 },
  { id: "frTp", top: 350, left: 858 },
  { id: "frCv", top: 140, left: 1395 },
  { id: "frAw", top: 525, left: 718 },
  { id: "frDn", top: 525, left: 1046 },
  { id: "frDs", top: 525, left: 1395 },
];

const areas = [
  {
    name: "The Gully",
    image: "areas/gully.png",
    areaMap: "./gully.png",
    color: "rgba(212, 128, 35, 1)",
  },
  {
    name: "The Tidepools",
    image: "areas/tidepools.png",
    areaMap: "./tidepools.png",
    color: "rgba(241, 93, 155, 1)",
  },
  {
    name: "The Conservatory",
    image: "areas/conservatory.png",
    areaMap: "./conservatory.png",
    color: "rgba(5, 92, 163, 1)",
  },
  {
    name: "The Archway",
    image: "areas/archway.png",
    areaMap: "./archway.png",
    color: "rgba(204, 212, 250, 1)",
  },
  {
    name: "The Den",
    image: "areas/den.png",
    areaMap: "./den.png",
    color: "rgba(123, 104, 255, 1)",
  },
  {
    name: "The Digsite",
    image: "areas/digsite.png",
    areaMap: "./digsite.png",
    color: "rgba(145, 126, 171, 1)",
  },
];

const STORAGE_KEY = 'sr2-planner-data';

const saveToLocalStorage = (plotPlans) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(plotPlans));
  } catch (error) {
    console.error('Failed to save to localStorage:', error);
  }
};

const loadFromLocalStorage = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : {};
  } catch (error) {
    console.error('Failed to load from localStorage:', error);
    return {};
  }
};


const AreaCard = ({ area, index }) => (
  <Grid item xs={4} key={area.name} size={1}>
    <Card>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          background: area.color,
          pb: index === 0 ? "0px" : undefined,
        }}
      >
        <Container sx={{
          display: "flex",
          flexDirection: "row",
          background: area.color,
        }}>
          <CardMedia
            component="img"
            alt={area.name}
            sx={{ padding: "0", width: "40px", objectFit: "contain", marginRight: "10px" }}
            image={require(`../../../public/images/${area.image}`)}
          />
          <Typography
            variant="body1"
            align="center"
            sx={{
              background: "rgba(255, 255, 255, .5)",
              padding: "2px",
              lineHeight: 2,
              alignContent: "center",
              width: "150px",
            }}
          >
            {area.name}
          </Typography>
        </Container>
        <CardMedia
          component="img"
          alt={`${area.name} area map`}
          sx={{ 
            padding: "0", 
            width: "300px", 
            objectFit: "contain", 
            alignSelf: index === 0 ? "center" : undefined,
            marginRight: index === 0 ? undefined : "10px" 
          }}
          image={require(`${area.areaMap}`)}
        />
      </CardContent>
    </Card>
  </Grid>
);

export default function Planner() {
  const [plotPlans, setPlotPlans] = useState({});

  // Load data from localStorage on component mount
  useEffect(() => {
    const savedPlans = loadFromLocalStorage();
    setPlotPlans(savedPlans);
  }, []);

  // Save to localStorage whenever plotPlans changes
  useEffect(() => {
    saveToLocalStorage(plotPlans);
  }, [plotPlans]);

  // Function to update a plot's plan
  const updatePlotPlan = (plotId, planData) => {
    setPlotPlans(prev => ({
      ...prev,
      [plotId]: planData
    }));
  };


  return (
    <div>

      {/* Area Cards */}
      <div>
        <Grid
          columns={3}
          container
          spacing={1}
          sx={{
            width: "1000px",
          }}
        >
          {areas.map((area, index) => (
            <AreaCard key={area.name} area={area} index={index} />
          ))}
        </Grid>
      </div>

      {/* Plot Components */}
      {plotsGully.map((plot) => (
        <Plot 
          key={plot.id} 
          plot={plot} 
          savedPlan={plotPlans[plot.id]}
          onPlanUpdate={(planData) => updatePlotPlan(plot.id, planData)}
        />
      ))}
      {plotsTidepools.map((plot) => (
        <Plot 
          key={plot.id} 
          plot={plot} 
          savedPlan={plotPlans[plot.id]}
          onPlanUpdate={(planData) => updatePlotPlan(plot.id, planData)}
        />
      ))}
      {plotsConservatory.map((plot) => (
        <Plot 
          key={plot.id} 
          plot={plot} 
          savedPlan={plotPlans[plot.id]}
          onPlanUpdate={(planData) => updatePlotPlan(plot.id, planData)}
        />
      ))}
      {plotsArchway.map((plot) => (
        <Plot 
          key={plot.id} 
          plot={plot} 
          savedPlan={plotPlans[plot.id]}
          onPlanUpdate={(planData) => updatePlotPlan(plot.id, planData)}
        />
      ))}
      {plotsDen.map((plot) => (
        <Plot 
          key={plot.id} 
          plot={plot} 
          savedPlan={plotPlans[plot.id]}
          onPlanUpdate={(planData) => updatePlotPlan(plot.id, planData)}
        />
      ))}
      {plotsDigsite.map((plot) => (
        <Plot 
          key={plot.id} 
          plot={plot} 
          savedPlan={plotPlans[plot.id]}
          onPlanUpdate={(planData) => updatePlotPlan(plot.id, planData)}
        />
      ))}
      {freeRange.map((plot) => (
        <FreeRange 
          key={plot.id} 
          plot={plot} 
          savedPlan={plotPlans[plot.id]}
          onPlanUpdate={(planData) => updatePlotPlan(plot.id, planData)}
        />
      ))}
    </div>
  );
}
