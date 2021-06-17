// Package import
import React from 'react';
import { Route } from 'react-router-dom';


// local import
// Components
import Header from '../Header';
import Home from '../Home';
import Opportunities from '../Opportunities';
import Solutions from '../Solutions';
import Contact from '../Contact';


const App = () => {

  return (
    <div className="App">
      <Header />
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/opportunities'>
          <Opportunities />
        </Route>
        <Route exact path='/solutions'>
          <Solutions />
        </Route>
        <Route exact path='/contact'>
          <Contact />
        </Route>
    </div>
  );
}



export default App;
