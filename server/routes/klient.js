const express = require("express");
const router = express.Router();
const { klient, klient_zarejestrowany } = require("../models");

router.get("/", async (req, res) => {
  const listOf_klient = await klient.findAll({
    include: [{ model: klient_zarejestrowany, as: "klient_zarejestrowany" }],
  });
  res.json(listOf_klient);
});
router.get("/maxId", async (req, res) => {
  const maxId = await klient.max("idKlient");
  res.json(maxId);
});

router.post("/", async (req, res) => {
  const post = req.body;
  await klient.create(post);
  res.json(post);
});
module.exports = router;
