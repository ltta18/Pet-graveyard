import React from "react";
import {
  CardMedia,
  Card,
  CardActionArea,
  Typography,
  CardContent,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import "./Headstone.css";

function Headstone(props) {
  const { img, name, id } = props;

  return (
    <Link className="headstone" to={{ pathname: `cemetery/${id}` }}>
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
