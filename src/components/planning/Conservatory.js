import * as React from "react";
import Grid from "@mui/material/Grid";
import Plot from "./Plot";
import FreeRange from "./FreeRange";

export default function Conservatory() {
  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <Plot plotName="Plot 1"></Plot>
        </Grid>
        <Grid item xs={4}>
          <Plot plotName="Plot 2"></Plot>
        </Grid>
        <Grid item xs={4}>
          <Plot plotName="Plot 3"></Plot>
        </Grid>
        <Grid item xs={4}>
          <Plot plotName="Plot 4"></Plot>
        </Grid>
        <Grid item xs={4}>
          <Plot plotName="Plot 5"></Plot>
        </Grid>
        <Grid item xs={4}>
          <Plot plotName="Plot 6"></Plot>
        </Grid>
        <Grid item xs={4}>
          <FreeRange plotName="Free range"></FreeRange>
        </Grid>
      </Grid>
    </div>
  );
}
