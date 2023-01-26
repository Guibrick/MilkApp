import { Box, Typography } from "@mui/material";
import React from "react";
import MilkCard from "./Components/MilkCard";

function App() {
  return (
    <>
      <Box sx={{ width: "100%", maxWidth: 1500 }}>
        <Typography align="center" variant="h1" m={5}>
          THE MILK STORE
        </Typography>
      </Box>
      <MilkCard />
    </>
  );
}

export default App;
