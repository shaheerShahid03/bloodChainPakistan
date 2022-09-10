const express = require("express");

const DonorModel = require("../MODAL/DonorModel");

const addEmergencyCase = async (req, res) => {
  try {
    await DonorModel.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      bloodGroup: req.body.bloodGroup,
      city: req.body.city,
      address: req.body.hospitalAddress,
      phoneNumber: req.body.phoneNumber,
      date: req.body.date,
      status: req.body.status,
    });
    res.status(201).json("Emergency Case added successfully");
  } catch (error) {
    console.log(error + "error");
  }
};

const selectDonor = async (req, res) => {
  try {
    const donor = await DonorModel.findOne({ _id: req.params.id });
    return res.status(201).json(donor);
  } catch (error) {
    console.log(error + "error");
  }
};

module.exports = { addEmergencyCase, selectDonor };
