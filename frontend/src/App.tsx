import React, {Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';

import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from "./components/home"
class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}>
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
