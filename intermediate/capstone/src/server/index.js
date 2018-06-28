const express = require("express");
const mongoose = require ("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://toddfrederking:Lgarrett1970@ds163680.mlab.com:63680/capstone0618");
console.log("connection successful");

const app = express();
 
const bodyParser = require("body-parser");
app.use(bodyParser.json());

const tshirtRoutes = require ("./Routes/tshirtroutes");

app.use(tshirtRoutes);

app.listen(3001, (err) => {
  if (err) {
    return console.log("Error", err);
  }
  console.log("Web server is now living in apartment 3001(really)");
  });

