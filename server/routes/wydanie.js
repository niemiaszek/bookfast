const express = require("express");
const router = express.Router();
const {
  książka,
  wydanie,
  klient_zarejestrowany,
  autor,
  kategoria,
  papierowe,
  ebook,
  wydawca,
} = require("../models/");

router.get("/", async (req, res) => {
  const listOf_wydanies = await wydanie.findAll({
    include: [
      {
        model: książka,
        as: "Książka_idKsiążka_książka",
        include: [
          { model: kategoria, as: "Kategoria_idKategoria_kategoria" },
          { model: autor, as: "Autor_idAutor_autors" },
        ],
      },
      { model: papierowe, as: "papierowes" },
      { model: ebook, as: "ebooks" },
      { model: wydawca, as: "Wydawca_idWydawca_wydawca" },
    ],
  });
  res.json(listOf_wydanies);
});

router.get("/byId/:id", async (req, res) => {
  const id = req.params.id;
  const listOf_wydanies = await wydanie.findOne({
    where: {
      idWydanie: id,
    },
    include: [
      {
        model: książka,
        as: "Książka_idKsiążka_książka",
        include: [
          { model: kategoria, as: "Kategoria_idKategoria_kategoria" },
          { model: autor, as: "Autor_idAutor_autors" },
        ],
      },
      { model: papierowe, as: "papierowes" },
      { model: ebook, as: "ebooks" },
      { model: wydawca, as: "Wydawca_idWydawca_wydawca" },
    ],
  });
  res.json(listOf_wydanies);
});

router.get("/maxId", async (req, res) => {
  const maxId = await wydanie.max("idWydanie");
  res.json(maxId);
});

router.post("/", async (req, res) => {
  const post = req.body;
  await klient_zarejestrowany.create(post);
  res.json(post);
});

router.get("/ebooks", async (req, res) => {
  const ebooks = await klient_zarejestrowany.findAll({
    include: [{ all: true, nested: true }],
  });
  res.json(ebooks);
  /*książka.findAll({
    include: [
      {
        model: wydanie,
        include: [
          {
            model: ebook,
          },
        ],
      },
    ],
  });
  res.json(książka_all);*/
});

router.put("/added", async (req, res) => {
  const { amount, idWydanie } = req.body;
  await wydanie.update({ ilość: amount }, { where: { idWydanie: idWydanie } });
  res.json(amount);
});

module.exports = router;
