import { Button } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";

let history = useHistory();
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function RandomBook() {
  return (
    <div>
      <Button
        onClick={history.push(`/book/${getRandomInt(min, max)}`)}
      ></Button>
    </div>
  );
}

export default RandomBook;
