import React from 'react';
import Home from './components/Home';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {

  return (
    <div>
        <Nav />
      <main>
          <Home />        
      </main>
      <Footer />
    </div>
  );
}

export default App;
