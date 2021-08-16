const express = require("express");
const router = express.Router();
const { kategoria } = require("../models");

router.get("/", async (req, res) => {
  const listOf_kategoria = await kategoria.findAll();
  res.json(listOf_kategoria);
});

router.post("/", async (req, res) => {
  const post = req.body;
  await klient_zarejestrowany.create(post);
  res.json(post);
});
module.exports = router;
