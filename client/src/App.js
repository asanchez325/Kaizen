import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';


import Home from './components/Home';
import About from './components/About/About';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { getPosts } from './actions/posts';
import useStyles from './styles';
import SignIn from './components/Login/Login';
import SignUp from './components/Login/Signup';


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
      case "about":
        return <About />;
      case "signIn":
        return <SignIn />;
        case "signUp":
          return <SignUp />;
			case "posts":
				return <Posts setCurrentId={setCurrentId} />;
			case "form":
				return <Form setCurrentId={setCurrentId} />;
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

export default App;