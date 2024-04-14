const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/CursoUTN")
  .then(() => {
    console.log("I'm in.");
  })
  .catch((error) => console.log(error));

module.exports = mongoose