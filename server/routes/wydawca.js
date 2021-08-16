const express = require("express");
const router = express.Router();
const { wydawca } = require("../models/");

router.get("/", async (req, res) => {
  const listOf_wydawca = await wydawca.findAll();
  res.json(listOf_wydawca);
});

router.post("/", async (req, res) => {
  const post = req.body;
  await wydawca.create(post);
  res.json(post);
});
module.exports = router;
