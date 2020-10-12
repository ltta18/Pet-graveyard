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
    <Link className="headstone" to={{ pathname: `cemetery/${name}` }}>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Headstone Image"
            height="200px"
            image={img}
            title="Headstone Image"
          />
          <CardContent>
            <Typography component="div" className="grave-name">
              {name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}

export default Headstone;
