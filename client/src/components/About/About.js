import React from 'react';
import gratitudeImage from '../../images/gratitude.jpg';
import zenImage from '../../images/kaizen.jpg';
import togetherImage from '../../images/together.jpg';
import alannahImage from '../../images/alannah.jpg';
import jonImage from '../../images/jon.jpg';
import adeleImage from '../../images/adele.jpg';
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
                Life moves so quickly, take the time for gratitude. Kaizen offers a platform to commit to gratitude, share that gratitude with others and be inspired by others. 
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
                src={gratitudeImage} alt='gratitude'
                alt="suitcase"
              />
              <Typography variant="h6" className={classes.title}>
                Gratitude
              </Typography>
              <Typography variant="h5">
                {
                  'Expressing gratitude encourages positivity and mindfullness and has been proven to improve mental health'
                }
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src={zenImage} alt='kai'
                alt="kai"
              />
              <Typography variant="h6" className={classes.title}>
                Kaizen
              </Typography>
              <Typography variant="h5">
                {
                  'Kaizen means continuous improvement; Kai= Change, Zen= Good. This foundation is imbedded in many cultures, beliefs and frameworks. '
                }
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src={togetherImage} alt='together'
              />
              <Typography variant="h6" className={classes.title}>
                Putting it together
              </Typography>
              <Typography variant="h5">
                {'By actively and continuously expressing gratitude, we will encourage continuous improvement.'}
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
                src={alannahImage} alt='alannah'
              />
              <Typography variant="h6" className={classes.title3}>
                Alannah Sanchez
              </Typography>
              <Typography variant="h5">
                {
                  'Yoga Guru & Active Runner. Thankful for Family, Adventure and Good Brewerys'
                }
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item3}>
              <img
                className={classes.image3}
                src={jonImage} alt='jonathan'
              />
              <Typography variant="h6" className={classes.title3}>
                Jonathan Sanchez
              </Typography>
              <Typography variant="h5">
                {
                  'Zen Master and Mindfullnes Export. Thankful for nature, caffeine, and summer nights. '
                }
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item3}>
              <img
                className={classes.image3}
                src={adeleImage} alt='adele'
              />
              <Typography variant="h6" className={classes.title3}>
                Adele
              </Typography>
              <Typography variant="h5">
                {'Enlightenment Prodigy. Thankful for my humans, treats, and running. '}
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