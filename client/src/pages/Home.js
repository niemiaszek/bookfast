import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Home.css";
import SearchBar from "../components/SearchBar";
import BookTab from "../components/BookTab";
import { useHistory } from "react-router-dom";

function Home() {
  var history = useHistory();

  const [listOf_kategoria, setListOf_kategoria] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/category").then((response) => {
      setListOf_kategoria(response.data);
      /*console.log(response);*/
    });
  }, []);

  const [listOf_wydawca, setListOf_wydawca] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/publisher").then((response) => {
      setListOf_wydawca(response.data);
      /*console.log(response);*/
    });
  }, []);

  const [listOf_książka, setListOf_książka] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/book").then((response) => {
      setListOf_książka(response.data);
    });
  }, []);

  const [listOf_wydanie, setListOf_wydanie] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/publication").then((response) => {
      setListOf_wydanie(response.data);
    });
  }, []);
  const RandomBook = () => {
    axios.get("http://localhost:3001/publication/maxId").then((response) => {
      console.log(response);
      var maxId = response.data;
      var randomId = Math.floor(Math.random() * (maxId + 1));
      history.push(`/publication/${randomId}`);
    });
  };

  return (
    <div className="Home-Page">
      <div className="Filtering">
        <div className="Filtering-Type">
          <h3>Kategorie</h3>
          <div className="Scrollable">
            {listOf_kategoria.map((value, key) => {
              return (
                <div className="Category" key={value.idKategoria}>
                  <button>{value.nazwa}</button>
                </div>
              );
            })}
          </div>
        </div>
        <div className="Filtering-Type">
          <h3>Wydawcy</h3>
          <div className="Scrollable">
            {listOf_wydawca.map((value, key) => {
              return (
                <div className="Category" key={value.idWydawca}>
                  <button>{value.nazwa_wydawcy}</button>
                </div>
              );
            })}
          </div>
        </div>
        <div className="Filtering-Type" id="version">
          <h3>Wersja</h3>
          <div className="Scrollable" id="version">
            <button>Papierowa</button>
            <button>E-Book</button>
          </div>
        </div>
        <div className="Filtering-Type" id="Price">
          <h3>Cena</h3>
          <div className="Price">
            <input placeholder="od" type="number" min={0} />
            -
            <input placeholder="do" type="number" />
            zł
          </div>
        </div>
        <div className="Filtering-Type" id="Sorting">
          <h3>Sortowanie</h3>
          <select name="sorting" id="sorting-select">
            <option value="">Wybierz rodzaj sortowania...</option>
            <option value="alphabet">Alfabetyczne</option>
            <option value="price_asc">Cena rosnąco</option>
            <option value="price_desc">Cena malejąco</option>
            <option value="c">Ocena malejąco</option>
          </select>
          <div className="Scrollable" id="Sort">
            <button>Sortuj</button>
          </div>
        </div>
      </div>
      <div className="Main-Content">
        <div className="Menu">
          <div className="Search">
            <SearchBar
              placeholder="Wprowadź nazwę ksiąki"
              data={listOf_wydanie}
            />
          </div>
          <div className="Random">
            <button onClick={RandomBook} className="Real-Button">
              Losowa książka
            </button>
          </div>
        </div>
        <div className="Scrollable" id="Books">
          {listOf_wydanie.map((value, key) => {
            return <BookTab data={value} key={value.idWydanie} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
