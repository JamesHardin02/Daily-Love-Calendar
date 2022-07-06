import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardHeader } from '@mui/material';



export default function Calendar(props) {
  if (props.name === "Happy Mother's Day") {
    return (
        <Card sx={{ margin: 0 }}>
            <CardHeader
            component={Typography}
            title={props.name}
            textAlign="center"
            >
            </CardHeader>
            <CardMedia
                component="img"
                style={{ height: 900 }}
                src={props.calendar_img}
                alt={props.name}
            />
            <CardContent sx={{ display: "flex", justifyContent: "center"}}>
                <Typography gutterBottom variant="h5" component="div" textAlign="center">
                    {props.quote}
                </Typography>
            </CardContent>
        </Card>
    );
  }
}
