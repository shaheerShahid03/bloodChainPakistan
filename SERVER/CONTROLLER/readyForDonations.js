const express = require("express");

const DonorModel = require("../MODAL/DonorModel");

const addDonor_readyForDonation = async (req, res) => {
  try {
    await DonorModel.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      bloodGroup: req.body.bloodGroup,
      city: req.body.city,
      address: req.body.address,
      phoneNumber: req.body.phoneNumber,
    });
    return res.status(201).json("Donor added successfully");
  } catch (error) {
    console.log(error);
  }
};

const getAllDonors = async (req, res) => {
  try {
    const donor = await DonorModel.find();
    return res.status(200).json(donor);
  } catch (error) {
    return res.status(402).json("error");
  }
};

module.exports = { addDonor_readyForDonation, getAllDonors };
