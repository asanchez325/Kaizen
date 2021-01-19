import React from 'react';
import useStyles from './style';

function Footer() {
    const classes = useStyles();
  return (
<footer className= {classes.footer}>
    <h1>Thank you for visiting!</h1>
</footer>
  );
}
export default Footer;