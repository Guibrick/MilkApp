
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import React from "react";
import MilkCard from "../Components/MilkCard";

function MilkGrid() {
  return (
    <div>
      <Grid
        container
        spacing={{ xs: 4, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {Array.from(Array(6)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Item><MilkCard /></Item>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default MilkGrid;
