import React from 'react';
import Cover from '../components/Cover'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import covers from '../components/Cover/covers.json';

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
          {covers.map((work) => (
          <Cover key={work.id} name={work.name} cover_img={work.cover_img}/>
        ))}
      </Grid>
    </section>
  )
}