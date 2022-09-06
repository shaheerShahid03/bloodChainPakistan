const express = require("express");
const {
  addSolvedCases,
  getAllDonors,
  deleteDonor,
} = require("../CONTROLLER/solvedCases");

const solvedCasesRoutes = express.Router();

solvedCasesRoutes.post("/addsolvedcase", addSolvedCases);
solvedCasesRoutes.get("/getallsolvedcases", getAllDonors);
solvedCasesRoutes.delete("/delsolvedcase", deleteDonor);

module.exports = solvedCasesRoutes;
