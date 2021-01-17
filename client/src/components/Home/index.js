import React from 'react';
import PropTypes from 'prop-types';
import kaiImage from '../../images/kai.PNG';
import zenImage from '../../images/zen.PNG';
import gratitudeImage from '../../images/gratitude.png';
import backgroundImage from '../../images/background.jpg';
import { TextField, Button, Typography, Grid, Hidden, Container, props, handleSubmit, Card } from '@material-ui/core';
import useStyles from './style';

function Home() {
const classes = useStyles();

  return (
    <section id="home">
    <header>
    <div className="row banner">
       <div className="banner-text">
          <h1 className="responsive-headline">KAIZEN</h1>
          <h3 style={{color:'#fff', fontFamily:'sans-serif '}}>Be Greatful and Get your Xen on!!!
          </h3>
       </div>
    </div>
    </header>
    </section>
    
  );
}

export default Home;
