import * as React from "react";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

const areas = [
  {
    name: "The Gully",
    image: "areas/gully.png",
    color: "rgba(192, 127, 48, 1)",
  },
  {
    name: "The Tidepools",
    image: "areas/tidepools.png",
    color: "rgba(211, 93, 152, 1)",
  },
  {
    name: "The Conservatory",
    image: "placeholder.png",
    color: "rgba(53, 92, 160, 1)",
  },
  {
    name: "The Archway",
    image: "areas/archway.png",
    color: "rgba(205, 210, 249, 1)",
  },
  {
    name: "The Den",
    image: "areas/den.png",
    color: "rgba(116, 103, 248, 1)",
  },
  {
    name: "The Digsite",
    image: "areas/digsite.png",
    color: "rgba(120, 108, 144, 1)",
  },
];

export default function FavFoods() {
  return (
    <div>
      <Grid
        container
        spacing={1}
        sx={{
          minWidth: "460px",
        }}
      >
        <Grid item xs={6}>
          <Card>
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "row",
                background: "rgba(192, 127, 48, 1)",
              }}
            >
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
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "row",
                background: "rgba(211, 93, 152, 1)",
              }}
            >
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
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "row",
                background: "rgba(53, 92, 160, 1)",
              }}
            >
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
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "row",
                background: "rgba(205, 210, 249, 1)",
              }}
            >
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
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "row",
                background: "rgba(116, 103, 248, 1)",
              }}
            >
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
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "row",
                background: "rgba(120, 108, 144, 1)",
              }}
            >
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
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
