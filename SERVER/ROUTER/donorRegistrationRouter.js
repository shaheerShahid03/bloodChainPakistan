const express = require("express");
const {
  addDonor,
  allDonors,
  deleteDonor,
} = require("../CONTROLLER/donorRegistrationController");
const donorRegistrationRoutes = express.Router();

//REGISTRATON
donorRegistrationRoutes.post("/add_donor", addDonor);
donorRegistrationRoutes.get("/all_donor", allDonors);
donorRegistrationRoutes.delete("/delete/:id", deleteDonor);

module.exports = donorRegistrationRoutes;
