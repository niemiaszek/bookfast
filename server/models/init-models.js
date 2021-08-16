var DataTypes = require("sequelize").DataTypes;
var _administrator = require("./administrator");
var _adres = require("./adres");
var _autor = require("./autor");
var _darmowa_książka = require("./darmowa_książka");
var _dostawca = require("./dostawca");
var _ebook = require("./ebook");
var _historia_zakupów = require("./historia_zakupów");
var _historia_zakupów_has_wydanie = require("./historia_zakupów_has_wydanie");
var _karta_członkowska = require("./karta_członkowska");
var _kategoria = require("./kategoria");
var _klient = require("./klient");
var _klient_zarejestrowany = require("./klient_zarejestrowany");
var _koszyk = require("./koszyk");
var _koszyk_has_wydanie = require("./koszyk_has_wydanie");
var _książka = require("./książka");
var _książka_has_autor = require("./książka_has_autor");
var _książka_has_kategoria = require("./książka_has_kategoria");
var _lista_życzeń = require("./lista_życzeń");
var _lista_życzeń_has_wydanie = require("./lista_życzeń_has_wydanie");
var _magazyn = require("./magazyn");
var _nagroda = require("./nagroda");
var _ocena_ksiazki = require("./ocena_ksiazki");
var _opiniować = require("./opiniować");
var _paczkomat = require("./paczkomat");
var _papierowe = require("./papierowe");
var _punkty = require("./punkty");
var _płatność = require("./płatność");
var _recenzja = require("./recenzja");
var _wydanie = require("./wydanie");
var _wydawca = require("./wydawca");
var _wysyłka = require("./wysyłka");
var _zamówienie = require("./zamówienie");
var _zniżka = require("./zniżka");
var _zwrot = require("./zwrot");

