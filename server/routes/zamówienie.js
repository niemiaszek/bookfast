const express = require("express");
const router = express.Router();
const {
  zamówienie,
  historia_zakupów,
  historia_zakupów_has_wydanie,
} = require("../models");

router.post("/", async (req, res) => {
  const id = req.body.id;
  let date_ob = new Date();
  let date = ("0" + date_ob.getDate()).slice(-2);
  let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
  let year = date_ob.getFullYear();
  let current_date = year + "-" + month + "-" + date;
  await zamówienie.create({
    Data_Zamówienia: current_date,
    Klient_idKlient: id,
  });
  current_zamównienie = await zamówienie.findOne({
    order: [["idZamówienie", "DESC"]],
  });
  idZamówienie = current_zamównienie.dataValues.idZamówienie;
  res.json({ idZamówienie: idZamówienie });
});

router.post("/history", async (req, res) => {
  const idZamówienie = req.body.idZamówienie;
  await historia_zakupów.create({
    zamówienie_idZamówienie: idZamówienie,
  });
  current_history = await historia_zakupów.findOne({
    order: [["idHistoria_zakupów", "DESC"]],
  });
  idHistoria = current_history.dataValues["idHistoria_zakupów"];
  console.log(idHistoria);
  res.json({ idHistoria_zakupów: idHistoria });
});

router.post("/history_publication", async (req, res) => {
  const { idHistoria, wydanie_idWydanie, ilość } = req.body;
  await historia_zakupów_has_wydanie.create({
    historia_zakupów_idHstoria_zakupów: idHistoria,
    wydanie_idWydanie: wydanie_idWydanie,
    ilość: ilość,
  });
});

module.exports = router;
