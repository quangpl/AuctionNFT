import React, {Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import "antd/dist/antd.css";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from "../src/components/page/home"
import HeaderPage from './components/HeaderPage';
import WalletPage from './components/page/WalletPage';
import CreateItemPage from './components/page/CreateItemPage';
import DetailsItem from './components/page/DetailsItem';
import Login from './components/page/Login';
import Register from './components/page/Register';
import Profile from './components/page/Profile';
import Navbar from './components/Navbar';
import FooterPage from './components/page/FooterPage';


class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}>
          </Route>
          <Route path="/wallet" element={<WalletPage/>}>
          </Route>
          <Route path="/create-item" element={<CreateItemPage/>}>
          </Route>
          <Route path="/details-item" element={<DetailsItem/>}>
          </Route>
          <Route path="/login" element={<Login/>}>
          </Route>
          <Route path="/register" element={<Register/>}>
          </Route>
          <Route path="/profile" element={<Profile/>}>
          </Route>
        </Routes>
        <FooterPage/>
      </BrowserRouter>
    );
  }
}

export default App;
