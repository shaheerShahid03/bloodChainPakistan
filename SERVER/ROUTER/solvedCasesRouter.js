const express = require("express");
const { addSolvedCases, getAllDonors } = require("../CONTROLLER/solvedCases");

const solvedCasesRoutes = express.Router();

solvedCasesRoutes.put("/addsolvedcase/:id", addSolvedCases);
solvedCasesRoutes.get("/getallsolvedcases", getAllDonors);

module.exports = solvedCasesRoutes;
