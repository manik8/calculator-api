const express = require("express");
const router = express.Router();
const {
  addNumber,
  subNumber,
  multiplyNumber,
  divisionNumber,
} = require("./api_controllers");

const { dataType } = require("./dataType");

router.post("/add", dataType, addNumber);
router.post("/sub", dataType, subNumber);
router.post("/multiply", dataType, multiplyNumber);
router.post("/division", dataType, divisionNumber);

module.exports = router;
