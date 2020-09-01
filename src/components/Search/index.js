import React, { useState } from "react";
import "./Search.css";
import MicIcon from "@material-ui/icons/Mic";
import SearchIcon from "@material-ui/icons/Search";
import { Button } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "../../context/StateProvider";
import { actionTypes } from "../../context/reducer";

export const Search = ({ hideButtons = false }) => {
  const [{}, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const history = useHistory();
  const search = (e) => {
    e.preventDefault();

    console.log("You hit search button ->", input);

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });

    history.push("/search");
  };
  return (
    <div className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <MicIcon className="search__inputIcon search__inputIcon--clickable" />
      </div>
      {!hideButtons ? (
        <>
          <div className="search__buttons">
            <Button type="submit" variant="outlined" onClick={search}>
              Buscar con Google
            </Button>
            <Button variant="outlined">Voy a tener suerte</Button>
          </div>
          <div className="search__lenguages">
            <p>Ofrecido por Google en:</p>
            <Link to="#">English</Link>
            <Link to="#">català</Link>
            <Link to="#">galego</Link>
            <Link to="#">euskara</Link>
          </div>
        </>
      ) : (
        <div className="search__buttons ">
          <Button
            className="search__buttonsHidden"
            type="submit"
            variant="outlined"
            onClick={search}
          >
            Buscar con Google
          </Button>
          <Button className="search__buttonsHidden" variant="outlined">
            Voy a tener suerte
          </Button>
        </div>
      )}
    </div>
  );
};
