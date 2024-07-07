import * as React from "react";
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
  { id: "tp2", top: 150, left: 1000 },
  { id: "tp3", top: 260, left: 950 },
  { id: "tp4", top: 260, left: 1015 },
  { id: "tp5", top: 350, left: 1000 },
];

const plotsConservatory = [
  { id: "cv1", top: 140, left: 1180 },
  { id: "cv2", top: 140, left: 1235 },
  { id: "cv3", top: 295, left: 1390 },
  { id: "cv4", top: 350, left: 1390 },
  { id: "cv5", top: 295, left: 1235 },
  { id: "cv6", top: 350, left: 1180 },
  { id: "cv7", top: 350, left: 1235 },
  { id: "cv8", top: 350, left: 1290 },
];

const plotsArchway = [
  { id: "aw1", top: 557, left: 570 },
  { id: "aw2", top: 685, left: 520 },
  { id: "aw3", top: 590, left: 652 },
  { id: "aw4", top: 645, left: 718 },
  { id: "aw5", top: 715, left: 700 },
];

const plotsDen = [
  { id: "dn1", top: 608, left: 858 },
  { id: "dn2", top: 582, left: 915 },
  { id: "dn3", top: 690, left: 897 },
  { id: "dn4", top: 692, left: 960 },
  { id: "dn5", top: 667, left: 1046 },
];

const plotsDigsite = [
  { id: "ds1", top: 525, left: 1275 },
  { id: "ds2", top: 657, left: 1262 },
  { id: "ds3", top: 710, left: 1262 },
  { id: "ds4", top: 748, left: 1315 },
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
    areaMap:"./gully.png",
    color: "rgba(212, 128, 35, 1)",
  },
  {
    name: "The Tidepools",
    image: "areas/tidepools.png",
    areaMap:"./tidepools.png",
    color: "rgba(241, 93, 155, 1)",
  },
  {
    name: "The Conservatory",
    image: "areas/conservatory.png",
    areaMap:"./conservatory.png",
    color: "rgba(5, 92, 163, 1)",
  },
  {
    name: "The Archway",
    image: "areas/archway.png",
    areaMap:"./archway.png",
    color: "rgba(204, 212, 250, 1)",
  },
  {
    name: "The Den",
    image: "areas/den.png",
    areaMap:"./den.png",
    color: "rgba(123, 104, 255, 1)",
  },
  {
    name: "The Digsite",
    image: "areas/digsite.png",
    areaMap:"./digsite.png",
    color: "rgba(145, 126, 171, 1)",
  },
];

export default function Planner() {
  return (
    <div>
        <div>
          <Grid
            container
            spacing={1}
            sx={{
              width: "1000px",
            }}
          >
            <Grid item xs={4}>
              <Card>
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    background: "rgba(212, 128, 35, 1)",
                    pb: "0px"
                  }}
                >
                <Container sx={{
                    display: "flex",
                    flexDirection: "row",
                    background: "rgba(212, 128, 35, 1)",
                }}>
                  <CardMedia
                    component="img"
                    alt={areas[0].name}
                    sx={{ padding: "0", width: "40px", objectFit: "contain", marginRight: "10px" }}
                    image={require(`../../../public/images/${areas[0].image}`)}
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
                    {areas[0].name}
                  </Typography>
                  </Container>
                 <CardMedia
                    component="img"
                    alt={`${areas[0].name} area map`}
                    sx={{ padding: "0", width: "300px", objectFit: "contain", alignSelf: "center" }}
                    image={require(`./gully.png`)}
                  />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card>
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    background: "rgba(241, 93, 155, 1)",
                  }}
                >
                                <Container sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    background: "rgba(241, 93, 155, 1)",
                                }}>
                  <CardMedia
                    component="img"
                    alt={areas[0].name}
                    sx={{ padding: "0", width: "40px", objectFit: "contain", marginRight: "10px" }}
                    image={require(`../../../public/images/${areas[1].image}`)}
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
                    {areas[1].name}
                  </Typography>
                                    </Container>

                                   <CardMedia
                                      component="img"
                                      alt={`${areas[1].name} area map`}
                                      sx={{ padding: "0", width: "300px", objectFit: "contain", marginRight: "10px" }}
                                      image={require(`./tidepools.png`)}
                                    />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card>
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    background: "rgba(5, 92, 163, 1)",
                  }}
                >
                               <Container sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    background: "rgba(5, 92, 163, 1)",
                                }}>
                  <CardMedia
                    component="img"
                    alt={areas[2].name}
                    sx={{ padding: "0", width: "40px", objectFit: "contain", marginRight: "10px" }}
                    image={require(`../../../public/images/${areas[2].image}`)}
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
                    {areas[2].name}
                  </Typography>
                                  </Container>
                                   <CardMedia
                                      component="img"
                                      alt={`${areas[2].name} area map`}
                                      sx={{ padding: "0", width: "300px", objectFit: "contain", marginRight: "10px" }}
                                      image={require(`./conservatory.png`)}
                                    />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card>
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    background: "rgba(204, 212, 250, 1)",
                  }}
                >
                                <Container sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    background: "rgba(204, 212, 250, 1)",
                                }}>
                  <CardMedia
                    component="img"
                    alt={areas[3].name}
                    sx={{ padding: "0", width: "40px", objectFit: "contain", marginRight: "10px" }}
                    image={require(`../../../public/images/${areas[3].image}`)}
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
                    {areas[3].name}
                  </Typography>
                                    </Container>
                                   <CardMedia
                                      component="img"
                                      alt={`${areas[3].name} area map`}
                                      sx={{ padding: "0", width: "300px", objectFit: "contain", marginRight: "10px" }}
                                      image={require(`./archway.png`)}
                                    />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card>
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    background: "rgba(123, 104, 255, 1)",
                  }}
                >
                                <Container sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    background: "rgba(123, 104, 255, 1)",
                                }}>
                  <CardMedia
                    component="img"
                    alt={areas[4].name}
                    sx={{ padding: "0", width: "40px", objectFit: "contain", marginRight: "10px" }}
                    image={require(`../../../public/images/${areas[4].image}`)}
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
                    {areas[4].name}
                  </Typography>
                                    </Container>
                                   <CardMedia
                                      component="img"
                                      alt={`${areas[4].name} area map`}
                                      sx={{ padding: "0", width: "300px", objectFit: "contain", marginRight: "10px" }}
                                      image={require(`./den.png`)}
                                    />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card>
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    background: "rgba(145, 126, 171, 1)",
                  }}
                >
                                <Container sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    background: "rgba(145, 126, 171, 1)",
                                }}>
                  <CardMedia
                    component="img"
                    alt={areas[5].name}
                    sx={{ padding: "0", width: "40px", objectFit: "contain", marginRight: "10px" }}
                    image={require(`../../../public/images/${areas[5].image}`)}
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
                    {areas[5].name}
                  </Typography>
                                   </Container>
                                   <CardMedia
                                      component="img"
                                      alt={`${areas[5].name} area map`}
                                      sx={{ padding: "0", width: "300px", objectFit: "contain", marginRight: "10px" }}
                                      image={require(`./digsite.png`)}
                                    />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>

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
