import React from "react";
import "./SearchPage.css";
import { useStateValue } from "../../context/StateProvider";
import { useGoogleSearch } from "../../hooks/useGoogleSearch";
import response from "../../response";

export const SearchPage = () => {
  const [{ term }, dispatch] = useStateValue();
  //  LIVE API CALL
  // const { data } = useGoogleSearch(term);

  // Response example
  const data = response;

  console.log(data);
  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <h1>{term}</h1>
      </div>
      <div className="searchPage__results"></div>
    </div>
  );
};
