import React from 'react';
import useStyles from './style';
import { Typography, Grid, Hidden, Container, } from '@material-ui/core';

function Footer() {
    const classes = useStyles();
  return (
<footer className= {classes.footer}>
   <div className={classes.background}>
    <Typography
          variant="h4"
          marked="center"
          className={classes.title}
          component="h2">
        Thank you for visiting Kaizen!!
    </Typography>  
    </div>
</footer>
  );
}
export default Footer;