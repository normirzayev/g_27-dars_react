import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function LikeComponent(prop) {
  let { data } = prop;
  return (
    <>
      {data
        .filter((item) => item.like === true)
        .map((obj) => (
          <Card sx={{ maxWidth: 345 }} key={obj.id}>
            <CardMedia
              sx={{ height: 140 }}
              image={obj.rasm}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {obj.nomi}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {obj.haqida}
              </Typography>
            </CardContent>
          </Card>
        ))}
    </>
  );
}
