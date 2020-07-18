import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/home/Home'
import SellCars from './components/sellingCars/SellCars'
import BuyCars from './components/buyCars/BuyCars'
import Message from './components/message/Message'
import Mine from './components/mine/Mine'


function App() {
  return (
    <Router>
      <Route path='/' exact component={Home}/>
      <Route path='/sell/'  component={SellCars}/>
      <Route path='/buy/'  component={BuyCars}/>
      <Route path='/message/'  component={Message}/>
      <Route path='/mine/'  component={Mine}/>
    </Router>
  );
}

export default App;
