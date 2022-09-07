const express = require("express");
const { addEmergencyCase } = require("../CONTROLLER/emergencyCase.js");
const {
  getAllDonors,
  deleteDonor,
} = require("../CONTROLLER/readyForDonations");
const emergencyCaseRouter = express.Router();

emergencyCaseRouter.post("/add_emergency_case", addEmergencyCase);
emergencyCaseRouter.get("/get_emergency_cases", getAllDonors);

module.exports = emergencyCaseRouter;
