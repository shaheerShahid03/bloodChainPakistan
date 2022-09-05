const express = require("express");
const { addDonor, allDonors } = require("../CONTROLLER");
const router = express.Router();

router.post("/add_donor", addDonor);
router.get("/all_donor", allDonors);

module.exports = router;
