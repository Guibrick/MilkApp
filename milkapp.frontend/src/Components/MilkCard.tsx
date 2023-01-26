import { useEffect, useState } from "react";
import MilkInfo from "../Types/MilkInfo";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";

function MilkCard() {
  const [productData, setProductData] = useState<MilkInfo[]>([]);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [storage, setStorage] = useState(0);

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
      {productData.map((p) => (
        <Card sx={{ maxWidth: 345 }}>
          <CardContent>
            <CardMedia
              component="img"
              image="https://scontent-arn2-1.xx.fbcdn.net/v/t39.30808-6/308109550_456331879823052_8294891194759821237_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=FdDrLyQ96_4AX8Qb_IS&_nc_ht=scontent-arn2-1.xx&oh=00_AfBKRo4ExsSa8wAigeCYJgGooqyZwC-UiX9_5iM5Lq1vKQ&oe=63D80570"
              alt="CardMedia Image Example"
              height="small"
              width="small"
              title="CardMedia Image Example"
            />
            <Typography gutterBottom variant="h5" component="div">
              {p.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {p.type}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {p.storage}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      ))}
    </>
  );
}

export default MilkCard;
