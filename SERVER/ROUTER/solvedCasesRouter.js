const express = require("express");
const {
  addSolvedCases,
  getAllDonors,
  deleteDonor,
} = require("../CONTROLLER/solvedCases");

const solvedCasesRoutes = express.Router();

solvedCasesRoutes.put("/addsolvedcase/:id", addSolvedCases);
solvedCasesRoutes.get("/getallsolvedcases", getAllDonors);
solvedCasesRoutes.delete("/delsolvedcase/:id", deleteDonor);

module.exports = solvedCasesRoutes;
