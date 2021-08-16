const express = require("express");
const router = express.Router();
const {
  książka,
  wydanie,
  klient_zarejestrowany,
  książka_has_kategoria,
  książka_has_autor,
  autor,
  kategoria,
  papierowe,
  ebook,
  ocena_ksiazki,
} = require("../models/");

router.get("/", async (req, res) => {
  const listOf_książka = await książka.findAll({
    include: [
      {
        model: wydanie,
        as: "wydanies",
        include: [
          { model: papierowe, as: "papierowes" },
          { model: ebook, as: "ebooks" },
        ],
      },
      { model: kategoria, as: "Kategoria_idKategoria_kategoria" },
      { model: autor, as: "Autor_idAutor_autors" },
    ],
  });
  res.json(listOf_książka);
});

router.get("/byId/:id", async (req, res) => {
  const id = req.params.id;
  const book = await książka.findByPk(id);
  res.json(book);
});

router.get("/maxId", async (req, res) => {
  const book = await książka.findByPk(id);
  res.json(book);
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

module.exports = router;
