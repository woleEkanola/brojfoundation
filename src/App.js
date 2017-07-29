import React, { Component } from 'react';

import Home from './pages/Home';
import About from './pages/About';
import BeautyPageant from './pages/BeautyPageant';
import CRHAwards from './pages/CRHAwards';
import ContactUs from './pages/ContactUs';
import Blog from './pages/Blog';
import PGNotFound from './pages/PGNotFound';

import {
  BrowserRouter as Router,
  Route, Switch
 
} from 'react-router-dom'

import './App.css';

class App extends Component {
  render() {
    return (
        <Router>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/beauty-pageant" component={BeautyPageant}/>
      <Route path="/cross-river-heritage-awards" component={CRHAwards}/>
      <Route path="/contact" component={ContactUs}/>
      <Route exact path="/blog" component={Blog}/>
       <Route component={PGNotFound}/>
    </Switch>
  </Router>
     
    );
  }
}

export default App;
