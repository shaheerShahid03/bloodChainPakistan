const express = require("express");

const readyForDonationModel = require("../MODAL/readyForDonation");

const addDonor_readyForDonation = async (req, res) => {
  try {
    await readyForDonationModel.create({
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
    const donor = await readyForDonationModel.find();
    return res.status(200).json(donor);
  } catch (error) {
    return res.status(402).json("error");
  }
};

const deleteDonor = async (req, res) => {
  try {
    await readyForDonationModel.deleteOne({ _id: req.params.id });
    res.status(201).json("deleted");
  } catch (error) {
    res.status(402).json({ msg: "error" });
  }
};

module.exports = { addDonor_readyForDonation, getAllDonors, deleteDonor };
