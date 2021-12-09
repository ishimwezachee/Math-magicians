import React from 'react';
import Calculator from './components/Calculator';
import Navbar from './components/navBar';
import Home from './components/home';
import Quote from './components/quote';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Home />
    <Quote />
    <Calculator />
  </div>
);

export default App;
