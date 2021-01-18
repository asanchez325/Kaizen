import React from 'react';
import PropTypes from 'prop-types';
import kaiImage from '../../images/kai.PNG';
import zenImage from '../../images/zen.PNG';
import gratitudeImage from '../../images/gratitude.png';
import { Typography, Grid, Hidden, Container, } from '@material-ui/core';
import useStyles from './style';

function About() {
const classes = useStyles();

  return (
    <section id="home">
    <section className={classes.root}>
    <Container className={classes.container}>
        <Grid item xs={12} md={6} className={classes.cardWrapper}>
          <div className={classes.card1}>
              <Typography variant="h3">
                Taste the holidays of the everyday close to home.
              </Typography>  
          </div>
        </Grid>
    </Container>
    </section>
    <section className={classes.root}>
    <Container className={classes.container}>
        <Typography
          variant="h4"
          marked="center"
          className={classes.title}
          component="h2"
        >
          How it works
        </Typography>
        <div>
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src={kaiImage} alt='kai'
                alt="suitcase"
              />
              <Typography variant="h6" className={classes.title}>
                The best luxury hotels
              </Typography>
              <Typography variant="h5">
                {
                  'From the latest trendy boutique hotel to the iconic palace with XXL pool'
                }

                {
                  ', go for a mini-vacation just a few subway stops away from your home.'
                }
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src={zenImage} alt='zen'
                alt="graph"
              />
              <Typography variant="h6" className={classes.title}>
                New experiences
              </Typography>
              <Typography variant="h5">
                {
                  'Privatize a pool, take a Japanese bath or wake up in 900m2 of garden… '
                }

                {'your Sundays will not be alike.'}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src={gratitudeImage} alt='gratitude'
              />
              <Typography variant="h6" className={classes.title}>
                Exclusive rates
              </Typography>
              <Typography variant="h5">
                {'By registering, you will access specially negotiated rates '}
                {'that you will not find anywhere else.'}
              </Typography>
            </div>
          </Grid>
        </Grid>
      </div>
      </Container>
    </section>
    <section className={classes.root3}>
    <Container className={classes.container3}>
        <Typography
          variant="h4"
          marked="center"
          className={classes.title3}
          component="h2"
        >
          Meet Our Team
        </Typography>
        <div>
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <div className={classes.item3}>
              <img
                className={classes.image3}
                src={kaiImage} alt='kai'
                alt="suitcase"
              />
              <Typography variant="h6" className={classes.title3}>
                The best luxury hotels
              </Typography>
              <Typography variant="h5">
                {
                  'From the latest trendy boutique hotel to the iconic palace with XXL pool'
                }

                {
                  ', go for a mini-vacation just a few subway stops away from your home.'
                }
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item3}>
              <img
                className={classes.image3}
                src={zenImage} alt='zen'
                alt="graph"
              />
              <Typography variant="h6" className={classes.title3}>
                New experiences
              </Typography>
              <Typography variant="h5">
                {
                  'Privatize a pool, take a Japanese bath or wake up in 900m2 of garden… '
                }

                {'your Sundays will not be alike.'}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item3}>
              <img
                className={classes.image3}
                src={gratitudeImage} alt='gratitude'
              />
              <Typography variant="h6" className={classes.title3}>
                Exclusive rates
              </Typography>
              <Typography variant="h5">
                {'By registering, you will access specially negotiated rates '}
                {'that you will not find anywhere else.'}
              </Typography>
            </div>
          </Grid>
        </Grid>
      </div>
      </Container>
    </section>
    
    </section>
  );
}

export default About;