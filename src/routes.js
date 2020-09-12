const express = require("express");
const router = express.Router();

router.post("/add", async (req, res) => {
  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);
  console.log(page);
  console.log(limit);
  try {
    res.send("Hello");
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
