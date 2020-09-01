import React from "react";
import "./SearchPage.css";
import { useStateValue } from "../../context/StateProvider";
import { useGoogleSearch } from "../../hooks/useGoogleSearch";
import response from "../../response";
import { Link } from "react-router-dom";
import { Search } from "../../components/Search";
export const SearchPage = () => {
  const [{ term }, dispatch] = useStateValue();
  //  LIVE API CALL
  // const { data } = useGoogleSearch(term);

  // RESPONSE API EXAMPLE STATIC
  const data = response;

  console.log(data);
  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/">
          <img
            className="searchPage__logo"
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt="Brand Google"
          />
        </Link>
        <div className="searchPage__headerBody">
          <Search hideButtons />
        </div>
      </div>
    </div>
  );
};
