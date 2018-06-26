import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from "./Components/NavBar";
import Logo from "./Components/Logo";
import HoodsTitle from "./Components/HoodsTitle";
import HoodImages from "./Components/HoodImages";
import Bio from "./Components/Bio";



class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <Logo/>
        <HoodsTitle/>
        <HoodImages/>
        <Bio/>
        
      </div>
    );
  }
}

export default App;
