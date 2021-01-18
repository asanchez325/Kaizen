import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';


import Home from './components/Home';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { getPosts } from './actions/posts';
import useStyles from './styles';
import Zen from './images/ZEN.jpg';

function App() { 
  const [currentTab, setCurrentTab] = useState("home");
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);
  const renderTab = () => {
		switch (currentTab) {
      case "home":
        return <Home />;
			case "posts":
				return <Grid container justify="space-between" alignItems="stretch" spacing={3} item xs={3} >
        <Posts setCurrentId={setCurrentId} />
      </Grid>
			case "form":
				return <Container>
        <Grid container justify="space-between" alignItems="stretch" spacing={3}>
          <Grid item xs={12} sm={7}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
          
        </Grid>
      </Container>
			default:
				return null;
		}
	};

	return (
		<div>
			<div className="mobile-header">
				<Nav currentTab={currentTab} setCurrentTab={setCurrentTab}></Nav>
			</div>
			<div>
				<main>{renderTab()}</main>
			</div>
			<div>
				<Footer></Footer>
			</div>
		</div>
	);
}