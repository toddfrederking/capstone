import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
const express = require("express");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

// mongoose.Promise = global.Promise;
mongoose.connect("mongodb://toddfrederking:Lgarrett1970@ds163680.mlab.com:63680/capstone0618");
console.log("connection successful");

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
