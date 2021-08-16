const express = require("express");
const router = express.Router();
const { klient_zarejestrowany, klient } = require("../models");
const { sign } = require("jsonwebtoken");
const { route } = require("./wydanie");
const { validateToken } = require("../middlewares/authMiddleware");

router.get("/", async (req, res) => {
  const listOf_klient_zarejestrowany = await klient_zarejestrowany.findAll();
  res.json(listOf_klient_zarejestrowany);
});
router.get("/logins", async (req, res) => {
  const listOf_logins = await klient_zarejestrowany.findAll({
    attributes: ["Login"],
  });
  res.json(listOf_logins);
});

router.post("/login", async (req, res) => {
  const { Login, Hasło } = req.body;

  const klient_reg = await klient_zarejestrowany.findOne({
    where: { Login: Login },
    include: [{ model: klient, as: "Klient_idKlient_klient" }],
  });
  if (!klient_reg) {
    res.json({ error: "Użytkownik nie istnieje" });
  } else if (Hasło == klient_reg.Hasło) {
    const accessToken = sign(
      {
        Login: klient_reg.Login,
        id: klient_reg.Klient_idKlient_klient.idKlient,
      },
      "secret"
    );

    res.json({
      token: accessToken,
      Login: klient_reg.Login,
      id: klient_reg.Klient_idKlient_klient.idKlient,
    });
  } else {
    res.json({ error: "Zła kombinacja loginu i hasła" });
  }
});

router.get("/auth", validateToken, (req, res) => {
  res.json(req.klient_reg);
});

router.post("/", async (req, res) => {
  const post = req.body;
  try {
    await klient_zarejestrowany.create(post);
    res.json(post);
  } catch (error) {
    res.json({ error: "Błędna rejestracja. Spróbuj ponownie" });
  }
});
module.exports = router;
