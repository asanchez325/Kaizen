import React from 'react';
import useStyles from './style';
import { Typography, Grid, Hidden, Container, } from '@material-ui/core';

function Footer() {
    const classes = useStyles();
  return (
<footer className= {classes.footer}>
   <div className={classes.background}>
    <Typography
          variant="h2"
          marked="center"
          className={classes.title}
          component="h1">
        Thank you for visiting Kaizen!!
    </Typography>  
    </div>
</footer>
  );
}
export default Footer;