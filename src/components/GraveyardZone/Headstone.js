import React from "react";
import "./Headstone.css";
import {
  CardMedia,
  Card,
  CardActionArea,
  Typography,
  CardContent,
} from "@material-ui/core";
import { Link } from "react-router-dom";

function Headstone(props) {
  const { img, name } = props;

  return (
    <Link to={{ pathname: `cemetery/${name}` }}>
      <Card className="headstone">
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Headstone Image"
            height="10%"
            image={img}
            title="Headstone Image"
          />
          <CardContent>
            <Typography component="p">{name}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}

export default Headstone;
