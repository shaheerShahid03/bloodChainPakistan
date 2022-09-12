const express = require("express");

const DonorModel = require("../MODAL/DonorModel");

const addSolvedCases = async (req, res) => {
  try {
    const donor = await DonorModel.findOneAndUpdate(
      { _id: req.params.id },
      { status: "Solved" }
    );

    console.log(donor);
    return res.status(201).json("Case Solved successfully");
  } catch (error) {
    console.log(error + "error");
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

module.exports = { addSolvedCases, getAllDonors };
