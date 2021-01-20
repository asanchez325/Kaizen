import React from 'react';
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