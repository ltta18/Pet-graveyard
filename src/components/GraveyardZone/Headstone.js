import React from 'react';
import './Headstone.css';
import { CardMedia, Card, CardActionArea, Typography, CardContent } from '@material-ui/core';

function Headstone(props) {
  const { img, name } = props

  return (
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
        <Typography component="p" variant="name">{name}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Headstone