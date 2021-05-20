import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import ContactUs from './components/ContactUs';
import Listing from './components/Listing';
import Home from './components/Home';
import Watchlist from './components/Watchlist';


function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/Listing' component={Listing} />
        <Route path='/contactus' component={ContactUs} /> 
        <Route path='/signup' component={Signup} />
        <Route path='/login' component={Login} />
        <Route path='/watchlist' component={Watchlist} />
      </Switch>
    </Router>
    
    
    </div>
  );
}

export default App;
  