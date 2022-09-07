const express = require("express");
const DonorModel = require("../MODAL/DonorModel");

const addDonor = async (req, res) => {
  try {
    await DonorModel.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      bloodGroup: req.body.bloodGroup,
      city: req.body.city,
      address: req.body.address,
      phoneNumber: req.body.phoneNumber,
      date: req.body.date,
      status: req.body.status,
    });
    return res.status(201).json("Donor added successfully");
  } catch (error) {
    return res.status(400).json({ message: "Phone Number already Exits" });
  }
};

const allDonors = async (req, res) => {
  try {
    const donor = await DonorModel.find();
    return res.status(200).json(donor);
  } catch (error) {
    return res.status(402).json("error");
  }
};

const deleteDonor = async (req, res) => {
  try {
    await DonorModel.deleteOne({ _id: req.params.id });
    res.status(201).json("deleted");
  } catch (error) {
    res.status(402).json({ msg: "error" });
  }
};

module.exports = { addDonor, allDonors, deleteDonor };
