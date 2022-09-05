const express = require("express");
const addDonor_Model = require("../MODAL/donorCollection.js");

const addDonor = async (req, res) => {
  console.log(req.body);
  const newDonor = await addDonor_Model.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    bloodGroup: req.body.bloodGroup,
    city: req.body.city,
    address: req.body.address,
    phoneNumber: req.body.phoneNumber,
  });
  console.log(newDonor);
  return res.status(210).json("Donor added successfully");
};

const allDonors = async (req, res) => {
  const donor = await addDonor_Model.find();
  return res.status(200).json(donor);
};

module.exports = { addDonor, allDonors };
