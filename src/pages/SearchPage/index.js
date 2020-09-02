import React from "react";
import "./SearchPage.css";
import { useStateValue } from "../../context/StateProvider";
import { useGoogleSearch } from "../../hooks/useGoogleSearch";
import response from "../../response";
import { Link } from "react-router-dom";
import { Search } from "../../components/Search";
import SearchIcon from "@material-ui/icons/Search";
import ArtTrackIcon from "@material-ui/icons/ArtTrack";
import WallpaperIcon from "@material-ui/icons/Wallpaper";
import SlideshowIcon from "@material-ui/icons/Slideshow";
import StoreIcon from "@material-ui/icons/Store";
import MoreVertIcon from "@material-ui/icons/MoreVert";

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

          <div className="searchPage__options">
            <div className="searchPage__optionsLeft">
              <div className="searchPage__option">
                <SearchIcon />
                <Link to="/all">Todo</Link>
              </div>
              <div className="searchPage__option">
                <ArtTrackIcon />
                <Link to="/news">Noticias</Link>
              </div>
              <div className="searchPage__option">
                <WallpaperIcon />
                <Link to="/images">Imágenes</Link>
              </div>
              <div className="searchPage__option">
                <StoreIcon />
                <Link to="/shopping">Shopping</Link>
              </div>
              <div className="searchPage__option">
                <SlideshowIcon />
                <Link to="/videos">Vídeos</Link>
              </div>
              <div className="searchPage__option">
                <MoreVertIcon />
                <Link to="/more">more</Link>
              </div>
            </div>
            <div className="searchPage__optionsRight">
              <div className="searchPage__option">
                <Link to="/settings">Configuración</Link>
              </div>
              <div className="searchPage__option">
                <Link to="/tools">Herramientas</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {true && (
        <div className="searchPage__results">
          <p className="searchPage__resultCount">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime} seconds) for {term}
          </p>

          {data?.items.map((item) => (
            <div className="searchPage__result">
              <a href={item.link}>{item.displayLink}</a>
              <a href={item.link} className="searchPage__resultTitle">
                <h2>{item.title}</h2>
              </a>
              <p className="searchPage__resultSnippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
