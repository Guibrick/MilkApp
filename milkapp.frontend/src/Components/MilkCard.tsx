import { useEffect, useState } from "react";
import MilkInfo from "../Types/MilkInfo";
import { Box, Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";
import Item from "@mui/material/Grid";

function MilkCard() {
  const [productData, setProductData] = useState<MilkInfo[]>([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("https://localhost:7149/api/Milk");
      const productResults = await response.json();
      setProductData(productResults);
    };
    getData();
  }, []);

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        mt={15}
      >
        <Grid
          container
          spacing={{ xs: 6, md: 3 }}
          xs={10}
          justifyItems="center"
        >
          {productData.map((p) => (
            <Grid item xs={10} sm={4} md={4}>
              <Item>
                <Card>
                  <CardContent>
                    <CardMedia
                      component="img"
                      image="https://avatars.githubusercontent.com/u/795818?v=4"
                      alt="Milkie"
                      title="Milkie"
                    />
                    <Typography variant="h6" component="div" m={2}>
                      {p.name}
                    </Typography>
                    <Grid container spacing={2}>
                      <Grid item xs={10}>
                        <Item>
                          <Typography
                            align="left"
                            variant="body2"
                            color="text.secondary"
                          >
                            {p.type}
                          </Typography>
                        </Item>
                      </Grid>
                      <Grid item xs={2}>
                        <Item>
                          <Typography
                            align="right"
                            variant="body2"
                            color="text.secondary"
                          >
                            {p.storage}
                          </Typography>
                        </Item>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}

export default MilkCard;
