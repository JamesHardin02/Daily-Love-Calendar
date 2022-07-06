import React from 'react';
import Calendar from '../components/Calendar'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import calendars from '../components/Calendar/calendars.json';

export default function Calendars(){
  return(
    <section className="container">
      <Typography gutterBottom variant="h2" component="div" textAlign="center">
        Calendars
      </Typography>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
          {calendars.map((work) => (
          <Calendar key={work.id} name={work.name} cover_img={work.cover_img}/>
        ))}
      </Grid>
    </section>
  )
}