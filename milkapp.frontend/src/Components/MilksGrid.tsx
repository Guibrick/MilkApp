import { Card, CardContent, CardMedia, Grid } from "@mui/material";
import Item from "@mui/material/Grid";
import React, { useState } from "react";
import MilkInfo from "../Types/MilkInfo";
import MilkCard from "./MilkCard";

interface IMilksInfo {
  data: MilkInfo[];
}

const MilksGrid = ({ data }: IMilksInfo) => {

  return (
    <>
      <Grid container spacing={{ xs: 6, md: 3 }} sx={{width: 5}} justifyItems="center">
        {data.map((p) => (
          <Grid item xs={10} sm={4} md={4}>
            <Item>
              <MilkCard data={p} />
            </Item>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default MilksGrid;
