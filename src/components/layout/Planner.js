import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Expansion from "../planning/Expansion";
import Conservatory from "../planning/Conservatory";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function Planner() {
  return (
    <Grid container spacing={3} width="100%">
      <Grid item xs={6}>
        <Card>
          <CardContent>
            <Typography variant="body1" fontWeight="medium" gutterBottom>
              The Gully
            </Typography>
            <Expansion />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Card>
          <CardContent>
            <Typography variant="body1" fontWeight="medium" gutterBottom>
              The Tidepools
            </Typography>
            <Expansion />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Card>
          <CardContent>
            <Typography variant="body1" fontWeight="medium" gutterBottom>
              The Conservatory
            </Typography>
            <Conservatory />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Card>
          <CardContent>
            <Typography variant="body1" fontWeight="medium" gutterBottom>
              The Archway
            </Typography>
            <Expansion />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Card>
          <CardContent>
            <Typography variant="body1" fontWeight="medium" gutterBottom>
              The Den
            </Typography>
            <Expansion />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Card>
          <CardContent>
            <Typography variant="body1" fontWeight="medium" gutterBottom>
              The Digsite
            </Typography>
            <Expansion />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
