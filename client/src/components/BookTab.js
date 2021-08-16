import React from "react";
import { useHistory } from "react-router-dom";
import "../styles/BookTab.css";

function BookTab({ data }) {
  let history = useHistory();

  let książka = data.Książka_idKsiążka_książka;
  let autor = książka["Autor_idAutor_autors"]["0"];
  let kategorias = książka["Kategoria_idKategoria_kategoria"];
  let wydawca = data["Wydawca_idWydawca_wydawca"];

  return (
    <div className="Publication">
      <button
        id="Publication"
        onClick={() => {
          history.push(`/publication/${data.idWydanie}`);
        }}
      >
        <div className="Column">
          <div className="Info">
            Tytuł: <h1>{książka.tytuł}</h1>
          </div>
          <div className="Info">
            Autor:
            <h3>
              {autor.imię} {autor.nazwisko}
            </h3>
          </div>
        </div>
        <div className="Column">
          <div className="Info">
            Kategoria:
            <h4>
              {kategorias.map((value, key) => {
                return <a key={value.idKategoria}>{value.nazwa}, </a>;
              })}
            </h4>
          </div>
          <div className="Info">
            Wydawnictwo: <h4>{wydawca.nazwa_wydawcy}</h4>
          </div>
        </div>
        <div className="Column">
          <div className="Info">
            Liczba stron: <h4>{data.liczba_stron}</h4>
          </div>
          <div className="Info">
            Cena: <h4>{data.Cena}zł</h4>
          </div>
        </div>
        <div className="Column">
          <div className="Info">
            Ocena:{" "}
            <h4>
              {data.srednia_ocen > 0 && data.srednia_ocen}
              {data.srednia_ocen == -1 && "Brak"}
            </h4>
          </div>
          <div className="Info">
            Język: <h4>{data.język}</h4>
          </div>
        </div>
        {data["papierowes"].length > 0 && (
          <div className="Column">
            <div className="Info">
              Wydanie: <h4>Papierowe</h4>
            </div>
            <div className="Info">
              Okładka: <h4>{data["papierowes"]["0"].Okładka}</h4>
            </div>
          </div>
        )}
        {data["ebooks"].length > 0 && (
          <div className="Column">
            <div className="Info">
              Wydanie: <h4>E-book</h4>
            </div>
            <div className="Info">
              Format: <h4>{data["ebooks"]["0"].format}</h4>
            </div>
          </div>
        )}
      </button>
    </div>
  );
}

export default BookTab;
