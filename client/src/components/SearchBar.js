import React, { useState } from "react";
import "../styles/SearchBar.css";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import { useHistory } from "react-router-dom";

function SearchBar({ placeholder, data }) {
  let history = useHistory();
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.Książka_idKsiążka_książka.tytuł
        .toLowerCase()
        .includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {wordEntered.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <a
                className="dataItem"
                onClick={() => history.push(`/publication/${value.idWydanie}`)}
              >
                <p>
                  <b>{value.Książka_idKsiążka_książka.tytuł}</b>
                  {value["papierowes"].length > 0 &&
                    ", okładka " + value["papierowes"]["0"].Okładka}
                  {value["ebooks"].length > 0 &&
                    ", e-book " + value["ebooks"]["0"].format}
                  {", "}
                  {value.język}
                </p>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
