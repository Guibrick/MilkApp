import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import React, { useState } from "react";
import MilkInfo from "../Types/MilkInfo";
import MilkCard from "./MilkCard";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  TextField,
} from "@mui/material";
import { Category } from "@mui/icons-material";

interface IFilter {
  data: MilkInfo[];
}

const MilkFilter = ({ data }: IFilter) => {
  const [info, setInfo] = useState(data);
  const [name, setName] = useState("");
  const categories = [
    "Cashew milk",
    "Pea milk",
    "Walnut milk",
    "Rice milk",
    "Coconut milk",
    "Hemp milk",
    "Almond milk",
    "Oat milk",
    "Macadamia milk",
    "All kind of milks",
  ];

  const filterMilk = (type: string) => {
    const results = () => data.filter((m) => m.type === type);
    setInfo(results);
  };

  const handleFilter = (item: string) => {
    if (item === "All kind of milks") {
      setInfo(data);
    } else {
      filterMilk(item);
    }
  };

  let milks;

  if (name) {
    milks = info.filter((p) => p.name.toLowerCase().includes(name));
  } else {
    milks = info;
  }

  return (
    <>
      <Grid
        container
        spacing={{ xs: 2, md: 2 }}
        columns={{ xs: 4, sm: 8, m: 5 }}
      >
        <Grid item xs={10} sm={4} ml={5}>
          <Item>
            <TextField
              sx={{ minWidth: 300 }}
              type="text"
              variant="standard"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Search by name"
            />
          </Item>
        </Grid>

        <Grid item xs={10} sm={4} ml={5}>
          <Item>
            <FormControl sx={{ minWidth: 300 }}>
              <InputLabel>Types</InputLabel>
              <Select id="demo-simple-select" label="Types" defaultValue= {"All kind of milks"}>
                {categories.map((category, index) => (
                  <MenuItem onClick={() => handleFilter(category)} key={index}>
                    {category}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Item>
        </Grid>

        <Grid
          container
          spacing={{ xs: 6, m: 15 }}
          sx={{ width: 5 }}
          m={10}
          p={10}
        >
          {milks.map((milk, index) => (
            <Grid item xs={5} sm={4} md={4}>
              <Item>
                <MilkCard data={milk} key={index} />
              </Item>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  );
};
export default MilkFilter;