function initModels(sequelize) {
  var administrator = _administrator(sequelize, DataTypes);
  var adres = _adres(sequelize, DataTypes);
  var autor = _autor(sequelize, DataTypes);
  var darmowa_książka = _darmowa_książka(sequelize, DataTypes);
  var dostawca = _dostawca(sequelize, DataTypes);
  var ebook = _ebook(sequelize, DataTypes);
  var historia_zakupów = _historia_zakupów(sequelize, DataTypes);
  var historia_zakupów_has_wydanie = _historia_zakupów_has_wydanie(sequelize, DataTypes);
  var karta_członkowska = _karta_członkowska(sequelize, DataTypes);
  var kategoria = _kategoria(sequelize, DataTypes);
  var klient = _klient(sequelize, DataTypes);
  var klient_zarejestrowany = _klient_zarejestrowany(sequelize, DataTypes);
  var koszyk = _koszyk(sequelize, DataTypes);
  var koszyk_has_wydanie = _koszyk_has_wydanie(sequelize, DataTypes);
  var książka = _książka(sequelize, DataTypes);
  var książka_has_autor = _książka_has_autor(sequelize, DataTypes);
  var książka_has_kategoria = _książka_has_kategoria(sequelize, DataTypes);
  var lista_życzeń = _lista_życzeń(sequelize, DataTypes);
  var lista_życzeń_has_wydanie = _lista_życzeń_has_wydanie(sequelize, DataTypes);
  var magazyn = _magazyn(sequelize, DataTypes);
  var nagroda = _nagroda(sequelize, DataTypes);
  var ocena_ksiazki = _ocena_ksiazki(sequelize, DataTypes);
  var opiniować = _opiniować(sequelize, DataTypes);
  var paczkomat = _paczkomat(sequelize, DataTypes);
  var papierowe = _papierowe(sequelize, DataTypes);
  var punkty = _punkty(sequelize, DataTypes);
  var płatność = _płatność(sequelize, DataTypes);
  var recenzja = _recenzja(sequelize, DataTypes);
  var wydanie = _wydanie(sequelize, DataTypes);
  var wydawca = _wydawca(sequelize, DataTypes);
  var wysyłka = _wysyłka(sequelize, DataTypes);
  var zamówienie = _zamówienie(sequelize, DataTypes);
  var zniżka = _zniżka(sequelize, DataTypes);
  var zwrot = _zwrot(sequelize, DataTypes);

  autor.belongsToMany(książka, { as: 'książka_idKsiążka_książkas', through: książka_has_autor, foreignKey: "Autor_idAutor", otherKey: "książka_idKsiążka" });
  historia_zakupów.belongsToMany(wydanie, { as: 'wydanie_idWydanie_wydanie_historia_zakupów_has_wydanies', through: historia_zakupów_has_wydanie, foreignKey: "historia_zakupów_idHstoria_zakupów", otherKey: "wydanie_idWydanie" });
  kategoria.belongsToMany(książka, { as: 'książka_idKsiążka_książka_książka_has_kategoria', through: książka_has_kategoria, foreignKey: "Kategoria_idKategoria", otherKey: "książka_idKsiążka" });
  klient_zarejestrowany.belongsToMany(recenzja, { as: 'Recenzja_idRecenzja_recenzjas', through: opiniować, foreignKey: "Klient_Zarejestrowany_Klient_idKlient", otherKey: "Recenzja_idRecenzja" });
  klient_zarejestrowany.belongsToMany(wydanie, { as: 'Wydanie_idWydanie_wydanies', through: ocena_ksiazki, foreignKey: "klient_zarejestrowany_Klient_idKlient", otherKey: "Wydanie_idWydanie" });
  koszyk.belongsToMany(wydanie, { as: 'wydanie_idWydanie_wydanie_koszyk_has_wydanies', through: koszyk_has_wydanie, foreignKey: "koszyk_idKoszyk", otherKey: "wydanie_idWydanie" });
  książka.belongsToMany(autor, { as: 'Autor_idAutor_autors', through: książka_has_autor, foreignKey: "książka_idKsiążka", otherKey: "Autor_idAutor" });
  książka.belongsToMany(kategoria, { as: 'Kategoria_idKategoria_kategoria', through: książka_has_kategoria, foreignKey: "książka_idKsiążka", otherKey: "Kategoria_idKategoria" });
  lista_życzeń.belongsToMany(wydanie, { as: 'wydanie_idWydanie_wydanie_lista_życzeń_has_wydanies', through: lista_życzeń_has_wydanie, foreignKey: "lista_życzeń_idlista_życzeń", otherKey: "wydanie_idWydanie" });
  nagroda.belongsToMany(wydanie, { as: 'wydanie_idWydanie_wydanies', through: darmowa_książka, foreignKey: "nagroda_idNagroda", otherKey: "wydanie_idWydanie" });
  recenzja.belongsToMany(klient_zarejestrowany, { as: 'Klient_Zarejestrowany_Klient_idKlient_klient_zarejestrowanies', through: opiniować, foreignKey: "Recenzja_idRecenzja", otherKey: "Klient_Zarejestrowany_Klient_idKlient" });
  wydanie.belongsToMany(historia_zakupów, { as: 'historia_zakupów_idHstoria_zakupów_historia_zakupóws', through: historia_zakupów_has_wydanie, foreignKey: "wydanie_idWydanie", otherKey: "historia_zakupów_idHstoria_zakupów" });
  wydanie.belongsToMany(klient_zarejestrowany, { as: 'klient_zarejestrowany_Klient_idKlient_klient_zarejestrowanies', through: ocena_ksiazki, foreignKey: "Wydanie_idWydanie", otherKey: "klient_zarejestrowany_Klient_idKlient" });
  wydanie.belongsToMany(koszyk, { as: 'koszyk_idKoszyk_koszyks', through: koszyk_has_wydanie, foreignKey: "wydanie_idWydanie", otherKey: "koszyk_idKoszyk" });
  wydanie.belongsToMany(lista_życzeń, { as: 'lista_życzeń_idlista_życzeń_lista_życzeńs', through: lista_życzeń_has_wydanie, foreignKey: "wydanie_idWydanie", otherKey: "lista_życzeń_idlista_życzeń" });
  wydanie.belongsToMany(nagroda, { as: 'nagroda_idNagroda_nagrodas', through: darmowa_książka, foreignKey: "wydanie_idWydanie", otherKey: "nagroda_idNagroda" });
  recenzja.belongsTo(administrator, { as: "administrator_idAdministrator_administrator", foreignKey: "administrator_idAdministrator"});
  administrator.hasMany(recenzja, { as: "recenzjas", foreignKey: "administrator_idAdministrator"});
  zwrot.belongsTo(administrator, { as: "administrator_idAdministrator_administrator", foreignKey: "administrator_idAdministrator"});
  administrator.hasMany(zwrot, { as: "zwrots", foreignKey: "administrator_idAdministrator"});
  wysyłka.belongsTo(adres, { as: "Adres_idAdres_adre", foreignKey: "Adres_idAdres"});
  adres.hasMany(wysyłka, { as: "wysyłkas", foreignKey: "Adres_idAdres"});
  książka_has_autor.belongsTo(autor, { as: "Autor_idAutor_autor", foreignKey: "Autor_idAutor"});
  autor.hasMany(książka_has_autor, { as: "książka_has_autors", foreignKey: "Autor_idAutor"});
  wysyłka.belongsTo(dostawca, { as: "dostawca_idDostawca_dostawca", foreignKey: "dostawca_idDostawca"});
  dostawca.hasMany(wysyłka, { as: "wysyłkas", foreignKey: "dostawca_idDostawca"});
  historia_zakupów_has_wydanie.belongsTo(historia_zakupów, { as: "historia_zakupów_idHstoria_zakupów_historia_zakupów", foreignKey: "historia_zakupów_idHstoria_zakupów"});
  historia_zakupów.hasMany(historia_zakupów_has_wydanie, { as: "historia_zakupów_has_wydanies", foreignKey: "historia_zakupów_idHstoria_zakupów"});
  książka_has_kategoria.belongsTo(kategoria, { as: "Kategoria_idKategoria_kategorium", foreignKey: "Kategoria_idKategoria"});
  kategoria.hasMany(książka_has_kategoria, { as: "książka_has_kategoria", foreignKey: "Kategoria_idKategoria"});
  adres.belongsTo(klient, { as: "Klient_idKlient_klient", foreignKey: "Klient_idKlient"});
  klient.hasMany(adres, { as: "adres", foreignKey: "Klient_idKlient"});
  klient_zarejestrowany.belongsTo(klient, { as: "Klient_idKlient_klient", foreignKey: "Klient_idKlient"});
  klient.hasOne(klient_zarejestrowany, { as: "klient_zarejestrowany", foreignKey: "Klient_idKlient"});
  koszyk.belongsTo(klient, { as: "klient_idKlient_klient", foreignKey: "klient_idKlient"});
  klient.hasMany(koszyk, { as: "koszyks", foreignKey: "klient_idKlient"});
  zamówienie.belongsTo(klient, { as: "Klient_idKlient_klient", foreignKey: "Klient_idKlient"});
  klient.hasMany(zamówienie, { as: "zamówienies", foreignKey: "Klient_idKlient"});
  zwrot.belongsTo(klient, { as: "klient_idKlient_klient", foreignKey: "klient_idKlient"});
  klient.hasMany(zwrot, { as: "zwrots", foreignKey: "klient_idKlient"});
  karta_członkowska.belongsTo(klient_zarejestrowany, { as: "klient_zarejestrowany_klient_idKlient_klient_zarejestrowany", foreignKey: "klient_zarejestrowany_klient_idKlient"});
  klient_zarejestrowany.hasMany(karta_członkowska, { as: "karta_członkowskas", foreignKey: "klient_zarejestrowany_klient_idKlient"});
  lista_życzeń.belongsTo(klient_zarejestrowany, { as: "klient_zarejestrowany_klient_idKlient_klient_zarejestrowany", foreignKey: "klient_zarejestrowany_klient_idKlient"});
  klient_zarejestrowany.hasMany(lista_życzeń, { as: "lista_życzeńs", foreignKey: "klient_zarejestrowany_klient_idKlient"});
  ocena_ksiazki.belongsTo(klient_zarejestrowany, { as: "klient_zarejestrowany_Klient_idKlient_klient_zarejestrowany", foreignKey: "klient_zarejestrowany_Klient_idKlient"});
  klient_zarejestrowany.hasMany(ocena_ksiazki, { as: "ocena_ksiazkis", foreignKey: "klient_zarejestrowany_Klient_idKlient"});
  opiniować.belongsTo(klient_zarejestrowany, { as: "Klient_Zarejestrowany_Klient_idKlient_klient_zarejestrowany", foreignKey: "Klient_Zarejestrowany_Klient_idKlient"});
  klient_zarejestrowany.hasMany(opiniować, { as: "opiniowaćs", foreignKey: "Klient_Zarejestrowany_Klient_idKlient"});
  recenzja.belongsTo(klient_zarejestrowany, { as: "klient_zarejestrowany_klient_idKlient_klient_zarejestrowany", foreignKey: "klient_zarejestrowany_klient_idKlient"});
  klient_zarejestrowany.hasMany(recenzja, { as: "recenzjas", foreignKey: "klient_zarejestrowany_klient_idKlient"});
  koszyk_has_wydanie.belongsTo(koszyk, { as: "koszyk_idKoszyk_koszyk", foreignKey: "koszyk_idKoszyk"});
  koszyk.hasMany(koszyk_has_wydanie, { as: "koszyk_has_wydanies", foreignKey: "koszyk_idKoszyk"});
  książka_has_autor.belongsTo(książka, { as: "książka_idKsiążka_książka", foreignKey: "książka_idKsiążka"});
  książka.hasMany(książka_has_autor, { as: "książka_has_autors", foreignKey: "książka_idKsiążka"});
  książka_has_kategoria.belongsTo(książka, { as: "książka_idKsiążka_książka", foreignKey: "książka_idKsiążka"});
  książka.hasMany(książka_has_kategoria, { as: "książka_has_kategoria", foreignKey: "książka_idKsiążka"});
  wydanie.belongsTo(książka, { as: "Książka_idKsiążka_książka", foreignKey: "Książka_idKsiążka"});
  książka.hasMany(wydanie, { as: "wydanies", foreignKey: "Książka_idKsiążka"});
  lista_życzeń_has_wydanie.belongsTo(lista_życzeń, { as: "lista_życzeń_idlista_życzeń_lista_życzeń", foreignKey: "lista_życzeń_idlista_życzeń"});
  lista_życzeń.hasMany(lista_życzeń_has_wydanie, { as: "lista_życzeń_has_wydanies", foreignKey: "lista_życzeń_idlista_życzeń"});
  papierowe.belongsTo(magazyn, { as: "Magazyn_idMagazyn_magazyn", foreignKey: "Magazyn_idMagazyn"});
  magazyn.hasMany(papierowe, { as: "papierowes", foreignKey: "Magazyn_idMagazyn"});
  darmowa_książka.belongsTo(nagroda, { as: "nagroda_idNagroda_nagroda", foreignKey: "nagroda_idNagroda"});
  nagroda.hasMany(darmowa_książka, { as: "darmowa_książkas", foreignKey: "nagroda_idNagroda"});
  punkty.belongsTo(nagroda, { as: "nagroda_idNagroda_nagroda", foreignKey: "nagroda_idNagroda"});
  nagroda.hasMany(punkty, { as: "punkties", foreignKey: "nagroda_idNagroda"});
  zniżka.belongsTo(nagroda, { as: "Nagroda_idNagroda_nagroda", foreignKey: "Nagroda_idNagroda"});
  nagroda.hasOne(zniżka, { as: "zniżka", foreignKey: "Nagroda_idNagroda"});
  klient.belongsTo(paczkomat, { as: "paczkomat_idpaczkomat_paczkomat", foreignKey: "paczkomat_idpaczkomat"});
  paczkomat.hasMany(klient, { as: "klients", foreignKey: "paczkomat_idpaczkomat"});
  wysyłka.belongsTo(paczkomat, { as: "paczkomat_idpaczkomat_paczkomat", foreignKey: "paczkomat_idpaczkomat"});
  paczkomat.hasMany(wysyłka, { as: "wysyłkas", foreignKey: "paczkomat_idpaczkomat"});
  karta_członkowska.belongsTo(punkty, { as: "punkty_idPunkty_punkty", foreignKey: "punkty_idPunkty"});
  punkty.hasMany(karta_członkowska, { as: "karta_członkowskas", foreignKey: "punkty_idPunkty"});
  zamówienie.belongsTo(płatność, { as: "Płatność_idPłatność_płatność", foreignKey: "Płatność_idPłatność"});
  płatność.hasMany(zamówienie, { as: "zamówienies", foreignKey: "Płatność_idPłatność"});
  opiniować.belongsTo(recenzja, { as: "Recenzja_idRecenzja_recenzja", foreignKey: "Recenzja_idRecenzja"});
  recenzja.hasMany(opiniować, { as: "opiniowaćs", foreignKey: "Recenzja_idRecenzja"});
  darmowa_książka.belongsTo(wydanie, { as: "wydanie_idWydanie_wydanie", foreignKey: "wydanie_idWydanie"});
  wydanie.hasMany(darmowa_książka, { as: "darmowa_książkas", foreignKey: "wydanie_idWydanie"});
  ebook.belongsTo(wydanie, { as: "Wydanie_idWydanie_wydanie", foreignKey: "Wydanie_idWydanie"});
  wydanie.hasMany(ebook, { as: "ebooks", foreignKey: "Wydanie_idWydanie"});
  historia_zakupów_has_wydanie.belongsTo(wydanie, { as: "wydanie_idWydanie_wydanie", foreignKey: "wydanie_idWydanie"});
  wydanie.hasMany(historia_zakupów_has_wydanie, { as: "historia_zakupów_has_wydanies", foreignKey: "wydanie_idWydanie"});
  koszyk_has_wydanie.belongsTo(wydanie, { as: "wydanie_idWydanie_wydanie", foreignKey: "wydanie_idWydanie"});
  wydanie.hasMany(koszyk_has_wydanie, { as: "koszyk_has_wydanies", foreignKey: "wydanie_idWydanie"});
  lista_życzeń_has_wydanie.belongsTo(wydanie, { as: "wydanie_idWydanie_wydanie", foreignKey: "wydanie_idWydanie"});
  wydanie.hasMany(lista_życzeń_has_wydanie, { as: "lista_życzeń_has_wydanies", foreignKey: "wydanie_idWydanie"});
  ocena_ksiazki.belongsTo(wydanie, { as: "Wydanie_idWydanie_wydanie", foreignKey: "Wydanie_idWydanie"});
  wydanie.hasMany(ocena_ksiazki, { as: "ocena_ksiazkis", foreignKey: "Wydanie_idWydanie"});
  papierowe.belongsTo(wydanie, { as: "wydanie_idWydanie_wydanie", foreignKey: "wydanie_idWydanie"});
  wydanie.hasMany(papierowe, { as: "papierowes", foreignKey: "wydanie_idWydanie"});
  recenzja.belongsTo(wydanie, { as: "wydanie_idWydanie1_wydanie", foreignKey: "wydanie_idWydanie1"});
  wydanie.hasMany(recenzja, { as: "recenzjas", foreignKey: "wydanie_idWydanie1"});
  wydanie.belongsTo(wydawca, { as: "Wydawca_idWydawca_wydawca", foreignKey: "Wydawca_idWydawca"});
  wydawca.hasMany(wydanie, { as: "wydanies", foreignKey: "Wydawca_idWydawca"});
  historia_zakupów.belongsTo(zamówienie, { as: "zamówienie_idZamówienie_zamówienie", foreignKey: "zamówienie_idZamówienie"});
  zamówienie.hasMany(historia_zakupów, { as: "historia_zakupóws", foreignKey: "zamówienie_idZamówienie"});
  wysyłka.belongsTo(zamówienie, { as: "Zamówienie_idZamówienie_zamówienie", foreignKey: "Zamówienie_idZamówienie"});
  zamówienie.hasMany(wysyłka, { as: "wysyłkas", foreignKey: "Zamówienie_idZamówienie"});
  płatność.belongsTo(zniżka, { as: "zniżka_nagroda_idNagroda_zniżka", foreignKey: "zniżka_nagroda_idNagroda"});
  zniżka.hasMany(płatność, { as: "płatnośćs", foreignKey: "zniżka_nagroda_idNagroda"});
  zamówienie.belongsTo(zwrot, { as: "Zwrot_idZwrot_zwrot", foreignKey: "Zwrot_idZwrot"});
  zwrot.hasMany(zamówienie, { as: "zamówienies", foreignKey: "Zwrot_idZwrot"});

  return {
    administrator,
    adres,
    autor,
    darmowa_książka,
    dostawca,
    ebook,
    historia_zakupów,
    historia_zakupów_has_wydanie,
    karta_członkowska,
    kategoria,
    klient,
    klient_zarejestrowany,
    koszyk,
    koszyk_has_wydanie,
    książka,
    książka_has_autor,
    książka_has_kategoria,
    lista_życzeń,
    lista_życzeń_has_wydanie,
    magazyn,
    nagroda,
    ocena_ksiazki,
    opiniować,
    paczkomat,
    papierowe,
    punkty,
    płatność,
    recenzja,
    wydanie,
    wydawca,
    wysyłka,
    zamówienie,
    zniżka,
    zwrot,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
