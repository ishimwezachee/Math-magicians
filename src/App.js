import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navBar';
import Home from './components/home';
import Calculator from './components/Calculator';
import Quote from './components/quote';
import './App.css';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calc" element={<Calculator />} />
      <Route path="/quote" element={<Quote />} />
    </Routes>
  </>
);

export default App;
