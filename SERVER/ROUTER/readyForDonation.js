const express = require("express");
const {
  addDonor_readyForDonation,
  getAllDonors,
  deleteDonor,
} = require("../CONTROLLER/readyForDonations");

const readyForDonationRouter = express.Router();

readyForDonationRouter.post("/readytobleed", addDonor_readyForDonation);
readyForDonationRouter.get("/readytobleedall", getAllDonors);
readyForDonationRouter.delete("/delreadydonor/:id", deleteDonor);

module.exports = readyForDonationRouter;
