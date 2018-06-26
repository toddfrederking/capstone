import app from "../app.js";

let express = require("express");
const mongoose = require ("mongoose");


const tshirtRoutes = ("./Routes/tshirtroutes");


mongoose.Promise = global.Promise;
mongoose.connect("mongodb://toddfrederking:Lgarrett1970@ds163680.mlab.com:63680/capstone0618");
console.log("connection successful");




app.use(express.static("public"));
// app.use(tshirtRoutes);

app.listen(3002, (err) => {
if (err) {
  return console.log("Error", err);
}
console.log("Web server is now living in apartment 3002(really)");
});
