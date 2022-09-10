const express = require("express");
const {
  addDonor_readyForDonation,
  getAllDonors,
} = require("../CONTROLLER/readyForDonations");

const readyForDonationRouter = express.Router();

readyForDonationRouter.post("/readytobleed", addDonor_readyForDonation);
readyForDonationRouter.get("/readytobleedall", getAllDonors);

module.exports = readyForDonationRouter;
