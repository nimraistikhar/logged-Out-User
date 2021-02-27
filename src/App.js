import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import { GlobalStyles } from './globalstyles';
import Login from './components/Login';
import Signup from './components/Singup';
import Team from './components/Team';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Route exact path="/" component={Home} />
      <Route path="/Login" component={Login} />
      <Route path="/Signup" component={Signup} />
      <Route path="/team" component={Team} />
      <Route path="/contact" component={Contact} />
  </Router>
  );
}

export default App;