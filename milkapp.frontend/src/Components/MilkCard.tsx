import { useEffect, useState } from "react";
import MilkInfo from "../Types/MilkInfo";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
} from "@mui/material";
import Item from "@mui/material/Grid";

interface IMilkInfo {
  data: MilkInfo;
}

const MilkCard = ({ data }: IMilkInfo) => {
  return (
    <>
      <Card>
        <CardContent>
          <CardMedia
            component="img"
            image="https://avatars.githubusercontent.com/u/795818?v=4"
            alt="Milkie"
          />
          <Typography variant="h6" component="div" m={2}>
            {data.name}
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={10}>
              <Item>
                <Typography align="left" variant="body2" color="text.secondary">
                  {data.type}
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={2}>
              <Item>
                <Typography align="right" variant="body2" color="text.secondary">
                  {data.storage} liter
                </Typography>
              </Item>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default MilkCard;
