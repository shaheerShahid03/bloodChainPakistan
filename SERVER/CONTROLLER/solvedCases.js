const express = require("express");

const DonorModel = require("../MODAL/DonorModel");

const addSolvedCases = async (req, res) => {
  try {
    // const donor = await DonorModel.findOne({ _id: req.params.id });
    // await solvedCasesModel.create({
    //   firstName: donor.firstName,
    //   lastName: donor.lastName,
    //   bloodGroup: donor.bloodGroup,
    //   city: donor.city,
    //   address: donor.address,
    //   phoneNumber: donor.phoneNumber,
    // });

    console.log("donor");
    const donor = await DonorModel.findOneAndUpdate(
      { _id: req.params.id },
      { status: "Solved" }
    );

    console.log(donor);
    return res.status(201).json("Donor added successfully");
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

const deleteDonor = async (req, res) => {
  try {
    await DonorModel.deleteOne({ _id: req.params.id });
    res.status(201).json("deleted");
  } catch (error) {
    res.status(402).json({ msg: "error" });
  }
};

module.exports = { addSolvedCases, getAllDonors, deleteDonor };
