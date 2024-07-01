import * as React from "react";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

const slimes = [
  { name: "Angler Slime", image: "slimes/angler.png", planned: false },
  { name: "Batty Slime", image: "slimes/batty.png", planned: false },
  { name: "Boom Slime", image: "slimes/boom.png", planned: false },
  { name: "Cotton Slime", image: "slimes/cotton.png", planned: false },
  { name: "Crystal Slime", image: "slimes/crystal.png", planned: false },
  { name: "Dervish Slime", image: "slimes/dervish.png", planned: false },
  { name: "Flutter Slime", image: "slimes/flutter.png", planned: false },
  { name: "Honey Slime", image: "slimes/honey.png", planned: false },
  { name: "Hunter Slime", image: "slimes/hunter.png", planned: false },
  { name: "Phosphor Slime", image: "slimes/phosphor.png", planned: false },
  { name: "Pink Slime", image: "slimes/pink.png", planned: false },
  { name: "Ringtail Slime", image: "slimes/ringtail.png", planned: false },
  { name: "Rock Slime", image: "slimes/rock.png", planned: false },
  { name: "Saber Slime", image: "slimes/saber.png", planned: false },
  { name: "Tabby Slime", image: "slimes/tabby.png", planned: false },
  { name: "Yolky Slime", image: "slimes/yolky.png", planned: false },
];

export default function PlanningOverview() {
  return (
    <div>
      <br />
      <Typography variant="body1" align="center">
        Planned Slimes Overview
      </Typography>

      <Typography variant="body2" align="center">
        This feature does not work yet! It's just a preview.
      </Typography>
      <br />

      <Grid
        container
        spacing={1}
        sx={{
          minWidth: "460px",
        }}
      >
        {slimes.map((row) => (
          <Grid item xs={4} key={row.name}>
            <Card elevation={0} >
              <CardContent sx={{ display: "flex", flexDirection: "row", padding: 0 }}>
                <CardMedia
                  component="img"
                  alt={row.name}
                  sx={{ padding: "0", width: "20px", objectFit: "contain", marginRight: "5px" }}
                  image={require(`../../../public/images/${row.image}`)}
                />
                <Typography
                  variant="caption"
                  align="center"
                  sx={{
                    padding: "2px",
                    lineHeight: 2,
                    alignContent: "center",
                  }}
                >
                  - not planned
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
