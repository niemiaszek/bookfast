import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles/Book.css";
import { CartContext } from "../components/CartContext";
import { useHistory } from "react-router-dom";

function Book() {
  let history = useHistory();
  let { id } = useParams();
  const [bookObject, setBookObject] = useState({});
  const { addToCart } = useContext(CartContext);
  useEffect(() => {
    axios
      .get(`http://localhost:3001/publication/byId/${id}`)
      .then((response) => {
        setBookObject(response);
      });
  }, []);

  return (
    <div>
      {bookObject.data && (
        <div className="Book-Page">
          <div className="Main-Info">
            <div className="Column">
              <div className="Info">
                Tytuł:{" "}
                <h1>
                  {bookObject["data"]["Książka_idKsiążka_książka"]["tytuł"]}
                </h1>
              </div>
              <div className="Info">
                Autor:
                <h2>
                  {
                    bookObject["data"]["Książka_idKsiążka_książka"][
                      "Autor_idAutor_autors"
                    ]["0"].imię
                  }{" "}
                  {
                    bookObject["data"]["Książka_idKsiążka_książka"][
                      "Autor_idAutor_autors"
                    ]["0"].nazwisko
                  }
                </h2>
              </div>
              <div className="Info">
                Kategoria:{" "}
                <h2>
                  {bookObject["data"]["Książka_idKsiążka_książka"][
                    "Kategoria_idKategoria_kategoria"
                  ].map((value, key) => {
                    return <a key={value.idKategoria}>{value.nazwa}, </a>;
                  })}
                </h2>
              </div>
            </div>
            <div className="Column">
              <div className="Info">
                Cena: <h2>{bookObject["data"].Cena}zł</h2>
              </div>
              <div className="Info">
                Ocena:{" "}
                <h2>
                  {bookObject["data"].srednia_ocen > 0 &&
                    bookObject["data"].srednia_ocen}
                  {bookObject["data"].srednia_ocen == -1 && "Brak"}
                </h2>
              </div>
              <div className="Info">
                Ilość: <h2>{bookObject["data"].ilość}</h2>
              </div>
            </div>
            <div className="Column">
              <button
                className="Real-Button"
                onClick={() => {
                  addToCart(bookObject);
                  history.go(0);
                }}
              >
                Dodaj do koszyka
              </button>
              <button className="Real-Button">Dodaj do listy życzeń</button>
            </div>
          </div>
          <div className="Table-Info">
            <table>
              <tr>
                <th>Język</th>
                <th>Liczba stron</th>
                <th>Rok wydania</th>
                <th>Rodzaj</th>
                <th>
                  {bookObject["data"]["papierowes"].length > 0 && "Okładka"}
                  {bookObject["data"]["ebooks"].length > 0 && "Format"}
                </th>
              </tr>
              <tr>
                <th>{bookObject["data"].język}</th>
                <th>{bookObject["data"].liczba_stron}</th>
                <th>{bookObject["data"].Data_wydania}</th>
                <th>
                  {bookObject["data"]["papierowes"].length > 0 && "Papierowe"}
                  {bookObject["data"]["ebooks"].length > 0 && "E-book"}
                </th>
                <th>
                  {bookObject["data"]["papierowes"].length > 0 &&
                    bookObject["data"]["papierowes"]["0"].Okładka}
                  {bookObject["data"]["ebooks"].length > 0 &&
                    bookObject["data"]["ebooks"]["0"].format}
                </th>
              </tr>
            </table>
          </div>
          <div className="Description">
            <div className="Scrollable">
              {bookObject["data"]["Książka_idKsiążka_książka"].opis}
            </div>
          </div>
          <div className="Reviews"></div>
        </div>
      )}
    </div>
  );
}

export default Book;
