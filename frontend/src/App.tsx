import { Component } from "react";
import "./App.css";
import "antd/dist/antd.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./page/Profile";
import Navbar from "./components/Navbar";
import { Home } from "./page/Home";
import { DetailsItem } from "./page/DetailsItem";
import { CreateItemPage } from "./page/CreateItemPage";
import { WalletPage } from "./page/WalletPage";
import { Register } from "./page/Register";
import { Login } from "./page/Login";
import { FooterPage } from "./page/FooterPage";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/wallet" element={<WalletPage />}></Route>
          <Route path="/create-item" element={< CreateItemPage />}></Route>
          <Route path="/details-item" element={<DetailsItem />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
        <FooterPage />
      </BrowserRouter>
    );
  }
}

export default App;
