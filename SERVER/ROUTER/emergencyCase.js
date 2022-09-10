const express = require("express");
const {
  addEmergencyCase,
  selectDonor,
} = require("../CONTROLLER/emergencyCase.js");
const { getAllDonors } = require("../CONTROLLER/readyForDonations");
const emergencyCaseRouter = express.Router();

emergencyCaseRouter.post("/add_emergency_case", addEmergencyCase);
emergencyCaseRouter.get("/get_emergency_cases", getAllDonors);
emergencyCaseRouter.get("/check/:id", selectDonor);

module.exports = emergencyCaseRouter;
