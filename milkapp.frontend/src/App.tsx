import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import MilkInfo from "./Types/MilkInfo";
import MilkFilter from "./Components/MilkFilter";
import "./App.css";


function App() {
  const [milks, setMilks] = useState<MilkInfo[]>([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("https://localhost:7149/api/Milk");
      const productResults = await response.json();
      setMilks(productResults);
    };
    getData();
  }, []);

  return (
    <>
      <Box sx={{ width: "100%", maxWidth: 1500 }} color="White" mt={10} mb={10}>
        <Typography align="center" variant="h1" m={5}>
          THE MILK STORE
        </Typography>
      </Box>
      <Typography fontFamily="Helvetica" color="rgb(70, 73, 76)" ml={158}>
        {milks.length} products
      </Typography>
      <MilkFilter data={milks}/>
    </>
  );
}

export default App;
